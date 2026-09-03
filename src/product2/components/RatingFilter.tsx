import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Solid_five_point_star from './icons/Solid_five_point_star.tsx'
import Solid_five_point_star1 from './icons/Solid_five_point_star1.tsx'
import Solid_five_point_star8 from './icons/Solid_five_point_star8.tsx'
import Solid_five_point_star9 from './icons/Solid_five_point_star9.tsx'
import Solid_five_point_star10 from './icons/Solid_five_point_star10.tsx'
import Solid_five_point_star11 from './icons/Solid_five_point_star11.tsx'
import Solid_five_point_star12 from './icons/Solid_five_point_star12.tsx'
import Rating from './Rating.tsx'


        type RatingFilterData = {
            rating: number;
            percentage: number;
            StarComponent: () => JSX.Element;
        };
    
// Component

        function RatingFilter({ dataId }: { dataId: string }) {
            const { rating, percentage, StarComponent }: RatingFilterData = getRatingFilterData(dataId);
            return (
                <button type={"button"} className={"css-1l905p5"}>
                    <div className={"css-1uio90z"}>
                        <div className={"chakra-stack css-197depe"}>
                            <StarComponent />
                            <span className={"chakra-text css-1xkzddl"}>
                                {rating}
                            </span>
                        </div>
                        <div className={"css-1aif7lc"}>
                            <div
                                style={{ width: `${percentage}%` }}
                                role={"progressbar"}
                                className={"css-18q2xhg"}
                            >
                            </div>
                        </div>
                        <span className={"chakra-text css-dsn6b6"}>
                            {percentage}%
                        </span>
                    </div>
                </button>
            );
        }
    


        function getRatingFilterData(id: string): RatingFilterData {
            const stringId = String(id);

            const data: Record<string, RatingFilterData> = {
                "0": {
                    rating: 5,
                    percentage: 71,
                    StarComponent: Solid_five_point_star8
                },
                "1": {
                    rating: 4,
                    percentage: 17,
                    StarComponent: Solid_five_point_star9
                },
                "2": {
                    rating: 3,
                    percentage: 9,
                    StarComponent: Solid_five_point_star10
                },
                "3": {
                    rating: 2,
                    percentage: 1,
                    StarComponent: Solid_five_point_star11
                },
                "4": {
                    rating: 1,
                    percentage: 2,
                    StarComponent: Solid_five_point_star12
                }
            };

            return data[stringId] ?? data["0"];
        }
    

export default RatingFilter
