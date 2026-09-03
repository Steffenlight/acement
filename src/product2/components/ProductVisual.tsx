import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import LineBreak from './LineBreak.tsx'


    
// Component

        function ProductVisual({
            primaryImageId,
            secondaryImageId,
            showSugarFree
        }: {
            primaryImageId: string;
            secondaryImageId: string;
            showSugarFree: boolean;
        }) {
            return (
                <div className={"css-3qzm71"}>
                    <div className={"css-l8fc8q"}>
                        {showSugarFree && (
                            <span className={"chakra-badge product_badge css-19zfmbw"}>
                                <span className={"css-1tqud6q"}>
                                    Sugar Free
                                </span>
                            </span>
                        )}
                        <div className={"css-1z0hfml"}>
                            <div className={"css-h4pti5"}>
                                <Img id={primaryImageId} />
                            </div>
                        </div>
                        <div className={"css-l5goe2"}>
                            <div className={"css-h4pti5"}>
                                <Img id={secondaryImageId} />
                            </div>
                        </div>
                        <div className={"css-1a1befc"}>
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
                        </div>
                    </div>
                </div>
            )
        }
    

export default ProductVisual
