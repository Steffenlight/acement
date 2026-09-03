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
            useEffect(() => {
                const video = ref.current
                if (!video) return
                video.muted = true
                video.play().catch(() => {})
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
