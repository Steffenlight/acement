import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Thick_plus_sign from './icons/Thick_plus_sign.tsx'


    
// Component

        function SeeMoreButton({
            iconClassName
        }: {
            iconClassName: string;
        }) {
            return (
                <button type={"button"} className={"chakra-button css-1bmmiuo"}>
                    <span className={"children"}>
                        <div className={iconClassName}>
                            <div className={"css-s0utik"}>

                            </div>
                            <div className={"css-uyvrdz"}>

                            </div>
                            <div className={"css-p5i8oo"}>

                            </div>
                        </div>
                        <Thick_plus_sign />
                    </span>
                </button>
            )
        }
    

export default SeeMoreButton
