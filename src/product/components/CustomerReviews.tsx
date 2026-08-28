import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Solid_five_point_star from './icons/Solid_five_point_star.tsx'
import Solid_filled_circle from './icons/Solid_filled_circle.tsx'
import Solid_five_point_star7 from './icons/Solid_five_point_star7.tsx'
import Solid_filled_circle1 from './icons/Solid_filled_circle1.tsx'
import Rating from './Rating.tsx'
import RatingFilter from './RatingFilter.tsx'
import TireView from './TireView.tsx'
import RatingFilterList from './RatingFilterList.tsx'
import Reviews from './Reviews.tsx'


// Component

        function CustomerReviews() {
            return (
                <div className={"css-dlkjlw"}>
                    <div className={"css-hztovv"}>
                        <h2 className={"chakra-text css-m9n0f0"}>
                            Customer reviews
                        </h2>
                        <div className={"css-qy5qjr"}>
                            <div className={"chakra-stack css-mbfx4q"}>
                                <div className={"css-1nylpq2"}>
                                    <Rating rating="4.5" />
                                    <Solid_five_point_star7 />
                                </div>
                                <p className={"chakra-text css-5t897g"}>
                                    Based on 4541 reviews
                                </p>
                            </div>
                            <div className={"chakra-stack css-mbfx4q"}>
                                <div className={"chakra-stack css-15b7orw"}>
                                    <p className={"chakra-text css-1kcmo00"}>
                                        <span className={"chakra-text css-1azuhk2"}>
                                            95
                                        </span>
                                        <span className={"chakra-text css-1vq1gfk"}>
                                            %
                                        </span>
                                    </p>
                                </div>
                                <p className={"chakra-text css-5t897g"}>
                                    Would recommend this product
                                </p>
                            </div>
                        </div>
                        <RatingFilterList />
                        <div className={"css-0"}>
                            <div role={"separator"} className={"css-1nkq5lz"}>

                            </div>
                            <div className={"css-1saeeni"}>
                                <MetricItem
                                    prefix="energy"
                                    suffix="improvement"
                                    variant="side"
                                    score="3.9/5"
                                />
                                <MetricItem
                                    prefix="fitness"
                                    suffix="level"
                                    variant="wheel"
                                    score="3.8/5"
                                />
                            </div>
                        </div>
                        <a className={"chakra-button css-12q62e"} target={"_blank"} rel={"noopener noreferrer"}>
                            Write a review
                        </a>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function MetricItem({
            prefix,
            suffix,
            variant,
            score
        }: {
            prefix: string;
            suffix: string;
            variant: "side" | "wheel";
            score: string;
        }) {
            return (
                <>
                    <div className={"css-0"}>
                        <p className={"chakra-text css-azbbkx"}>
                            {`Average `}
                            {`${prefix} `}
                            <span className={"css-epvm6"}>
                                {suffix}
                                <Solid_filled_circle1 />
                            </span>
                        </p>
                    </div>
                    <div className={"css-c4d6ik"}>
                        <TireView variant={variant} />
                    </div>
                    <div className={"css-s2uf1z"}>
                        <p className={"chakra-text css-fhd0dq"}>
                            {score}
                        </p>
                    </div>
                </>
            )
        }
    

export default CustomerReviews
