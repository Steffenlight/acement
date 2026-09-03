import React from 'react'
import type { JSX } from 'react/jsx-runtime'


/* The plus/minus control. Matches timeline.com: the icon is not rotated or
 * swapped for a different glyph — the vertical stroke is simply dropped when
 * the item opens, so a plus becomes a minus in place. */
function ToggleIcon({ expanded }: { expanded: boolean }) {
    return (
        <svg
            viewBox={"0 0 20 20"}
            focusable={"false"}
            className={"chakra-icon css-nyt2fo"}
            xmlns={"http://www.w3.org/2000/svg"}
            aria-hidden={"true"}
        >
            <path d={"M3 10H17"} stroke={"currentColor"} strokeLinecap={"round"} vectorEffect={"non-scaling-stroke"} />
            {!expanded && (
                <path d={"M10 3V17"} stroke={"currentColor"} strokeLinecap={"round"} vectorEffect={"non-scaling-stroke"} />
            )}
        </svg>
    )
}


// Component

        function AccordionButton({
            id,
            label,
            expanded,
            panelId,
            onToggle
        }: {
            id: string;
            label: string;
            expanded: boolean;
            panelId: string;
            onToggle: () => void;
        }) {
            return (
                <button
                    type={"button"}
                    id={id}
                    className={"chakra-accordion__button css-lihgdf"}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={onToggle}
                >
                    <h2 className={"chakra-text css-18ogj9d"}>
                        {label}
                    </h2>
                    <ToggleIcon expanded={expanded} />
                </button>
            )
        }


export default AccordionButton
