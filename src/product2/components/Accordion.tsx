import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import AccordionButton from './AccordionButton.tsx'
import AccordionButton1, { getAccordionButtonData } from './AccordionButton1.tsx'
import PANELS from './AccordionPanels.tsx'


/* The capture shipped these as dead buttons: Chakra's class names, but no
 * state, no handlers, and CollapsePanel hard-coded to height 0 / display none.
 * Behaviour rebuilt to match timeline.com, checked against the live site:
 *
 *   - Single-open. Opening one item closes the other; there is no state where
 *     two panels are expanded.
 *   - The plus becomes a minus in place — the icon is not rotated and no
 *     second glyph is swapped in, the vertical stroke is just dropped.
 *
 * Height is animated with a 0fr → 1fr grid row rather than by measuring the
 * panel, so it works on content of any height with no ResizeObserver and no
 * layout read. The captured css-i6bazn (overflow: hidden) is kept on the
 * clipping element, which is exactly what that class did in the original. */

        type AccordionData =
            | {
                variant: "product";
                items: Array<{
                    buttonId: string;
                    label: string;
                }>;
              }
            | {
                variant: "faq";
                items: Array<{
                    className: string;
                    buttonDataId: string;
                }>;
              };

// Component

        function Accordion({ dataId }: { dataId: string }) {
            const data: AccordionData = getAccordionData(dataId);
            const [openKey, setOpenKey] = React.useState<string | null>(null);

            const toggle = (key: string) =>
                setOpenKey(current => (current === key ? null : key));

            return (
                <div className={"chakra-accordion css-0"}>
                    {data.variant === "product"
                        ? data.items.map((item) => (
                            <ProductAccordionItem
                                key={item.buttonId}
                                buttonId={item.buttonId}
                                label={item.label}
                                expanded={openKey === item.buttonId}
                                onToggle={() => toggle(item.buttonId)}
                            />
                        ))
                        : data.items.map((item) => (
                            <FaqAccordionItem
                                key={item.buttonDataId}
                                className={item.className}
                                buttonDataId={item.buttonDataId}
                                expanded={openKey === item.buttonDataId}
                                onToggle={() => toggle(item.buttonDataId)}
                            />
                        ))}
                </div>
            );
        }


// Subcomponents

        function CollapsePanel({
            id,
            labelledBy,
            expanded,
            children
        }: {
            id: string;
            labelledBy: string;
            expanded: boolean;
            children?: React.ReactNode;
        }) {
            return (
                <div
                    className={"css-i6bazn ac-collapse"}
                    data-expanded={expanded ? "true" : "false"}
                >
                    <div className={"ac-collapse__inner"}>
                        <div
                            id={id}
                            role={"region"}
                            aria-labelledby={labelledBy}
                            hidden={!expanded}
                            className={"chakra-accordion__panel ac-panel"}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            );
        }

        function ProductAccordionItem({
            buttonId,
            label,
            expanded,
            onToggle
        }: {
            buttonId: string;
            label: string;
            expanded: boolean;
            onToggle: () => void;
        }) {
            const panelId = `${buttonId}-panel`;
            const Panel = PANELS[label];

            return (
                <div className={"chakra-accordion__item css-3ttb7v"}>
                    <div role={"separator"} className={"css-o5vfml"}>
                    </div>
                    <AccordionButton
                        id={buttonId}
                        label={label}
                        expanded={expanded}
                        panelId={panelId}
                        onToggle={onToggle}
                    />
                    <CollapsePanel id={panelId} labelledBy={buttonId} expanded={expanded}>
                        {Panel ? <Panel /> : null}
                    </CollapsePanel>
                </div>
            );
        }

        function FaqAccordionItem({
            className,
            buttonDataId,
            expanded,
            onToggle
        }: {
            className: string;
            buttonDataId: string;
            expanded: boolean;
            onToggle: () => void;
        }) {
            const panelId = `faq-panel-${buttonDataId}`;
            const buttonId = `faq-button-${buttonDataId}`;

            return (
                <>
                    <div role={"separator"} className={"css-160z9us"}>
                    </div>
                    <div className={className}>
                        <AccordionButton1
                            dataId={buttonDataId}
                            id={buttonId}
                            expanded={expanded}
                            panelId={panelId}
                            onToggle={onToggle}
                        />
                        <CollapsePanel id={panelId} labelledBy={buttonId} expanded={expanded}>
                            <p>{getAccordionButtonData(buttonDataId).answer}</p>
                        </CollapsePanel>
                    </div>
                </>
            );
        }



        function getAccordionData(id: string): AccordionData {
            const stringId = String(id);

            if (stringId === "0") {
                return {
                    variant: "product",
                    items: [
                        {
                            buttonId: "accordion-button-_R_cp5ahambqm6_",
                            label: "Clinically proven benefits"
                        },
                        {
                            buttonId: "accordion-button-_R_kp5ahambqm6_",
                            label: "Key ingredients"
                        },
                        {
                            buttonId: "accordion-button-_R_sp5ahambqm6_",
                            label: "How to use"
                        }
                    ]
                };
            }

            return {
                variant: "faq",
                items: [
                    {
                        className: "chakra-accordion__item faq-1 css-18zazm2",
                        buttonDataId: "0"
                    },
                    {
                        className: "chakra-accordion__item faq-2 css-18zazm2",
                        buttonDataId: "1"
                    },
                    {
                        className: "chakra-accordion__item faq-3 css-18zazm2",
                        buttonDataId: "2"
                    },
                    {
                        className: "chakra-accordion__item faq-4 css-18zazm2",
                        buttonDataId: "3"
                    },
                    {
                        className: "chakra-accordion__item faq-5 css-18zazm2",
                        buttonDataId: "4"
                    }
                ]
            };
        }


export default Accordion
