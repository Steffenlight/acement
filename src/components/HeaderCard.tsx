import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Right_pointing_arrow from './icons/Right_pointing_arrow.tsx'


    
// Component

        function HeaderCard({
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
                        <Right_pointing_arrow />
                    </div>
                </a>
            )
        }
    

export default HeaderCard
