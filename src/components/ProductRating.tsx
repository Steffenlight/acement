import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Filled_five_point_star from './icons/Filled_five_point_star.tsx'
import Filled_five_point_star7 from './icons/Filled_five_point_star7.tsx'
import Filled_five_point_star8 from './icons/Filled_five_point_star8.tsx'
import Filled_five_point_star9 from './icons/Filled_five_point_star9.tsx'


        type ProductRatingData = {
            name: string;
            rating: string;
            reviewCount: string;
            star: JSX.Element;
        };
    
// Component

        function ProductRating({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                name,
                rating,
                reviewCount,
                star
            }: ProductRatingData = getProductRatingData(dataId);

            return (
                <div className={"css-u1cfch"}>
                    <h2 className={"chakra-text css-18ogj9d"}>
                        <a className={"chakra-linkbox__overlay css-kvj8dg"}>
                            {name}
                        </a>
                    </h2>
                    <div className={"chakra-stack css-vc9d0q"}>
                        {star}
                        <p className={"chakra-text css-rfs3wv"}>
                            {rating}
                            <span className={"css-idkz9h"}>
                                {` stars`}
                            </span>
                        </p>
                        <p className={"chakra-text css-rfs3wv"}>
                            {reviewCount}
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
                    reviewCount: "(1823)",
                    star: <Filled_five_point_star7 />
                };
            }

            if (stringId === "1") {
                return {
                    name: "Mitopure Softgels",
                    rating: "4.5",
                    reviewCount: "(4539)",
                    star: <Filled_five_point_star8 />
                };
            }

            return {
                name: "Mitopure Powder",
                rating: "4.5",
                reviewCount: "(1119)",
                star: <Filled_five_point_star9 />
            };
        }
    

export default ProductRating
