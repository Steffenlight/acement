import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import ScienceLink from './ScienceLink.tsx'


    
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
                <div role={"group"} className={"chakra-linkbox navigation-card css-10n1vic"}>
                    <div className={"css-1tnggiq"}>
                        <Img id={imageId} />
                    </div>
                    <ScienceLink
                        label={label}
                        trackingId={trackingId}
                    />
                </div>
            )
        }
    

export default ScienceNavigationCard
