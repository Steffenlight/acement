import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


// Component

        function CellHealthSection() {
            return (
                <section className={"css-1bfc1fh"}>
                    <div
                        className={"css-4w6apc"}
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            filter: "blur(0px)",
                            transform: "translate(0px,0px)"
                        }}
                    >
                        <div className={"css-1198wzi"}>
                            <Img id="12" />
                        </div>
                    </div>
                    <div
                        className={"css-kk8v02"}
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "50% 50%",
                            transform: "scale(0.25,0.25)",
                            opacity: "0"
                        }}
                    >
                    </div>
                    <div className={"css-lgj0h8"}>
                        <TextLine text="Your body is made of trillions of cells." />
                        <TextLine text="Your health, now and as you age, depends on their health." />
                    </div>
                </section>
            )
        }
    

// Subcomponents

        function TextLine({ text }: { text: string }) {
            return (
                <p
                    className={"chakra-text css-17bypkn"}
                    style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0%,8%)",
                        opacity: "0",
                        color: "rgb(255,255,252)"
                    }}
                >
                    {text}
                </p>
            )
        }
    

export default CellHealthSection
