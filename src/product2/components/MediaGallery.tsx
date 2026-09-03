import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import InitialMarqueeChild from './InitialMarqueeChild.tsx'
import MarqueeChild from './MarqueeChild.tsx'
import UnmuteButton from './UnmuteButton.tsx'
import ImageButton from './ImageButton.tsx'


// Component

        function MediaGallery() {
            return (
                <>
                <div className={"css-on2xdd"}>
                    <div className={"css-d0ukde"}>
                        <div className={"css-1t0mzr4 gallery-marquee--desktop"}>
                            <GalleryMarquee />
                        </div>
                        <div className={"chakra-aspect-ratio css-1lule79"}>
                            <div className={"css-1yaumx6"}>
                                <div className={"css-h4pti5"}>
                                    <Img id="11" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <GalleryVideoItem
                        poster="/images/e53578c1-60f2-44b8-be6b-81b2fcc1f321.webp"
                        title="Softgels"
                    />
                    <GalleryImageItem imgId="12" />
                    <GalleryVideoItem
                        poster="/images/fabb68d5-18cc-4b3e-bb38-e9add16f8089.webp"
                        title="Urolithin A Softgels recommended by Longevity Experts"
                    />
                    <GalleryImageItem imgId="13" />
                    <GalleryImageItem imgId="14" />
                    <GalleryImageItem imgId="15" />
                    <GalleryImageItem imgId="16" />
                </div>
                <div className={"gallery-marquee--mobile"}>
                    <GalleryMarquee />
                </div>
                </>
            )
        }


// Subcomponents

        function GalleryMarquee() {
            return (
                <div
                    className={"rfm-marquee-container css-1r9wea"}
                    style={{
                        "--pause-on-hover": "running",
                        "--pause-on-click": "running",
                        "--width": "100%",
                        "--transform": "none",
                    }}
                >
                    <div
                        className={"rfm-marquee"}
                        style={{
                            "--play": "running",
                            "--direction": "normal",
                            "--duration": "14.35875s",
                            "--delay": "0s",
                            "--iteration-count": "infinite",
                            "--min-width": "auto",
                        }}
                    >
                        <InitialMarqueeChild />
                        <MarqueeChild />
                    </div>
                    <div
                        className={"rfm-marquee"}
                        style={{
                            "--play": "running",
                            "--direction": "normal",
                            "--duration": "14.35875s",
                            "--delay": "0s",
                            "--iteration-count": "infinite",
                            "--min-width": "auto",
                        }}
                    >
                        <MarqueeChild />
                        <MarqueeChild />
                    </div>
                </div>
            )
        }

        function GalleryImageItem({ imgId }: { imgId: string }) {
            return (
                <div className={"css-d0ukde"}>
                    <div className={"chakra-aspect-ratio css-1lule79"}>
                        <ImageButton imgId={imgId} />
                    </div>
                </div>
            )
        }

        function GalleryVideoItem({
            poster,
            title,
        }: {
            poster: string;
            title: string;
        }) {
            return (
                <div className={"css-d0ukde"}>
                    <div className={"chakra-aspect-ratio css-1lule79"}>
                        <div className={"css-qk35ck"}>
                            <video
                                loop={""}
                                muted={""}
                                playsInline={""}
                                poster={poster}
                                title={title}
                                className={"css-l2jfft"}
                                autoPlay={""}
                            >
                            </video>
                            <UnmuteButton />
                        </div>
                    </div>
                </div>
            )
        }
    

export default MediaGallery
