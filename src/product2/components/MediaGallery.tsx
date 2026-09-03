import React, { useEffect, useRef } from 'react'
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
                        src="/videos/gallery-softgels.mp4"
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
            src,
        }: {
            poster: string;
            title: string;
            src?: string;
        }) {
            const ref = useRef<HTMLVideoElement>(null)

            // Same playback handling as VideoThumbnail: React does not reliably
            // reflect `muted` onto the DOM property, and a single play() at
            // mount is refused on mobile while the video is below the fold (and
            // on iOS before any interaction). Retry on viewport entry, first
            // touch, and tab visibility change.
            useEffect(() => {
                const video = ref.current
                if (!video || !src) return
                video.muted = true
                const tryPlay = () => {
                    if (video.paused) video.play().catch(() => {})
                }
                tryPlay()
                const io = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) tryPlay()
                    })
                }, { threshold: 0.1 })
                io.observe(video)
                const onVisible = () => tryPlay()
                window.addEventListener('touchstart', onVisible, { passive: true })
                document.addEventListener('visibilitychange', onVisible)
                return () => {
                    io.disconnect()
                    window.removeEventListener('touchstart', onVisible)
                    document.removeEventListener('visibilitychange', onVisible)
                }
            }, [src])

            return (
                <div className={"css-d0ukde"}>
                    <div className={"chakra-aspect-ratio css-1lule79"}>
                        <div className={"css-qk35ck"}>
                            {/* The capture wrote loop={""} / playsInline={""} - falsy in
                                React, so the attributes were never set, and iOS refuses
                                inline autoplay without playsinline. */}
                            <video
                                ref={ref}
                                loop
                                muted
                                playsInline
                                poster={poster}
                                title={title}
                                className={"css-l2jfft"}
                                autoPlay
                            >
                                {src ? <source src={src} type={"video/mp4"} /> : null}
                            </video>
                            <UnmuteButton />
                        </div>
                    </div>
                </div>
            )
        }
    

export default MediaGallery
