import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Footer from './Footer.tsx'


    
// Component

        function FooterLink({
            label,
            id
        }: {
            label: string;
            id?: string;
        }) {
            return (
                <a className={"chakra-link css-srs6rl"} id={id}>
                    <span className={"chakra-text css-1nb9rkc"}>
                        <span className={"css-whh5e5"}>
                            {label}
                        </span>
                    </span>
                </a>
            )
        }
    

export default FooterLink
