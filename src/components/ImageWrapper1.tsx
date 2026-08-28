import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import ImageWrapper from './ImageWrapper.tsx'


    
// Component

        function ImageWrapper1({
            className,
            imgId
        }: {
            className: string;
            imgId: string;
        }) {
            return (
                <div className={className}>
                    <div className={"css-h4pti5"}>
                        <Img id={imgId} />
                    </div>
                </div>
            )
        }
    

export default ImageWrapper1
