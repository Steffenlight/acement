import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Reviews from './Reviews.tsx'


// PLACEHOLDER COPY — replace with real verified Ace Men reviews before launch.
// Do not ship attributed quotes that did not come from an actual customer.
const REVIEWS = [
    { quote: "“More energy than I've had in ten years”", author: "Derek W" },
    { quote: "“Adding weight to the bar every session”", author: "Tobias R" },
    { quote: "“Sleep sorted itself out first”", author: "Elias V" },
    { quote: "“Drive came back, which I wasn't expecting”", author: "Marcus H" },
    { quote: "“My bloodwork actually moved”", author: "Preston K" },
    { quote: "“Best I've felt since my twenties”", author: "Callum B" },
]


// Component

        function ReviewsMarquee() {
            return (
                <div
                    className={"rfm-marquee-container reviews-marquee css-1r9wea"}
                    style={{
                        "--pause-on-hover": "running",
                        "--pause-on-click": "running",
                        "--width": "100%",
                        "--transform": "none"
                    } as React.CSSProperties}
                >
                    <div
                        className={"rfm-marquee"}
                        style={{
                            "--play": "running",
                            "--direction": "normal",
                            "--duration": "44.5025s",
                            "--delay": "0s",
                            "--iteration-count": "infinite",
                            "--min-width": "100%"
                        } as React.CSSProperties}
                    >
                        <div className={"rfm-initial-child-container"}>
                            {REVIEWS.map((r) => (
                                <ReviewItem key={r.author} quote={r.quote} author={r.author} />
                            ))}
                        </div>
                    </div>
                    <div
                        className={"rfm-marquee"}
                        style={{
                            "--play": "running",
                            "--direction": "normal",
                            "--duration": "44.5025s",
                            "--delay": "0s",
                            "--iteration-count": "infinite",
                            "--min-width": "100%"
                        } as React.CSSProperties}
                    >
                        {REVIEWS.map((r) => (
                            <ReviewItem key={r.author} quote={r.quote} author={r.author} />
                        ))}
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function ReviewItem({
            quote,
            author
        }: {
            quote: string;
            author: string;
        }) {
            return (
                <div
                    className={"rfm-child"}
                    style={{"--transform": "none"} as React.CSSProperties}
                >
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
    

export default ReviewsMarquee
