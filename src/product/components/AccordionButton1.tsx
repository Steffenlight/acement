import React from 'react'
import type { JSX } from 'react/jsx-runtime'


/* FAQ accordion button. Same plus-becomes-minus behaviour as the product
 * accordion's; see AccordionButton.tsx. */
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

        function AccordionButton1({
            dataId,
            id,
            expanded,
            panelId,
            onToggle
        }: {
            dataId: string;
            id: string;
            expanded: boolean;
            panelId: string;
            onToggle: () => void;
        }) {
            const { question } = getAccordionButtonData(dataId)

            return (
                <button
                    type={"button"}
                    id={id}
                    className={"chakra-accordion__button css-81x3z1"}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={onToggle}
                >
                    <span data-group={"true"} className={"css-1m02i1"}>
                        <span className={"chakra-text css-6b1js2"}>
                            {question}
                        </span>
                        <ToggleIcon expanded={expanded} />
                    </span>
                </button>
            )
        }


/* Questions and answers are ACE MEN's, replacing the captured Timeline set
 * ("What is Timeline and Mitopure?"). Drawn from docs/03-mechanism.md and
 * docs/04-offer-and-pricing.md. */
        type AccordionButtonData = {
            question: string;
            answer: string;
        }

        const FAQ: Record<string, AccordionButtonData> = {
            "0": {
                question: "What is ACE?",
                answer:
                    "An eight-ingredient testosterone support formula. Every active is " +
                    "included at the dose used in its published human research, and each " +
                    "one is standardized to a stated percentage of its measurable active " +
                    "compound. No proprietary blends.",
            },
            "1": {
                question: "How is it different from the others?",
                answer:
                    "Most of the category is built on doses too small to match the studies " +
                    "they cite, in blends that hide how much of anything you are getting. " +
                    "Tongkat ali in particular is one of the most adulterated extracts sold. " +
                    "We publish the standardization percentage for every ingredient and a " +
                    "certificate of analysis for every batch.",
            },
            "2": {
                question: "Who is it for?",
                answer:
                    "Men who already train, sleep and eat with some intent, and who read " +
                    "their own bloodwork. It is a support formula, not a treatment. If your " +
                    "levels are clinically low, that is a conversation with a doctor.",
            },
            "3": {
                question: "How do I take it?",
                answer:
                    "Five capsules daily with food. One box holds 150 capsules, a 30-day " +
                    "supply. Consistency matters more than timing.",
            },
            "4": {
                question: "How long until it does anything?",
                answer:
                    "Ashwagandha is usually the first thing people notice, often through " +
                    "sleep, within a few weeks. Tongkat ali and shilajit work slowly and " +
                    "tend to show on a blood panel before they show in how you feel. Give " +
                    "it a full cycle before deciding.",
            },
        }

        function getAccordionButtonData(id: string): AccordionButtonData {
            return FAQ[String(id)] ?? FAQ["0"]
        }

export { getAccordionButtonData }
export default AccordionButton1
