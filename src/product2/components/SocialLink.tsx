import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Instagram_logo_outline from './icons/Instagram_logo_outline.tsx'
import Facebook_logo_circle from './icons/Facebook_logo_circle.tsx'
import Video_play_button from './icons/Video_play_button.tsx'
import Musical_note_symbol from './icons/Musical_note_symbol.tsx'


        type SocialLinkData = {
            anchorId: string;
            icon: JSX.Element;
        }
    
// Component

        function SocialLink({ dataId }: { dataId: string }) {
            const { anchorId, icon }: SocialLinkData = getSocialLinkData(dataId);
            return (
                <a
                    className={"chakra-button css-uunp2i"}
                    id={anchorId}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    {icon}
                </a>
            );
        }
    


        function getSocialLinkData(id: string): SocialLinkData {
            const stringId = String(id);

            const data: Record<string, SocialLinkData> = {
                "0": {
                    anchorId: "ga.footer.instagram",
                    icon: <Instagram_logo_outline />
                },
                "1": {
                    anchorId: "ga.footer.facebook",
                    icon: <Facebook_logo_circle />
                },
                "2": {
                    anchorId: "ga.footer.youtube",
                    icon: <Video_play_button />
                },
                "3": {
                    anchorId: "ga.footer.tiktok",
                    icon: <Musical_note_symbol />
                }
            };

            return data[stringId] ?? data["0"];
        }
    

export default SocialLink
