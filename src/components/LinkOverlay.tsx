import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function LinkOverlay({ label }: { label: string }) {
            return (
                <a className={"chakra-linkbox__overlay css-fd176x"} target={"_self"}>
                    <p className={"chakra-text css-18ogj9d"}>
                        {label}
                    </p>
                </a>
            )
        }
    

export default LinkOverlay
