import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_right_solid from './icons/Arrow_right_solid.tsx'


    
// Component

        function ScienceLink({
            label,
            trackingId,
        }: {
            label: string;
            trackingId: string;
        }) {
            return (
                <a className={"chakra-linkbox__overlay css-1hnz6hu"}>
                    <div id={trackingId} className={"css-l0occv"}>
                        <h2 className={"chakra-text css-1h8ehqw"}>
                            {label}
                        </h2>
                        <Arrow_right_solid />
                    </div>
                </a>
            )
        }
    

export default ScienceLink
