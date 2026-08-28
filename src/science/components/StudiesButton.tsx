import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function StudiesButton({ label }: { label: string }) {
            return (
                <button type={"button"} className={"chakra-button css-1giyd6w"}>
                    <span className={"children"}>
                        <p className={"chakra-text css-18ogj9d"}>
                            {label}
                        </p>
                    </span>
                </button>
            )
        }
    

export default StudiesButton
