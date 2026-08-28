import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Solid_black_circle from './icons/Solid_black_circle.tsx'
import Header from './Header.tsx'


    
// Component

        function FeatureHeader({ label }: { label: string }) {
            return (
                <th scope={"row"} className={"css-uvutxu"}>
                    <span className={"chakra-text css-1bo3rdl"}>
                        {label}
                        <Solid_black_circle />
                    </span>
                </th>
            )
        }
    

export default FeatureHeader
