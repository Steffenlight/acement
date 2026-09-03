import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


        type PressItemData = {
            itemNumber: number;
            imageId: string;
            quote: string;
        };
    
// Component

        function PressItem({ dataId }: { dataId: string }) {
            const { itemNumber, imageId, quote }: PressItemData = getPressItemData(dataId);
            return (
                <div
                    className={"rfm-child"}
                    style={{ "--transform": "none" } as React.CSSProperties}
                >
                    <div className={`press-item-${itemNumber} css-12y72u3`}>
                        <Img id={imageId} />
                        <p className={"chakra-text css-zx585"}>
                            {quote}
                        </p>
                    </div>
                </div>
            );
        }
    


        function getPressItemData(id: string): PressItemData {
            const stringId = String(id);
            const data: Record<string, PressItemData> = {
                "1": {
                    itemNumber: 1,
                    imageId: "32",
                    quote: "“Mitopure: your body’s very own power plant.”"
                },
                "2": {
                    itemNumber: 2,
                    imageId: "33",
                    quote: "“Research shows ‘powerful and measurable’ effects in combating muscle weakening.”"
                },
                "3": {
                    itemNumber: 3,
                    imageId: "34",
                    quote: "“Anti-aging science is littered with promising results [...] but Urolithin A seems different.”"
                },
                "4": {
                    itemNumber: 4,
                    imageId: "35",
                    quote: "“To push your training to new heights, you want to think about nutrition at the microscopic level.”"
                },
                "5": {
                    itemNumber: 5,
                    imageId: "36",
                    quote: "“Gut microbiome may hold key to combat muscle decline in aging.”"
                },
                "6": {
                    itemNumber: 6,
                    imageId: "32",
                    quote: "“Mitopure: your body’s very own power plant.”"
                },
                "7": {
                    itemNumber: 7,
                    imageId: "33",
                    quote: "“Research shows ‘powerful and measurable’ effects in combating muscle weakening.”"
                },
                "8": {
                    itemNumber: 8,
                    imageId: "34",
                    quote: "“Anti-aging science is littered with promising results [...] but Urolithin A seems different.”"
                },
                "9": {
                    itemNumber: 9,
                    imageId: "35",
                    quote: "“To push your training to new heights, you want to think about nutrition at the microscopic level.”"
                },
                "10": {
                    itemNumber: 10,
                    imageId: "36",
                    quote: "“Gut microbiome may hold key to combat muscle decline in aging.”"
                }
            };
            return data[stringId] ?? data["1"];
        }
    

export default PressItem
