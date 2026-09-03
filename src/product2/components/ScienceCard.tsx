import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import ScienceLink from './ScienceLink.tsx'


        type ScienceCardData = {
            imageId: string;
            label: string;
            trackingId: string;
        };
    
// Component

        function ScienceCard({ dataId }: { dataId: string }) {
            const { imageId, label, trackingId }: ScienceCardData = getScienceCardData(dataId);
            return (
                <div role={"group"} className={"chakra-linkbox navigation-card css-10n1vic"}>
                    <div className={"css-1tnggiq"}>
                        <Img id={imageId} />
                    </div>
                    <ScienceLink label={label} trackingId={trackingId} />
                </div>
            );
        }
    


        function getScienceCardData(id: string): ScienceCardData {
            const stringId = String(id);

            if (stringId === "0") {
                return {
                    imageId: "5",
                    label: "Science of Mitopure®",
                    trackingId: "ga.desktop.header.science_card"
                };
            }

            if (stringId === "1") {
                return {
                    imageId: "6",
                    label: "How Mitopure® works",
                    trackingId: "ga.desktop.header.how_it_works_card"
                };
            }

            if (stringId === "2") {
                return {
                    imageId: "7",
                    label: "Benefits",
                    trackingId: "ga.desktop.header.benefits_card"
                };
            }

            return {
                imageId: "5",
                label: "Science of Mitopure®",
                trackingId: "ga.desktop.header.science_card"
            };
        }
    

export default ScienceCard
