import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_right_thin from './icons/Arrow_right_thin.tsx'
import Left_pointing_arrow from './icons/Left_pointing_arrow.tsx'
import Left_pointing_arrow1 from './icons/Left_pointing_arrow1.tsx'
import Arrow_right_thin2 from './icons/Arrow_right_thin2.tsx'
import PaginationButton from './PaginationButton.tsx'
import Pagination from './Pagination.tsx'


    
// Component

        function PaginationButton1({
            variant
        }: {
            variant: "previous" | "next";
        }) {
            return (
                <button
                    type={"button"}
                    className={
                        variant === "previous"
                            ? "chakra-button css-1bt0urw"
                            : "chakra-button css-19mjsmh"
                    }
                >
                    {variant === "previous" ? <Left_pointing_arrow1 /> : <Arrow_right_thin2 />}
                </button>
            )
        }
    

export default PaginationButton1
