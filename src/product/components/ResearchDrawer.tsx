import React from 'react'
import type { JSX } from 'react/jsx-runtime'


/* Clinical research drawer, opened from under the ingredient grid.
 *
 * Shell follows timeline.com's study drawer, read off their live science page:
 * a *white* scrim rather than the usual black one, a paper panel, a table of
 * contents rail beside the content, and section headings over dotted rules.
 * The white scrim is the detail worth keeping — a black overlay on a paper
 * page reads as a cookie banner, and Timeline's version keeps the page feeling
 * present behind the panel instead of switched off.
 *
 * Content model follows innerbody's, which is the better one for a formula
 * like ours: research organised per ingredient rather than as one product
 * trial, because per-ingredient evidence is what we actually have.
 *
 * ────────────────────────────────────────────────────────────────────────
 * CITATIONS ARE DELIBERATELY EMPTY.
 *
 * Every section below has a `citations: []`. I did not fill these in, and
 * they should not be filled in from memory by anyone else either. A wrong
 * volume number or year on a page whose entire positioning is rigour is a
 * worse failure than having no list at all, and docs/10 is explicit that a
 * dressed-up evidence base is a liability with exactly this customer.
 *
 * To populate: pull each paper from PubMed, verify authors/journal/year/DOI
 * against the record, and add it as { text, doi }. The list renders only when
 * non-empty, so the drawer is correct and shippable as it stands — it shows
 * what the research covers without claiming specific papers it cannot name.
 *
 * The summaries themselves are safe: they describe what has been studied,
 * not what our product does, and carry no numbers.
 * ──────────────────────────────────────────────────────────────────────── */

type Citation = { text: string; doi: string | null }

type Section = {
    id: string
    name: string
    dose: string
    /** What the research base covers. Observation language, no numbers. */
    summary: string
    citations: Citation[]
}

const SECTIONS: Section[] = [
    {
        id: 'tongkat-ali',
        name: 'Tongkat Ali',
        dose: '1,000 mg',
        summary:
            'Studied in men for serum testosterone, free testosterone and sexual function, ' +
            'mostly in trials running eight to twelve weeks. The research base is the reason ' +
            'this is the largest single dose in the formula, and the reason we state the ' +
            'eurycomanone percentage: results track the standardized active, not the raw ' +
            'extract weight.',
        citations: [],
    },
    {
        id: 'fenugreek',
        name: 'Fenugreek',
        dose: '675 mg',
        summary:
            'Trials have looked at free testosterone, body composition and sexual function ' +
            'in men, typically over eight to twelve weeks and typically alongside resistance ' +
            'training. Effects are reported against standardized saponin content, which is ' +
            'why ours is stated.',
        citations: [],
    },
    {
        id: 'shilajit',
        name: 'Shilajit',
        dose: '400 mg',
        summary:
            'Studied in men for total and free testosterone and for semen quality, at ' +
            'purified extracts standardized to fulvic acid. The research is smaller and ' +
            'more recent than tongkat ali’s.',
        citations: [],
    },
    {
        id: 'zinc',
        name: 'Zinc',
        dose: '30 mg',
        summary:
            'One of the longest-standing lines of research here. Zinc status is established ' +
            'as a factor in testosterone metabolism, and the clearest effects appear in men ' +
            'who were deficient to begin with rather than in men who were not.',
        citations: [],
    },
    {
        id: 'boron',
        name: 'Boron',
        dose: '4 mg',
        summary:
            'Studied for free testosterone and for SHBG, the binding protein that determines ' +
            'how much testosterone is actually available. The trials are small, and the ' +
            'effect reported is on the free fraction rather than on total testosterone.',
        citations: [],
    },
    {
        id: 'vitamin-d',
        name: 'Vitamin D',
        dose: '4,000 IU',
        summary:
            'Studied for testosterone, muscle strength and bone health. As with zinc, the ' +
            'signal is strongest in people who started deficient, which is common enough at ' +
            'northern latitudes to be worth dosing for.',
        citations: [],
    },
    {
        id: 'k1-k2',
        name: 'K1 & K2',
        dose: '100 mcg',
        summary:
            'Included for what it does alongside D3 rather than on its own. The research ' +
            'covers calcium handling and bone density, and is the reason D3 is rarely dosed ' +
            'without it.',
        citations: [],
    },
    {
        id: 'taurine',
        name: 'Taurine',
        dose: '675 mg',
        summary:
            'Studied for oxidative stress and blood flow. Note that the human research on ' +
            'taurine sits at doses well above this one; see the note in FormulaGrid.tsx on ' +
            'why our own roster replaces it.',
        citations: [],
    },
]


