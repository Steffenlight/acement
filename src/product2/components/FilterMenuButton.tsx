import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Downward_chevron_arrow from './icons/Downward_chevron_arrow.tsx'


    
// Component

        function FilterMenuButton({
            label,
            id
        }: {
            label: string;
            id: string;
        }) {
            return (
                <button type={"button"} className={"chakra-button chakra-menu__menu-button css-1vxn126"} id={id}>
                    <span className={"children"}>
                        <span className={"css-xl71ch"}>
                            {label}
                        </span>
                    </span>
                    <span className={"chakra-button__icon css-yblvin"}>
                        <Downward_chevron_arrow />
                    </span>
                </button>
            )
        }
    

export default FilterMenuButton
