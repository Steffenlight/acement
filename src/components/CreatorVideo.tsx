import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type CreatorVideoData = {
            poster: string;
            title: string;
        }
    
// Component

        function CreatorVideo({ dataId }: { dataId: string }) {
            const { poster, title }: CreatorVideoData = getCreatorVideoData(dataId);
            return (
                <video
                    loop={""}
                    muted={""}
                    playsInline={""}
                    poster={poster}
                    title={title}
                    className={"css-l2jfft"}
                >
                </video>
            );
        }
    


        function getCreatorVideoData(id: string): CreatorVideoData {
            const stringId = String(id);
            const data: Record<string, CreatorVideoData> = {
                "0": {
                    poster: "/images/071fe6cf-73e9-4597-a575-c415d29b1722.webp",
                    title: "Chloé Zakhour"
                },
                "1": {
                    poster: "/images/09c091d8-11e9-44ff-ae82-fb39e5d6a97d.webp",
                    title: "Colleen Chambers"
                },
                "2": {
                    poster: "/images/586823af-4ade-4979-8608-90fecbea3a71.webp",
                    title: "Zach Sale"
                },
                "3": {
                    poster: "/images/7e78d8cc-0086-4771-94da-89b03be073d8.webp",
                    title: "Britt | Travel &amp; UGC Creator"
                },
                "4": {
                    poster: "/images/0e53f428-23ae-4b06-94a8-d4b5b5c1207c.webp",
                    title: "Tiffanie | Health &amp; Wellness &amp; UGC"
                },
                "5": {
                    poster: "/images/4917f1d2-bcd9-46b7-8aa4-f55b916cc00f.webp",
                    title: "Bonnie Leathers"
                },
                "6": {
                    poster: "/images/44107e68-6ecc-47c4-8f69-5ce7ca063efe.webp",
                    title: "Andrew | Dad in Spain"
                }
            };
            return data[stringId] ?? data["0"];
        }
    

export default CreatorVideo
