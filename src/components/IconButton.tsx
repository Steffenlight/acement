import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Menu_hamburger_three_bars from './icons/Menu_hamburger_three_bars.tsx'
import User_profile_silhouette from './icons/User_profile_silhouette.tsx'
import Magnifying_glass_search from './icons/Magnifying_glass_search.tsx'
import Folder_with_document from './icons/Folder_with_document.tsx'


    
// Component

        function IconButton({
            variant,
            icon,
            wrapped = false
        }: {
            variant: "menu" | "standard" | "cart";
            icon: "menu" | "account" | "search" | "cart";
            wrapped?: boolean;
        }) {
            const className =
                variant === "menu"
                    ? "chakra-button css-1qdrp3y sf-hidden"
                    : variant === "cart"
                        ? "chakra-button css-dc77fb"
                        : "chakra-button css-95phje";

            const iconElement =
                icon === "menu"
                    ? <Menu_hamburger_three_bars />
                    : icon === "account"
                        ? <User_profile_silhouette />
                        : icon === "search"
                            ? <Magnifying_glass_search />
                            : <Folder_with_document />;

            return (
                <button type={"button"} className={className}>
                    {wrapped ? <div className={"css-0"}>{iconElement}</div> : iconElement}
                </button>
            );
        }
    

export default IconButton
