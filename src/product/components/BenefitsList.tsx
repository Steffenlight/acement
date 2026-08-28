import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function BenefitsList() {
            return (
                <ul role={"list"} className={"chakra-list css-1fw928w"}>
                    <ListItem text="Increases cellular energy†" />
                    <ListItem text="Strengthens muscle*†" />
                </ul>
            )
        }
    

// Subcomponents

        function ListItem({ text }: { text: string }) {
            return (
                <li className={"chakra-list-item css-nipzpl"}>
                    {text}
                </li>
            )
        }
    

export default BenefitsList
