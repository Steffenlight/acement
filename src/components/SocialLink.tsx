import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Social_media_camera_square from './icons/Social_media_camera_square.tsx'
import Facebook_logo_circle from './icons/Facebook_logo_circle.tsx'
import Youtube_play_button_rounded from './icons/Youtube_play_button_rounded.tsx'
import Tiktok_note_symbol from './icons/Tiktok_note_symbol.tsx'


        type SocialLinkData = {
            id: string;
            icon: JSX.Element;
        }
    
// Component

        function SocialLink({ dataId }: { dataId: string }) {
            const { id, icon }: SocialLinkData = getSocialLinkData(dataId);
            return (
                <a
                    className={"chakra-button css-uunp2i"}
                    id={id}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    {icon}
                </a>
            );
        }
    


        function getSocialLinkData(id: string): SocialLinkData {
            const key = String(id);

            const data: Record<string, SocialLinkData> = {
                "0": {
                    id: "ga.footer.instagram",
                    icon: <Social_media_camera_square />
                },
                "1": {
                    id: "ga.footer.facebook",
                    icon: <Facebook_logo_circle />
                },
                "2": {
                    id: "ga.footer.youtube",
                    icon: <Youtube_play_button_rounded />
                },
                "3": {
                    id: "ga.footer.tiktok",
                    icon: <Tiktok_note_symbol />
                }
            };

            return data[key] ?? data["0"];
        }
    

export default SocialLink
