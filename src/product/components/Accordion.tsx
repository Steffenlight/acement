import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import AccordionButton from './AccordionButton.tsx'
import AccordionButton1 from './AccordionButton1.tsx'


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

            return (
                <div className={"chakra-accordion css-0"}>
                    {data.variant === "product"
                        ? data.items.map((item) => (
                            <ProductAccordionItem
                                key={item.buttonId}
                                buttonId={item.buttonId}
                                label={item.label}
                            />
                        ))
                        : data.items.map((item) => (
                            <FaqAccordionItem
                                key={item.buttonDataId}
                                className={item.className}
                                buttonDataId={item.buttonDataId}
                            />
                        ))}
                </div>
            );
        }
    

// Subcomponents

        function CollapsePanel() {
            return (
                <div
                    className={"css-i6bazn"}
                    style={{
                        height: "0px",
                        opacity: "0",
                        transform: "none",
                        transformOrigin: "50% 50% 0px"
                    }}
                >
                    <div
                        className={"chakra-collapse"}
                        style={{
                            overflow: "hidden",
                            display: "none",
                            opacity: "0",
                            height: "0px"
                        }}
                    >
                    </div>
                </div>
            );
        }

        function ProductAccordionItem({
            buttonId,
            label
        }: {
            buttonId: string;
            label: string;
        }) {
            return (
                <div className={"chakra-accordion__item css-3ttb7v"}>
                    <div role={"separator"} className={"css-o5vfml"}>
                    </div>
                    <AccordionButton
                        id={buttonId}
                        label={label}
                    />
                    <CollapsePanel />
                </div>
            );
        }

        function FaqAccordionItem({
            className,
            buttonDataId
        }: {
            className: string;
            buttonDataId: string;
        }) {
            return (
                <>
                    <div role={"separator"} className={"css-160z9us"}>
                    </div>
                    <div className={className}>
                        <AccordionButton1 dataId={buttonDataId} />
                        <CollapsePanel />
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
