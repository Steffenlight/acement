import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Circle_with_checkmark from './icons/Circle_with_checkmark.tsx'
import Empty_circle from './icons/Empty_circle.tsx'
import BenefitHeader from './BenefitHeader.tsx'


        type BenefitRowData = {
            label: string;
            statuses: ["checked" | "empty" | "Partial" | "Limited", "checked" | "empty" | "Partial" | "Limited", "checked" | "empty" | "Partial" | "Limited", "checked" | "empty" | "Partial" | "Limited", "checked" | "empty" | "Partial" | "Limited"];
        };
    
// Component

        function BenefitRow({ dataId }: { dataId: string }) {
            const { label, statuses }: BenefitRowData = getBenefitRowData(dataId);

            return (
                <tr className={"css-ccjfjv"}>
                    <BenefitHeader label={label} />
                    <StatusCell status={statuses[0]} first />
                    <StatusCell status={statuses[1]} />
                    <StatusCell status={statuses[2]} />
                    <StatusCell status={statuses[3]} />
                    <StatusCell status={statuses[4]} />
                </tr>
            );
        }
    

// Subcomponents

        function StatusCell({
            status,
            first = false
        }: {
            status: "checked" | "empty" | "Partial" | "Limited";
            first?: boolean;
        }) {
            return (
                <td className={first ? "css-v6d2zy" : "css-d25f0m"}>
                    {status === "checked" ? (
                        <Circle_with_checkmark />
                    ) : status === "empty" ? (
                        <Empty_circle />
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
                    statuses: ["checked", "empty", "empty", "empty", "Partial"]
                },
                "1": {
                    label: "Targets a root cause of age-related cellular energy decline",
                    statuses: ["checked", "Partial", "Partial", "empty", "Partial"]
                },
                "2": {
                    label: "Benefits without changing exercise routine",
                    statuses: ["checked", "checked", "checked", "empty", "checked"]
                },
                "3": {
                    label: "Complete human clinical trials",
                    statuses: ["checked", "Limited", "checked", "checked", "Limited"]
                }
            };

            return rows[stringId] ?? {
                label: "",
                statuses: ["empty", "empty", "empty", "empty", "empty"]
            };
        }
    

export default BenefitRow
