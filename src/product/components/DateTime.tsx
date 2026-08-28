import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function DateTime({
            dateTime,
            label
        }: {
            dateTime: string;
            label: string;
        }) {
            return (
                <time dateTime={dateTime}>
                    {label}
                </time>
            )
        }
    

export default DateTime
