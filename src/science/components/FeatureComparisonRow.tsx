import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Black_circle_with_checkmark from './icons/Black_circle_with_checkmark.tsx'
import Filled_black_circle from './icons/Filled_black_circle.tsx'
import FeatureHeader from './FeatureHeader.tsx'
import Header from './Header.tsx'


        type FeatureComparisonRowData = {
            label: string;
            firstCellClassName: string;
            statuses: Array<"check" | "filled" | "Partial" | "Limited">;
        };
    
// Component

        function FeatureComparisonRow({
            dataId
        }: {
            dataId: string;
        }) {
            const data: FeatureComparisonRowData = getFeatureComparisonRowData(dataId);

            return (
                <tr className={"css-ccjfjv"}>
                    <FeatureHeader label={data.label} />
                    {data.statuses.map((status, index) => (
                        <FeatureStatusCell
                            key={index}
                            className={index === 0 ? data.firstCellClassName : "css-d25f0m"}
                            status={status}
                        />
                    ))}
                </tr>
            );
        }
    

// Subcomponents

        function FeatureStatusCell({
            className,
            status
        }: {
            className: string;
            status: "check" | "filled" | "Partial" | "Limited";
        }) {
            return (
                <td className={className}>
                    {status === "check" ? (
                        <Black_circle_with_checkmark />
                    ) : status === "filled" ? (
                        <Filled_black_circle />
                    ) : (
                        <span className={"chakra-text css-1e370u8"}>
                            <span className={"css-13o7eu2"}>
                                {status}
                            </span>
                        </span>
                    )}
                </td>
            );
        }
    


        function getFeatureComparisonRowData(id: string): FeatureComparisonRowData {
            const stringId = String(id);

            const rows: Record<string, FeatureComparisonRowData> = {
                "0": {
                    label: "Directly activates mitophagy",
                    firstCellClassName: "css-1o771i",
                    statuses: ["check", "filled", "filled", "filled", "Partial"]
                },
                "1": {
                    label: "Targets a root cause of age-related cellular energy decline",
                    firstCellClassName: "css-1o771i",
                    statuses: ["check", "Partial", "Partial", "filled", "Partial"]
                },
                "2": {
                    label: "Benefits without changing exercise routine",
                    firstCellClassName: "css-1o771i",
                    statuses: ["check", "check", "check", "filled", "check"]
                },
                "3": {
                    label: "Complete human clinical trials",
                    firstCellClassName: "css-vf5z52",
                    statuses: ["check", "Limited", "check", "check", "Limited"]
                }
            };

            return rows[stringId] ?? rows["0"];
        }
    

export default FeatureComparisonRow
