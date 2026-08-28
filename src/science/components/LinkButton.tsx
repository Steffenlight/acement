import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function LinkButton({
            className,
            label
        }: {
            className: string;
            label: string;
        }) {
            return (
                <a className={className}>
                    <span className={"children"}>
                        {label}
                    </span>
                </a>
            )
        }
    

export default LinkButton
