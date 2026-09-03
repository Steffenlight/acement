import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


    
// Component

        function ImageButton({ imgId }: { imgId: string }) {
            return (
                <button type={"button"} className={"chakra-button css-16qihgx"}>
                    <span className={"children"}>
                        <div className={"css-h4pti5"}>
                            <Img id={imgId} />
                        </div>
                    </span>
                </button>
            )
        }
    

export default ImageButton
