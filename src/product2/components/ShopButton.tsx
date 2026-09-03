import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function ShopButton({
            label,
            className
        }: {
            label: string;
            className: string;
        }) {
            return (
                <a className={className}>
                    <span className={"children"}>
                        {label}
                    </span>
                </a>
            )
        }
    

export default ShopButton
