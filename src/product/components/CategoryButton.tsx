import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function CategoryButton({
            label,
            className
        }: {
            label: string;
            className: string;
        }) {
            return (
                <button type={"button"} className={className}>
                    <span className={"children"}>
                        {label}
                    </span>
                </button>
            )
        }
    

export default CategoryButton
