import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type CookieIframeData = {
            className?: string;
            name?: string;
            id?: string;
            tabIndex: string;
            role?: string;
            title: string;
            sandbox?: string;
            src?: string;
            style?: {
                display: string;
                width: string;
                height: string;
                opacity: string;
                pointerEvents: string;
            };
        };
    
// Component

        function CookieIframe({ dataId }: { dataId: string }) {
            const data: CookieIframeData = getCookieIframeData(dataId);

            return (
                <iframe
                    {...(data.id !== undefined ? { id: data.id } : {})}
                    {...(data.className !== undefined ? { className: data.className } : {})}
                    {...(data.name !== undefined ? { name: data.name } : {})}
                    tabIndex={data.tabIndex}
                    {...(data.role !== undefined ? { role: data.role } : {})}
                    title={data.title}
                    {...(data.sandbox !== undefined ? { sandbox: data.sandbox } : {})}
                    {...(data.src !== undefined ? { src: data.src } : {})}
                    {...(data.style !== undefined ? { style: data.style } : {})}
                >
                </iframe>
            );
        }
    


        function getCookieIframeData(id: string): CookieIframeData {
            const stringId = String(id);

            if (stringId === "0") {
                return {
                    className: "CybotCookiebotHiddenIframe sf-hidden",
                    name: "__uspapiLocator",
                    tabIndex: "-1",
                    role: "presentation",
                    title: "Blank"
                };
            }

            if (stringId === "1") {
                return {
                    className: "CybotCookiebotOffscreenIframe",
                    tabIndex: "-1",
                    role: "presentation",
                    title: "Blank",
                    sandbox: "allow-popups allow-top-navigation-by-user-activation",
                    src: "/frames/f161bbca-c1ba-4ba2-8022-785111cd4ec1/index.html"
                };
            }

            if (stringId === "2") {
                return {
                    id: "_hjSafeContext_90193605",
                    tabIndex: "-1",
                    title: "_hjSafeContext",
                    style: {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        opacity: "0",
                        pointerEvents: "none"
                    }
                };
            }

            return {
                tabIndex: "-1",
                title: "Blank"
            };
        }
    

export default CookieIframe
