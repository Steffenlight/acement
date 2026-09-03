import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import AceMenWordmark from '../../components/icons/AceMenWordmark.tsx'


/* The captured header carried a circular ingredient photo above each label.
 * Those are dropped: we have a photograph for ACE but none for "TRT" or
 * "generic boosters", and one column with a disc beside two without reads as
 * broken rather than as deliberate. Labels alone, with the brand column
 * keeping its raised card. */
        function ComparisonHeader({
            headerClassName,
            label,
            isBrand = false
        }: {
            headerClassName: string;
            label?: string;
            isBrand?: boolean;
        }) {
            return (
                <th scope={"col"} className={headerClassName}>
                    <div className={"chakra-stack css-7w5drv"}>
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
                return (
                    <span className={"ct-brand"}>
                        <AceMenWordmark />
                    </span>
                )
            }

            return (
                <p className={"chakra-text css-1aw54cx"}>
                    {label}
                </p>
            )
        }


export default ComparisonHeader
