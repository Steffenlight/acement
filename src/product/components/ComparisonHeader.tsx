import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Mitopure_brand_logo from './icons/Mitopure_brand_logo.tsx'
import Mitopure_brand_logo1 from './icons/Mitopure_brand_logo1.tsx'


    
// Component

        function ComparisonHeader({
            headerClassName,
            imageId,
            label,
            isBrand = false
        }: {
            headerClassName: string;
            imageId: string;
            label?: string;
            isBrand?: boolean;
        }) {
            return (
                <th scope={"col"} className={headerClassName}>
                    <div className={"chakra-stack css-7w5drv"}>
                        <div className={"css-1xqutr6"}>
                            <Img id={imageId} />
                        </div>
                        <HeaderLabel label={label} isBrand={isBrand} />
                    </div>
                </th>
            )
        }
    

// Subcomponents

        function HeaderLabel({
            label,
            isBrand
        }: {
            label?: string;
            isBrand: boolean;
        }) {
            if (isBrand) {
                return <Mitopure_brand_logo1 />
            }

            return (
                <p className={"chakra-text css-1aw54cx"}>
                    {label}
                </p>
            )
        }
    

export default ComparisonHeader
