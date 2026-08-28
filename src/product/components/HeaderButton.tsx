import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Three_horizontal_lines_menu from './icons/Three_horizontal_lines_menu.tsx'
import User_profile_silhouette from './icons/User_profile_silhouette.tsx'
import Magnifying_glass_zoom from './icons/Magnifying_glass_zoom.tsx'
import Briefcase_work_case from './icons/Briefcase_work_case.tsx'


    
// Component

        function HeaderButton({
            variant,
            buttonClass
        }: {
            variant: "menu" | "account" | "search" | "cart";
            buttonClass: string;
        }) {
            return (
                <button type={"button"} className={buttonClass}>
                    {variant === "menu" ? (
                        <Three_horizontal_lines_menu />
                    ) : variant === "account" ? (
                        <User_profile_silhouette />
                    ) : variant === "search" ? (
                        <Magnifying_glass_zoom />
                    ) : (
                        <div className={"css-0"}>
                            <span className={"css-naczm1"}>
                                2
                            </span>
                            <Briefcase_work_case />
                        </div>
                    )}
                </button>
            )
        }
    

export default HeaderButton
