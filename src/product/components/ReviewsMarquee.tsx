import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Reviews from './Reviews.tsx'


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
                            <ReviewItem quote="“A lifesaver”" author="Catherine J" />
                            <ReviewItem
                                quote="“Best supplement I have added for increased performance and recovery”"
                                author="Marisa P"
                            />
                            <ReviewItem
                                quote="“Game changer for your energy and health”"
                                author="Ines K"
                            />
                            <ReviewItem quote="“It works!”" author="Samsara L" />
                            <ReviewItem
                                quote="“Convenient and Effective”"
                                author="Antoine v"
                            />
                            <ReviewItem
                                quote="“Revitalized mind and body”"
                                author="Amanda K"
                            />
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
                        <ReviewItem quote="“A lifesaver”" author="Catherine J" />
                        <ReviewItem
                            quote="“Best supplement I have added for increased performance and recovery”"
                            author="Marisa P"
                        />
                        <ReviewItem
                            quote="“Game changer for your energy and health”"
                            author="Ines K"
                        />
                        <ReviewItem quote="“It works!”" author="Samsara L" />
                        <ReviewItem
                            quote="“Convenient and Effective”"
                            author="Antoine v"
                        />
                        <ReviewItem
                            quote="“Revitalized mind and body”"
                            author="Amanda K"
                        />
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
