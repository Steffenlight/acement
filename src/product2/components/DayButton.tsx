import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


        type DayButtonData = {
            imageId: string;
            label: string;
        };
    
// Component

        function DayButton({
            dataId,
            showOverlay = false
        }: {
            dataId: string;
            showOverlay?: boolean;
        }) {
            const { imageId, label }: DayButtonData = getDayButtonData(dataId);

            return (
                <div role={"button"} className={"css-0"}>
                    <div className={"css-wwusfj"}>
                        <Img id={imageId} />
                        {showOverlay ? (
                            <div className={"css-1ppx8yb"}>
                            </div>
                        ) : null}
                    </div>
                    <div role={"separator"} className={"css-jk2uea"}>
                    </div>
                    <p className={"chakra-text css-1ew22t8"}>
                        {label}
                    </p>
                </div>
            );
        }
    


        function getDayButtonData(id: string): DayButtonData {
            const stringId = String(id);

            const data: Record<string, DayButtonData> = {
                "0": {
                    imageId: "24",
                    label: "Day 02"
                },
                "1": {
                    imageId: "25",
                    label: "Day 30"
                },
                "2": {
                    imageId: "26",
                    label: "Day 60"
                },
                "3": {
                    imageId: "27",
                    label: "Day 120"
                },
                "4": {
                    imageId: "28",
                    label: "Day 120+"
                }
            };

            return data[stringId] ?? data["0"];
        }
    

export default DayButton
