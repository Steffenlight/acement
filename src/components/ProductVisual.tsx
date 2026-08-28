import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import LineBreak from './LineBreak.tsx'


    
// Component

        function ProductVisual({
            primaryImageId,
            secondaryImageId,
            badgeLabel
        }: {
            primaryImageId: string;
            secondaryImageId: string;
            badgeLabel?: string;
        }) {
            return (
                <div className={"css-3qzm71"}>
                    <div className={"css-l8fc8q"}>
                        {badgeLabel !== undefined && (
                            <ProductBadge label={badgeLabel} />
                        )}
                        <ImageSlot className="css-1z0hfml" imageId={primaryImageId} />
                        <ImageSlot className="css-l5goe2" imageId={secondaryImageId} />
                        <div className={"css-1a1befc"}>
                            <RecommendationBadge />
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function ProductBadge({ label }: { label: string }) {
            return (
                <span className={"chakra-badge product_badge css-19zfmbw"}>
                    <span className={"css-1tqud6q"}>
                        {label}
                    </span>
                </span>
            )
        }

        function ImageSlot({
            className,
            imageId
        }: {
            className: string;
            imageId: string;
        }) {
            return (
                <div className={className}>
                    <div className={"css-h4pti5"}>
                        <Img id={imageId} />
                    </div>
                </div>
            )
        }

        function RecommendationBadge() {
            return (
                <div className={"badge--recommended css-1ir74y5"}>
                    <div className={"css-gmuwbf"}>
                        <p className={"chakra-text css-6as39q"}>
                            #1
                        </p>
                    </div>
                    <div className={"css-k7wjh8"}>

                    </div>
                    <span className={"chakra-text css-11974he"}>
                        Doctor Recommended
                        <LineBreak />
                        <span className={"css-17ybs49"}>
                            Urolithin A Brand
                        </span>
                    </span>
                </div>
            )
        }
    

export default ProductVisual
