import React, { useEffect, useRef } from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function VideoThumbnail({
            poster,
            title,
            className,
            src
        }: {
            poster?: string;
            title: string;
            className: string;
            src?: string;
        }) {
            const ref = useRef<HTMLVideoElement>(null)

            // React does not reliably reflect the `muted` prop onto the DOM
            // property, and an unmuted video is blocked by the autoplay policy.
            //
            // A single play() at mount is not enough on mobile: browsers defer
            // autoplay for videos that are below the fold, and iOS refuses a
            // programmatic play() made before any interaction (Low Power Mode
            // always does). Retry when the video scrolls into view, on the
            // first touch, and when the tab becomes visible again.
            useEffect(() => {
                const video = ref.current
                if (!video) return
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
                <video
                    ref={ref}
                    loop
                    playsInline
                    poster={poster}
                    title={title}
                    className={className}
                    autoPlay
                    muted
                >
                    {src ? <source src={src} type={"video/mp4"} /> : null}
                </video>
            )
        }


export default VideoThumbnail