function CloseIcon() {
    return (
        <svg viewBox={'0 0 20 20'} fill={'none'} aria-hidden={'true'}>
            <path d={'M5 5l10 10M15 5L5 15'} stroke={'currentColor'} strokeWidth={'1.3'} strokeLinecap={'round'} />
        </svg>
    )
}


function ResearchDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
    const panelRef = React.useRef<HTMLDivElement | null>(null)
    const closeRef = React.useRef<HTMLButtonElement | null>(null)
    const [active, setActive] = React.useState<string>(SECTIONS[0].id)

    // Escape closes, and the page behind must not scroll while the panel is
    // open — on iOS especially, a scrollable body under a fixed panel is the
    // difference between a drawer and a broken page.
    React.useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onKey)
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        closeRef.current?.focus()
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prev
        }
    }, [open, onClose])

    // Highlights the table of contents entry for whatever is on screen.
    React.useEffect(() => {
        if (!open) return
        const root = panelRef.current
        if (!root) return
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
                if (visible) setActive(visible.target.id)
            },
            { root, rootMargin: '-10% 0px -70% 0px', threshold: 0 }
        )
        root.querySelectorAll('[data-rd-section]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [open])

    const goTo = (id: string) => {
        const el = panelRef.current?.querySelector(`#${CSS.escape(id)}`)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className={'rd'} data-open={open ? 'true' : 'false'} aria-hidden={!open}>
            <button className={'rd-scrim'} tabIndex={-1} aria-label={'Close'} onClick={onClose} />

            <div
                className={'rd-panel'}
                role={'dialog'}
                aria-modal={'true'}
                aria-labelledby={'rd-title'}
                ref={panelRef}
            >
                <button className={'rd-close'} onClick={onClose} aria-label={'Close'} ref={closeRef}>
                    <CloseIcon />
                </button>

                <div className={'rd-inner'}>
                    <nav className={'rd-toc'} aria-label={'Ingredients'}>
                        <p className={'rd-toc__label'}>Table of contents</p>
                        <ul>
                            {SECTIONS.map(s => (
                                <li key={s.id}>
                                    <button
                                        type={'button'}
                                        className={'rd-toc__link'}
                                        aria-current={active === s.id ? 'true' : undefined}
                                        onClick={() => goTo(s.id)}
                                    >
                                        {s.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={'rd-body'}>
                        <p className={'rd-eyebrow'}>Clinical research</p>
                        <h2 className={'rd-title'} id={'rd-title'}>
                            What has been studied, ingredient by ingredient
                        </h2>
                        <p className={'rd-standfirst'}>
                            ACE has not been through a trial of its own. What follows is the
                            published human research on each ingredient at the dose we use — the
                            basis for the formula, and the limit of what we will claim from it.
                        </p>

                        {SECTIONS.map(s => (
                            <section className={'rd-section'} id={s.id} data-rd-section={'true'} key={s.id}>
                                <div className={'rd-section__head'}>
                                    <h3 className={'rd-section__name'}>{s.name}</h3>
                                    <span className={'rd-section__dose'}>{s.dose}</span>
                                </div>
                                <p className={'rd-section__summary'}>{s.summary}</p>

                                {s.citations.length > 0 && (
                                    <ol className={'rd-cites'}>
                                        {s.citations.map(c => (
                                            <li key={c.text}>
                                                {c.text}
                                                {c.doi && (
                                                    <>
                                                        {' '}
                                                        <a
                                                            className={'rd-doi'}
                                                            href={`https://doi.org/${c.doi}`}
                                                            target={'_blank'}
                                                            rel={'noopener noreferrer'}
                                                        >
                                                            doi:{c.doi}
                                                        </a>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </section>
                        ))}

                        <p className={'rd-foot'}>
                            Research on an ingredient is not research on this product. These
                            statements have not been evaluated by the Food and Drug
                            Administration. This product is not intended to diagnose, treat, cure
                            or prevent any disease.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ResearchDrawer
