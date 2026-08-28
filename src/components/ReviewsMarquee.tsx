import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function ReviewsMarquee() {
            return (
                <div
                    className={"rfm-marquee-container reviews-marquee css-1r9wea"}
                    style={{
                        "--pause-on-hover": "running",
                        "--pause-on-click": "running",
                        "--width": "100%",
                        "--transform": "none",
                    }}
                >
                    <div
                        className={"rfm-marquee"}
                        style={{
                            "--play": "running",
                            "--direction": "normal",
                            "--duration": "43.9096875s",
                            "--delay": "0s",
                            "--iteration-count": "infinite",
                            "--min-width": "100%",
                        }}
                    >
                        <div className={"rfm-initial-child-container"}>
                            <MarqueeItems />
                        </div>
                    </div>
                    <div
                        className={"rfm-marquee"}
                        style={{
                            "--play": "running",
                            "--direction": "normal",
                            "--duration": "43.9096875s",
                            "--delay": "0s",
                            "--iteration-count": "infinite",
                            "--min-width": "100%",
                        }}
                    >
                        <MarqueeItems />
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function ReviewItem({
            quote,
            author,
        }: {
            quote: string;
            author: string;
        }) {
            return (
                <div className={"rfm-child"} style={{"--transform": "none"}}>
                    <div className={"chakra-stack css-1j6o91x"}>
                        <h2 className={"chakra-text css-1327hnk"}>
                            {quote}
                        </h2>
                        <p className={"chakra-text css-v5oyqe"}>
                            ·
                        </p>
                        <p className={"chakra-text css-2hoiag"}>
                            {author}
                        </p>
                    </div>
                </div>
            )
        }

        function MarqueeItems() {
            return (
                <>
                    <ReviewItem
                        quote="“Game changer for your energy and health”"
                        author="Ines K"
                    />
                    <ReviewItem
                        quote="“It works!”"
                        author="Samsara L"
                    />
                    <ReviewItem
                        quote="“This supplement is the future”"
                        author="zachary W"
                    />
                    <ReviewItem
                        quote="“It’s a game changer!”"
                        author="Valerie O"
                    />
                    <ReviewItem
                        quote="“Revitalized mind and body”"
                        author="Amanda K"
                    />
                    <ReviewItem
                        quote="“A lifesaver”"
                        author="Catherine J"
                    />
                    <ReviewItem
                        quote="“Convenient and Effective”"
                        author="Antoine v"
                    />
                </>
            )
        }
    

export default ReviewsMarquee
