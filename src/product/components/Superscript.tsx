import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function Superscript({
            symbol,
            className
        }: {
            symbol: string;
            className?: string;
        }) {
            return className === undefined ? (
                <sup>
                    {symbol}
                </sup>
            ) : (
                <sup className={className}>
                    {symbol}
                </sup>
            )
        }
    

export default Superscript
