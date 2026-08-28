import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function Superscript({
            symbol,
            styled
        }: {
            symbol: string;
            styled?: boolean;
        }) {
            return (
                <sup className={styled ? "css-10x2srw" : undefined}>
                    {symbol}
                </sup>
            )
        }
    

export default Superscript
