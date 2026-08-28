import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Mitopure_logo_badge from './icons/Mitopure_logo_badge.tsx'
import Mitopure_logo_badge5 from './icons/Mitopure_logo_badge5.tsx'


        type SupplementHeaderData = {
            headerClassName: string;
            imageId: string;
            labelKind: "badge" | "text";
            label: string;
        };
    
// Component

        function SupplementHeader({ dataId }: { dataId: string }) {
            const data: SupplementHeaderData = getSupplementHeaderData(dataId);

            return (
                <th scope={"col"} className={data.headerClassName}>
                    <div className={"chakra-stack css-7w5drv"}>
                        <div className={"css-1xqutr6"}>
                            <Img id={data.imageId} />
                        </div>
                        <LabelContent kind={data.labelKind} label={data.label} />
                    </div>
                </th>
            );
        }
    

// Subcomponents

        function LabelContent({
            kind,
            label
        }: {
            kind: "badge" | "text";
            label: string;
        }) {
            if (kind === "badge") {
                return <Mitopure_logo_badge5 />;
            }

            return (
                <p className={"chakra-text css-1aw54cx"}>
                    {label}
                </p>
            );
        }
    


        function getSupplementHeaderData(id: string): SupplementHeaderData {
            const stringId = String(id);

            const data: Record<string, SupplementHeaderData> = {
                "0": {
                    headerClassName: "css-x9btrg",
                    imageId: "12",
                    labelKind: "badge",
                    label: ""
                },
                "1": {
                    headerClassName: "css-d25f0m",
                    imageId: "13",
                    labelKind: "text",
                    label: "NAD+"
                },
                "2": {
                    headerClassName: "css-d25f0m",
                    imageId: "14",
                    labelKind: "text",
                    label: "CoQ10"
                },
                "3": {
                    headerClassName: "css-d25f0m",
                    imageId: "13",
                    labelKind: "text",
                    label: "Creatine"
                },
                "4": {
                    headerClassName: "css-d25f0m",
                    imageId: "15",
                    labelKind: "text",
                    label: "Spermidine"
                }
            };

            return data[stringId] ?? {
                headerClassName: "css-d25f0m",
                imageId: "13",
                labelKind: "text",
                label: ""
            };
        }
    

export default SupplementHeader
