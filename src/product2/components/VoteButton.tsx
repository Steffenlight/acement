import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Large_solid_circle from './icons/Large_solid_circle.tsx'
import Medium_solid_circle from './icons/Medium_solid_circle.tsx'


    
// Component

        function VoteButton({
            size
        }: {
            size: "large" | "medium";
        }) {
            return (
                <button type={"button"} className={"css-1cc1nyd"}>
                    {size === "large" ? <Large_solid_circle /> : <Medium_solid_circle />}
                    <p className={"chakra-text css-1ru3qeo"}>
                        0
                    </p>
                </button>
            )
        }
    

export default VoteButton
