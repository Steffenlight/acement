import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_right_thin from './icons/Arrow_right_thin.tsx'


    
// Component

        function ScienceLink({
            label,
            trackingId
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
                        <Arrow_right_thin />
                    </div>
                </a>
            )
        }
    

export default ScienceLink
