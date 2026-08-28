import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


    
// Component

        function ImageContainer({
            variant,
            imageId
        }: {
            variant: "css-1z0hfml" | "css-l5goe2";
            imageId: string;
        }) {
            return (
                <div className={variant}>
                    <div className={"css-h4pti5"}>
                        <Img id={imageId} />
                    </div>
                </div>
            )
        }
    

export default ImageContainer
