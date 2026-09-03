import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function MenuItem({
            id,
            label
        }: {
            id: string;
            label: string;
        }) {
            return (
                <button
                    type={"button"}
                    id={id}
                    role={"menuitem"}
                    tabIndex={"-1"}
                    className={"chakra-menu__menuitem css-x5tasw"}
                >
                    {label}
                </button>
            )
        }
    

export default MenuItem
