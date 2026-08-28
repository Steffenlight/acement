import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Circle_checkmark from './icons/Circle_checkmark.tsx'
import Solid_black_circle from './icons/Solid_black_circle.tsx'
import BenefitHeader from './BenefitHeader.tsx'


        type BenefitRowData = {
            label: string;
            firstCellClassName: string;
            statuses: Array<"check" | "circle" | "Partial" | "Limited">;
        };
    
// Component

        function BenefitRow({ dataId }: { dataId: string }) {
            const data: BenefitRowData = getBenefitRowData(dataId);

            return (
                <tr className={"css-ccjfjv"}>
                    <BenefitHeader label={data.label} />
                    {data.statuses.map((status, index) => (
                        <BenefitStatusCell
                            key={index}
                            className={index === 0 ? data.firstCellClassName : "css-d25f0m"}
                            status={status}
                        />
                    ))}
                </tr>
            );
        }
    

// Subcomponents

        function BenefitStatusCell({
            className,
            status
        }: {
            className: string;
            status: "check" | "circle" | "Partial" | "Limited";
        }) {
            return (
                <td className={className}>
                    {status === "check" ? (
                        <Circle_checkmark />
                    ) : status === "circle" ? (
                        <Solid_black_circle />
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
    


        function getBenefitRowData(id: string): BenefitRowData {
            const stringId = String(id);

            const rows: Record<string, BenefitRowData> = {
                "0": {
                    label: "Directly activates mitophagy",
                    firstCellClassName: "css-1o771i",
                    statuses: ["check", "circle", "circle", "circle", "Partial"]
                },
                "1": {
                    label: "Targets a root cause of age-related cellular energy decline",
                    firstCellClassName: "css-1o771i",
                    statuses: ["check", "Partial", "Partial", "circle", "Partial"]
                },
                "2": {
                    label: "Benefits without changing exercise routine",
                    firstCellClassName: "css-1o771i",
                    statuses: ["check", "check", "check", "circle", "check"]
                },
                "3": {
                    label: "Complete human clinical trials",
                    firstCellClassName: "css-vf5z52",
                    statuses: ["check", "Limited", "check", "check", "Limited"]
                }
            };

            return rows[stringId] ?? {
                label: "",
                firstCellClassName: "css-1o771i",
                statuses: ["check", "check", "check", "check", "check"]
            };
        }
    

export default BenefitRow
