import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Solid_filled_circle from './icons/Solid_filled_circle.tsx'


    
// Component

        function BenefitHeader({ label }: { label: string }) {
            return (
                <th scope={"row"} className={"css-uvutxu"}>
                    <span className={"chakra-text css-1bo3rdl"}>
                        {label}
                        <Solid_filled_circle />
                    </span>
                </th>
            )
        }
    

export default BenefitHeader
