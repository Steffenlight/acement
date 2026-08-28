import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CreatorVideo from './CreatorVideo.tsx'
import PlayButton from './PlayButton.tsx'
import SocialHandle from './SocialHandle.tsx'


        type CreatorSlideData = {
            videoDataId: string;
            handle: string;
        }
    
// Component

        function CreatorSlide({
            dataId,
            isActive = false
        }: {
            dataId: string;
            isActive?: boolean;
        }) {
            const { videoDataId, handle }: CreatorSlideData = getCreatorSlideData(dataId);

            return (
                <div
                    className={`swiper-slide${isActive ? " swiper-slide-active" : ""}`}
                    role={"group"}
                    style={{ marginRight: "24px" }}
                >
                    <div className={"css-b1l9mg"}>
                        <div className={"css-gykyok"}>
                            <div className={"css-1lh9pkx"}>
                                <div className={"css-1u0ds3s"}>
                                    <CreatorVideo dataId={videoDataId} />
                                    <PlayButton />
                                </div>
                            </div>
                        </div>
                        <div className={"chakra-stack css-1uam1c"}>
                            <SocialHandle handle={handle} />
                        </div>
                    </div>
                </div>
            );
        }
    


        function getCreatorSlideData(id: string): CreatorSlideData {
            const stringId = String(id);
            const data: Record<string, CreatorSlideData> = {
                "0": {
                    videoDataId: "0",
                    handle: "@chloezakhour"
                },
                "1": {
                    videoDataId: "1",
                    handle: "@colleenchambersofficial"
                },
                "2": {
                    videoDataId: "2",
                    handle: "@zachsale"
                },
                "3": {
                    videoDataId: "3",
                    handle: "@ugcbrittbeauty"
                },
                "4": {
                    videoDataId: "4",
                    handle: "@healthyhabitsbytiffanie"
                },
                "5": {
                    videoDataId: "5",
                    handle: "@itsanotherb"
                },
                "6": {
                    videoDataId: "6",
                    handle: "@andrewc.ugc"
                }
            };

            return data[stringId] ?? {
                videoDataId: stringId,
                handle: ""
            };
        }
    

export default CreatorSlide
