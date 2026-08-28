import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Mitopure_logo_badge from './icons/Mitopure_logo_badge.tsx'
import Mitopure_logo_badge2 from './icons/Mitopure_logo_badge2.tsx'
import Header from './Header.tsx'


        type ComparisonHeaderData = {
            className: string;
            imageId: string;
            label: string | null;
            hasBadge: boolean;
        };
    
// Component

        function ComparisonHeader({ dataId }: { dataId: string }) {
            const { className, imageId, label, hasBadge }: ComparisonHeaderData =
                getComparisonHeaderData(dataId);

            return (
                <th scope={"col"} className={className}>
                    <div className={"chakra-stack css-7w5drv"}>
                        <div className={"css-1xqutr6"}>
                            <Img id={imageId} />
                        </div>
                        {hasBadge ? (
                            <Mitopure_logo_badge2 />
                        ) : (
                            <p className={"chakra-text css-1aw54cx"}>
                                {label}
                            </p>
                        )}
                    </div>
                </th>
            );
        }
    


        function getComparisonHeaderData(id: string): ComparisonHeaderData {
            const normalizedId = String(id);

            const data: Record<string, ComparisonHeaderData> = {
                "0": {
                    className: "css-1xlvs78",
                    imageId: "16",
                    label: null,
                    hasBadge: true
                },
                "1": {
                    className: "css-d25f0m",
                    imageId: "17",
                    label: "NAD+",
                    hasBadge: false
                },
                "2": {
                    className: "css-d25f0m",
                    imageId: "18",
                    label: "CoQ10",
                    hasBadge: false
                },
                "3": {
                    className: "css-d25f0m",
                    imageId: "17",
                    label: "Creatine",
                    hasBadge: false
                },
                "4": {
                    className: "css-d25f0m",
                    imageId: "19",
                    label: "Spermidine",
                    hasBadge: false
                }
            };

            return data[normalizedId] ?? data["0"];
        }
    

export default ComparisonHeader
