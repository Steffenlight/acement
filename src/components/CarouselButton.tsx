import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Right_pointing_arrow from './icons/Right_pointing_arrow.tsx'
import Right_pointing_arrow3 from './icons/Right_pointing_arrow3.tsx'
import Right_pointing_arrow4 from './icons/Right_pointing_arrow4.tsx'


    
// Component

        function CarouselButton({
            className,
            disabled,
            isNext
        }: {
            className: string;
            disabled: boolean;
            isNext: boolean;
        }) {
            return (
                <button
                    type={"button"}
                    className={className}
                    {...(disabled ? { disabled: "" } : {})}
                >
                    <span className={"children"}>
                        {isNext ? <Right_pointing_arrow4 /> : <Right_pointing_arrow3 />}
                    </span>
                </button>
            )
        }
    

export default CarouselButton
