import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function VideoThumbnail({
            poster,
            title,
            className
        }: {
            poster: string;
            title: string;
            className: string;
        }) {
            return (
                <video
                    loop={""}
                    playsInline={""}
                    poster={poster}
                    title={title}
                    className={className}
                    autoPlay={""}
                    muted={""}
                >
                </video>
            )
        }
    

export default VideoThumbnail
