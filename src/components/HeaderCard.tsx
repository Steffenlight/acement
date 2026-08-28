import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'

import { routeForLabel } from '../lib/navRoutes.ts'

import Right_pointing_arrow from './icons/Right_pointing_arrow.tsx'


    
// Component

        function HeaderCard({
            label,
            trackingId
        }: {
            label: string;
            trackingId: string;
        }) {
            const inner = (
                <div id={trackingId} className={"css-l0occv"}>
                    <h2 className={"chakra-text css-1h8ehqw"}>
                        {label}
                    </h2>
                    <Right_pointing_arrow />
                </div>
            )
            const to = routeForLabel(label)

            if (to) {
                return <Link to={to} className={"chakra-linkbox__overlay css-1hnz6hu"}>{inner}</Link>
            }

            return (
                <a className={"chakra-linkbox__overlay css-1hnz6hu"}>
                    {inner}
                </a>
            )
        }
    

export default HeaderCard
