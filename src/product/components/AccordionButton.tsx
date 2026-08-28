import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Centered_plus_sign from './icons/Centered_plus_sign.tsx'
import Accordion from './Accordion.tsx'


    
// Component

        function AccordionButton({
            id,
            label
        }: {
            id: string;
            label: string;
        }) {
            return (
                <button
                    type={"button"}
                    id={id}
                    className={"chakra-accordion__button css-lihgdf"}
                >
                    <h2 className={"chakra-text css-18ogj9d"}>
                        {label}
                    </h2>
                    <Centered_plus_sign />
                </button>
            )
        }
    

export default AccordionButton
