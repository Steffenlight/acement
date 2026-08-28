import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Circle_outline from './icons/Circle_outline.tsx'
import Circle_outline1 from './icons/Circle_outline1.tsx'


        type ThumbnailButtonData = {
            imageId: string;
            thumbnailClassName: string;
            circleVariant: "default" | "alternate";
        };
    
// Component

        function ThumbnailButton({ dataId }: { dataId: string }) {
            const data: ThumbnailButtonData = getThumbnailButtonData(dataId);

            return (
                <button className={"thumbnail-animated css-1l4m4qm"}>
                    <ThumbnailContent
                        imageId={data.imageId}
                        thumbnailClassName={data.thumbnailClassName}
                        circleVariant={data.circleVariant}
                    />
                </button>
            );
        }
    

// Subcomponents

        function ThumbnailContent({
            imageId,
            thumbnailClassName,
            circleVariant
        }: {
            imageId: string;
            thumbnailClassName: string;
            circleVariant: "default" | "alternate";
        }) {
            return (
                <>
                    <div className={"css-1mpy608"}>
                        {circleVariant === "default" ? <Circle_outline /> : <Circle_outline1 />}
                    </div>
                    <div className={"css-1howmyc"}>
                        <div className={thumbnailClassName}>
                            <Img id={imageId} />
                        </div>
                    </div>
                </>
            );
        }
    


        function getThumbnailButtonData(id: string): ThumbnailButtonData {
            const stringId = String(id);

            const data: Record<string, ThumbnailButtonData> = {
                "0": {
                    imageId: "24",
                    thumbnailClassName: "motion-thumbnail css-w3n5oq",
                    circleVariant: "default"
                },
                "1": {
                    imageId: "25",
                    thumbnailClassName: "motion-thumbnail css-focs6t",
                    circleVariant: "alternate"
                },
                "2": {
                    imageId: "26",
                    thumbnailClassName: "motion-thumbnail css-focs6t",
                    circleVariant: "alternate"
                },
                "3": {
                    imageId: "27",
                    thumbnailClassName: "motion-thumbnail css-focs6t",
                    circleVariant: "alternate"
                }
            };

            return data[stringId] ?? data["0"];
        }
    

export default ThumbnailButton
