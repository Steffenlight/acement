import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import HeaderCard from './HeaderCard.tsx'


    
// Component

        function ScienceNavigationCard({
            imageId,
            label,
            trackingId
        }: {
            imageId: string;
            label: string;
            trackingId: string;
        }) {
            return (
                <div role={"group"} className={"chakra-linkbox science-navigation-card css-10n1vic"}>
                    <div className={"css-167n8yk"}>
                        <Img id={imageId} />
                    </div>
                    <HeaderCard label={label} trackingId={trackingId} />
                </div>
            )
        }
    

export default ScienceNavigationCard
