import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


        type PressItemData = {
            itemNumber: string;
            imageId: string;
        };
    
// Component

        function PressItem({ dataId }: { dataId: string }) {
            const { itemNumber, imageId }: PressItemData = getPressItemData(dataId);

            return (
                <div className={"rfm-child"} style={{ "--transform": "none" }}>
                    <div className={`press-item-${itemNumber} css-129zvt1`}>
                        <Img id={imageId} />
                    </div>
                </div>
            );
        }
    


        function getPressItemData(id: string): PressItemData {
            const stringId = String(id);
            const data: Record<string, PressItemData> = {
                "0": { itemNumber: "1", imageId: "18" },
                "1": { itemNumber: "2", imageId: "19" },
                "2": { itemNumber: "3", imageId: "20" },
                "3": { itemNumber: "4", imageId: "21" },
                "4": { itemNumber: "5", imageId: "22" },
                "5": { itemNumber: "6", imageId: "18" },
                "6": { itemNumber: "7", imageId: "19" },
                "7": { itemNumber: "8", imageId: "20" },
                "8": { itemNumber: "9", imageId: "21" },
                "9": { itemNumber: "10", imageId: "22" }
            };

            return data[stringId] ?? { itemNumber: "1", imageId: "18" };
        }
    

export default PressItem
