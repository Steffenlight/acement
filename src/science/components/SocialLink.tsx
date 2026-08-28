import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Instagram_logo_outline from './icons/Instagram_logo_outline.tsx'
import Facebook_logo_circle from './icons/Facebook_logo_circle.tsx'
import Youtube_play_button_rounded_rectangle from './icons/Youtube_play_button_rounded_rectangle.tsx'
import Musical_note_logo from './icons/Musical_note_logo.tsx'


        type SocialLinkData = {
            id: string;
            icon: JSX.Element;
        }
    
// Component

        function SocialLink({ dataId }: { dataId: string }) {
            const { id, icon }: SocialLinkData = getSocialLinkData(dataId)
            return (
                <a
                    className={"chakra-button css-uunp2i"}
                    id={id}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    {icon}
                </a>
            )
        }
    


        function getSocialLinkData(id: string): SocialLinkData {
            const key = String(id)

            const data: Record<string, SocialLinkData> = {
                "0": {
                    id: "ga.footer.instagram",
                    icon: <Instagram_logo_outline />
                },
                "1": {
                    id: "ga.footer.facebook",
                    icon: <Facebook_logo_circle />
                },
                "2": {
                    id: "ga.footer.youtube",
                    icon: <Youtube_play_button_rounded_rectangle />
                },
                "3": {
                    id: "ga.footer.tiktok",
                    icon: <Musical_note_logo />
                }
            }

            return data[key] ?? data["0"]
        }
    

export default SocialLink
