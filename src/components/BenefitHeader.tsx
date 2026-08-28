import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Filled_circle from './icons/Filled_circle.tsx'


    
// Component

        function BenefitHeader({ label }: { label: string }) {
            return (
                <th scope={"row"} className={"css-uvutxu"}>
                    <span className={"chakra-text css-1bo3rdl"}>
                        {label}
                        <Filled_circle />
                    </span>
                </th>
            )
        }
    

export default BenefitHeader
