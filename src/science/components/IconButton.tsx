import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Menu_bars_three_lines from './icons/Menu_bars_three_lines.tsx'
import User_avatar_circle from './icons/User_avatar_circle.tsx'
import Magnifying_glass_search from './icons/Magnifying_glass_search.tsx'


    
// Component

        function IconButton({
            variant
        }: {
            variant: "menu" | "account" | "search";
        }) {
            return (
                <button
                    type={"button"}
                    className={variant === "menu" ? "chakra-button css-1qdrp3y sf-hidden" : "chakra-button css-95phje"}
                >
                    {variant === "menu" ? (
                        <Menu_bars_three_lines />
                    ) : variant === "account" ? (
                        <User_avatar_circle />
                    ) : (
                        <Magnifying_glass_search />
                    )}
                </button>
            )
        }
    

export default IconButton
