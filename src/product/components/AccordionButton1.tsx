import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Centered_plus_sign from './icons/Centered_plus_sign.tsx'
import Centered_plus_sign1 from './icons/Centered_plus_sign1.tsx'
import AccordionButton from './AccordionButton.tsx'
import Accordion from './Accordion.tsx'


        type AccordionButtonData = {
            buttonId: string;
            question: string;
        }
    
// Component

        function AccordionButton1({ dataId }: { dataId: string }) {
            const { buttonId, question }: AccordionButtonData = getAccordionButtonData(dataId)

            return (
                <button
                    type={"button"}
                    id={buttonId}
                    className={"chakra-accordion__button css-81x3z1"}
                >
                    <span data-group={"true"} className={"css-1m02i1"}>
                        <span className={"chakra-text css-6b1js2"}>
                            {question}
                        </span>
                        <Centered_plus_sign1 />
                    </span>
                </button>
            )
        }
    


        function getAccordionButtonData(id: string): AccordionButtonData {
            const stringId = String(id)

            const data: Record<string, AccordionButtonData> = {
                "0": {
                    buttonId: "accordion-button-_R_19lajqmbqm6_",
                    question: "What is Timeline and Mitopure?"
                },
                "1": {
                    buttonId: "accordion-button-_R_29lajqmbqm6_",
                    question: "Why is it important? "
                },
                "2": {
                    buttonId: "accordion-button-_R_39lajqmbqm6_",
                    question: "Who should take it?"
                },
                "3": {
                    buttonId: "accordion-button-_R_49lajqmbqm6_",
                    question: "What is the recommended dosage? "
                },
                "4": {
                    buttonId: "accordion-button-_R_59lajqmbqm6_",
                    question: "What is our story?"
                }
            }

            return data[stringId] ?? data["0"]
        }
    

export default AccordionButton1
