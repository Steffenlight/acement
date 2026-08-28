import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


    
// Component

        function NestedImage({
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
    

export default NestedImage
