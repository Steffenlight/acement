import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Circle_checkmark from './icons/Circle_checkmark.tsx'
import Solid_black_circle from './icons/Solid_black_circle.tsx'
import BenefitHeader from './BenefitHeader.tsx'


/* Four rows, ACE against TRT and generic boosters.
 *
 * Language is kept as short as the reference's — a row that needs a sentence
 * is not a row. The status union is widened from the captured
 * check/circle/Partial/Limited to any string, so a cell can say "Shuts it
 * down" the way the Mars Men table does, where a tick or a cross would lose
 * the point.
 *
 * TRT takes the tick on clinical doses. A table where one column wins every
 * row reads as marketing; one that concedes reads as a comparison, and this
 * is the row where conceding costs nothing and buys the other three.
 *
 * ACE values are checkable against docs/03-mechanism.md: one serving a day,
 * full studied doses, third-party tested per batch, no hormone replacement so
 * nothing is suppressed and nothing needs tapering. */

        type Status = "check" | "circle" | string;

        type BenefitRowData = {
            label: string;
            firstCellClassName: string;
            statuses: Status[];
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
            status: Status;
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
            const data: Record<string, BenefitRowData> = {
                "0": {
                    label: "Supports your own production",
                    firstCellClassName: "css-1xlvs78",
                    statuses: ["check", "Shuts it down", "circle"],
                },
                "1": {
                    label: "Full clinical doses",
                    firstCellClassName: "css-1xlvs78",
                    statuses: ["check", "check", "circle"],
                },
                "2": {
                    label: "No needles, no prescription",
                    firstCellClassName: "css-1xlvs78",
                    statuses: ["check", "circle", "check"],
                },
                "3": {
                    label: "Third-party tested",
                    firstCellClassName: "css-1xlvs78",
                    statuses: ["check", "N/A", "circle"],
                },
            };

            return data[String(id)] ?? data["0"];
        }


export default BenefitRow
