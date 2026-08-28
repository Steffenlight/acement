import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Filled_circle from './icons/Filled_circle.tsx'


// Component

        function HealthEffectsList() {
            return (
                <ul className={"css-1h5j0j8"}>
                    <ListItem text="Insufficient energy supply" />
                    <ListItem text="Production of harmful molecules" />
                    <ListItem text="Reduced cellular health" />
                </ul>
            )
        }
    

// Subcomponents

        function ListItem({ text }: { text: string }) {
            return (
                <li
                    className={"css-fj24c4"}
                    style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px,10px)",
                        opacity: "0"
                    }}
                >
                    <Filled_circle />
                    <p className={"chakra-text css-er06se"}>
                        {text}
                    </p>
                </li>
            )
        }
    

export default HealthEffectsList
