#!/usr/bin/env python3
"""Slice before/after composites into individual frames for the verified
results band on the product page.

The source files are wide composites on a white ground, each holding two
before/after pairs (four panels). This finds the panels by scanning for
columns that are not white, groups them into runs, splits any run that is
wide enough to be two touching panels, then writes one webp per panel.

Panels keep their native aspect ratio. Framing is CSS's job: .vr-frame in
verified-results.css sets the aspect and object-fit, so a reframe is a
one-line change there rather than a re-export here.

Usage:
    python3 scripts/slice-results.py incoming/pair-a.png incoming/pair-b.png

Writes public/images/results/subject-NN-week0.webp and -week12.webp,
numbered in the order panels appear left to right across the arguments.
"""

import sys
from pathlib import Path

from PIL import Image

OUT_DIR = Path(__file__).resolve().parent.parent / "public" / "images" / "results"

# A pixel counts as background if every channel is at least this bright. The
# composites use a pure white ground, but JPEG ringing along the panel edges
# lands a few levels below 255.
WHITE = 244

# A column is background if fewer than this share of its pixels are content.
# Guards against a stray dark speck holding a gap open.
COL_INK = 0.02

# Runs narrower than this share of the image width are noise, not panels.
MIN_RUN = 0.04

# A run wider than this multiple of its own height is two touching panels.
SPLIT_ASPECT = 0.62

MAX_WIDTH = 1200
QUALITY = 82

# Per-panel trim, applied after detection, as fractions of the panel box:
# (left, top, right, bottom).
#
# Detection finds the photograph; it cannot know that the two photographs of
# one man were taken at different distances. Where a pair does not match,
# the wider of the two is trimmed here so both frames show the same stretch
# of body. Keyed by output filename so re-running the script is idempotent.
#
# subject-03: week 0 is a close head-to-belt shot, week 12 is a full-length
# mirror selfie. Trimming week 12 to the upper two thirds puts them at
# comparable scale.
TRIM = {
    "subject-03-week12.webp": (0.0, 0.0, 0.0, 0.34),
}


def content_columns(img):
    """Return, per column, whether it holds non-background pixels."""
    g = img.convert("L")
    w, h = g.size
    px = g.load()
    out = []
    for x in range(w):
        ink = sum(1 for y in range(h) if px[x, y] < WHITE)
        out.append(ink / h >= COL_INK)
    return out


def runs_of(flags, min_len):
    """Group a boolean list into (start, end) runs of True at least min_len long."""
    runs, start = [], None
    for i, on in enumerate(flags):
        if on and start is None:
            start = i
        elif not on and start is not None:
            if i - start >= min_len:
                runs.append((start, i))
            start = None
    if start is not None and len(flags) - start >= min_len:
        runs.append((start, len(flags)))
    return runs


def vertical_bounds(img, x0, x1):
    """Top and bottom of the content inside a column range."""
    g = img.convert("L").crop((x0, 0, x1, img.height))
    w, h = g.size
    px = g.load()
    top, bottom = 0, h
    for y in range(h):
        if any(px[x, y] < WHITE for x in range(w)):
            top = y
            break
    for y in range(h - 1, -1, -1):
        if any(px[x, y] < WHITE for x in range(w)):
            bottom = y + 1
            break
    return top, bottom


def split_seam(img, x0, x1):
    """Find the join between two touching panels, near the run's midpoint.

    Scans a window around the centre for the column with the least content.
    Two photographs butted together almost always leave one near-empty column
    at the seam; if they do not, the midpoint is a fair fallback.
    """
    mid = (x0 + x1) // 2
    window = max(4, (x1 - x0) // 12)
    g = img.convert("L")
    px = g.load()
    h = g.height
    best, best_ink = mid, None
    for x in range(max(x0 + 1, mid - window), min(x1 - 1, mid + window)):
        ink = sum(1 for y in range(h) if px[x, y] < WHITE)
        if best_ink is None or ink < best_ink:
            best, best_ink = x, ink
    return best


def panels(path):
    """Yield (left, top, right, bottom) boxes for each panel in a composite."""
    img = Image.open(path)
    img = img.convert("RGB")
    cols = content_columns(img)
    found = []
    for x0, x1 in runs_of(cols, int(img.width * MIN_RUN)):
        top, bottom = vertical_bounds(img, x0, x1)
        height = bottom - top
        if height and (x1 - x0) / height > SPLIT_ASPECT:
            seam = split_seam(img, x0, x1)
            for a, b in ((x0, seam), (seam, x1)):
                t, bo = vertical_bounds(img, a, b)
                found.append((a, t, b, bo))
        else:
            found.append((x0, top, x1, bottom))
    return img, found


def main(argv):
    if not argv:
        print(__doc__)
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    boxes = []
    for arg in argv:
        path = Path(arg)
        if not path.exists():
            print(f"missing: {path}")
            return 1
        img, found = panels(path)
        print(f"{path.name}: {len(found)} panel(s)")
        for box in found:
            print(f"    {box}  {box[2] - box[0]}x{box[3] - box[1]}")
            boxes.append((img, box))

    if len(boxes) % 2:
        print(f"\n{len(boxes)} panels found — expected an even number, one pair per man.")
        print("Check the boxes above and adjust SPLIT_ASPECT or MIN_RUN if a pair was")
        print("read as one panel or a panel was read as two.")
        return 1

    for i in range(0, len(boxes), 2):
        subject = i // 2 + 1
        for box, label in ((boxes[i], "week0"), (boxes[i + 1], "week12")):
            img, rect = box
            crop = img.crop(rect)
            name = f"subject-{subject:02d}-{label}.webp"
            if name in TRIM:
                l, t, r, b = TRIM[name]
                w, h = crop.size
                crop = crop.crop((
                    round(w * l), round(h * t),
                    round(w * (1 - r)), round(h * (1 - b)),
                ))
            if crop.width > MAX_WIDTH:
                h = round(crop.height * MAX_WIDTH / crop.width)
                crop = crop.resize((MAX_WIDTH, h), Image.LANCZOS)
            out = OUT_DIR / name
            crop.save(out, "WEBP", quality=QUALITY, method=6)
            print(f"wrote {out.relative_to(OUT_DIR.parent.parent.parent)}  {crop.width}x{crop.height}")

    print(f"\n{len(boxes) // 2} subject(s) written to {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
