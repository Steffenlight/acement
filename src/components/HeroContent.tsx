import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Mitopure_logo_badge from './icons/Mitopure_logo_badge.tsx'
import ActionLink from './ActionLink.tsx'


        type HeroContentData = {
            headline: string;
            headlineClassName: string;
            description: string | null;
            actionLabel: string;
        }
    
// Component

        function HeroContent({ dataId }: { dataId: string }) {
            const {
                headline,
                headlineClassName,
                description,
                actionLabel
            }: HeroContentData = getHeroContentData(dataId);

            return (
                <blockquote className={"hero_content css-18u35f7"}>
                    <div className={"chakra-stack powered-by-mitopure css-1ff3ki1"}>
                        <h2 className={"chakra-text css-zdfcm7"}>
                            Powered by
                        </h2>
                        <Mitopure_logo_badge />
                    </div>
                    <div className={"chakra-stack css-fci8ch"}>
                        <h1 className={headlineClassName}>
                            {headline}
                        </h1>
                        {description !== null && (
                            <p className={"chakra-text css-bcqkm8"}>
                                {description}
                            </p>
                        )}
                    </div>
                    <ActionLink label={actionLabel} className="chakra-button css-1t2vc7z" />
                </blockquote>
            )
        }
    


        function getHeroContentData(id: string): HeroContentData {
            const stringId = String(id);

            if (stringId === "0") {
                return {
                    headline: "No other supplement does this. ",
                    headlineClassName: "chakra-text css-1t4a7fi",
                    description: "Award-winning clinically proven Urolithin A products.",
                    actionLabel: "Shop now"
                };
            }

            return {
                headline: "Skin longevity powered by mitochondrial science",
                headlineClassName: "chakra-text css-1i81v2w",
                description: null,
                actionLabel: "Discover our science"
            };
        }
    

export default HeroContent
