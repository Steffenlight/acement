import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'



    
// Component

        function ActionLink({
            label,
            className
        }: {
            label: string;
            className: string;
        }) {
            const to = label.toLowerCase().includes('science') ? '/science' : '/products/mitopure-softgels-vegan'
            return (
                <Link to={to} className={className}>
                    <span className={"children"}>
                        {label}
                    </span>
                </Link>
            )
        }
    

export default ActionLink
