import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Solid_five_point_star from './icons/Solid_five_point_star.tsx'
import Solid_five_point_star2 from './icons/Solid_five_point_star2.tsx'
import Solid_five_point_star28 from './icons/Solid_five_point_star28.tsx'
import Solid_five_point_star29 from './icons/Solid_five_point_star29.tsx'
import Rating from './Rating.tsx'


        type ProductRatingData = {
            name: string;
            rating: string;
            reviews: string;
            stars: JSX.Element;
        };
    
// Component

        function ProductRating({ dataId }: { dataId: string }) {
            const { name, rating, reviews, stars }: ProductRatingData = getProductRatingData(dataId);

            return (
                <div className={"css-u1cfch"}>
                    <h2 className={"chakra-text css-18ogj9d"}>
                        <a className={"chakra-linkbox__overlay css-kvj8dg"}>
                            {name}
                        </a>
                    </h2>
                    <div className={"chakra-stack css-vc9d0q"}>
                        {stars}
                        <p className={"chakra-text css-rfs3wv"}>
                            {rating}
                            <span className={"css-idkz9h"}>
                                {` stars`}
                            </span>
                        </p>
                        <p className={"chakra-text css-rfs3wv"}>
                            {reviews}
                            <span className={"css-idkz9h"}>
                                {` reviews`}
                            </span>
                        </p>
                    </div>
                </div>
            );
        }
    


        function getProductRatingData(id: string): ProductRatingData {
            const stringId = String(id);

            if (stringId === "0") {
                return {
                    name: "Mitopure Gummies",
                    rating: "4.8",
                    reviews: "(1826)",
                    stars: <Solid_five_point_star28 />
                };
            }

            return {
                name: "Mitopure Powder",
                rating: "4.5",
                reviews: "(1119)",
                stars: <Solid_five_point_star29 />
            };
        }
    

export default ProductRating
