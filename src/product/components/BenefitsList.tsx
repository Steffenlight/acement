import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function BenefitsList() {
            return (
                <ul role={"list"} className={"chakra-list css-1fw928w"}>
                    <ListItem text="8 Ingredients at Full Clinical Doses" />
                    <ListItem text="Used by 450+ TRT Clinics in the US" />
                    <ListItem text="Formulated in USA & Third-Party Tested" />
                    <ListItem text="90-Day 100% Money-Back Guarantee" />
                    <ListItem text="Fast & Free Shipping on First Order" />
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
