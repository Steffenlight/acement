import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function InitialMarqueeChild() {
            return (
                <div className={"rfm-initial-child-container"}>
                    <MarqueeChild />
                </div>
            )
        }
    

// Subcomponents

        function MarqueeChild() {
            return (
                <div className={"rfm-child"} style={{"--transform":"none"}}>
                    <div className={"chakra-stack css-6r1cf2"}>
                        <p className={"chakra-text css-1327hnk"}>
                            ·
                        </p>
                        <p className={"chakra-text css-1327hnk"}>
                            #1 DOCTOR RECOMMENDED
                        </p>
                        <p className={"chakra-text css-d9f0z0"}>
                            UROLITHIN A BRAND
                        </p>
                    </div>
                </div>
            )
        }
    

export default InitialMarqueeChild
