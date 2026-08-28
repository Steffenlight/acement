import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'

import { routeForLabel } from '../lib/navRoutes.ts'

import Footer from './Footer.tsx'


    
// Component

        function FooterLink({
            label,
            id
        }: {
            label: string;
            id?: string;
        }) {
            const content = (
                <span className={"chakra-text css-1nb9rkc"}>
                    <span className={"css-whh5e5"}>
                        {label}
                    </span>
                </span>
            )
            const to = routeForLabel(label)

            if (to) {
                return <Link to={to} className={"chakra-link css-srs6rl"} id={id}>{content}</Link>
            }

            return (
                <a className={"chakra-link css-srs6rl"} id={id}>
                    {content}
                </a>
            )
        }
    

export default FooterLink
