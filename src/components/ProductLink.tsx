import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'



    
// Component

        function ProductLink({ label }: { label: string }) {
            return (
                <Link to={label.includes('Softgels') ? '/products/mitopure-softgels-vegan' : '/shop'} className={"chakra-linkbox__overlay css-kvj8dg"}>
                    {label}
                </Link>
            )
        }
    

export default ProductLink
