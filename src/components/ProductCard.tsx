import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Filled_five_point_star from './icons/Filled_five_point_star.tsx'
import Filled_five_point_star1 from './icons/Filled_five_point_star1.tsx'
import ImageWrapper1 from './ImageWrapper1.tsx'
import ProductLink from './ProductLink.tsx'
import ImageWrapper from './ImageWrapper.tsx'


        type ProductCardData = {
            badge: string;
            primaryImgId: string;
            secondaryImgId: string;
            label: string;
            star: JSX.Element;
            rating: string;
            reviews: string;
            description: string;
        };
    
// Component

        function ProductCard({ dataId }: { dataId: string }) {
            const {
                badge,
                primaryImgId,
                secondaryImgId,
                label,
                star,
                rating,
                reviews,
                description
            }: ProductCardData = getProductCardData(dataId);

            return (
                <div className={"product-card css-n4uwtu"}>
                    <div role={"group"} className={"chakra-linkbox css-1vz5i1g"}>
                        <div className={"chakra-aspect-ratio css-mdthky"}>
                            <div className={"css-3qzm71"}>
                                <div className={"css-l8fc8q"}>
                                    <span className={"chakra-badge product_badge css-19zfmbw"}>
                                        <span className={"css-1tqud6q"}>
                                            {badge}
                                        </span>
                                    </span>
                                    <ImageWrapper1 className="css-1z0hfml" imgId={primaryImgId} />
                                    <ImageWrapper1 className="css-l5goe2" imgId={secondaryImgId} />
                                </div>
                            </div>
                        </div>
                        <div className={"chakra-stack css-17jin10"}>
                            <div className={"css-u1cfch"}>
                                <h2 className={"chakra-text css-18ogj9d"}>
                                    <ProductLink label={label} />
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
                                        {reviews}
                                        <span className={"css-idkz9h"}>
                                            {` reviews`}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p className={"chakra-text css-1ejfp0o"}>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    


        function getProductCardData(id: string): ProductCardData {
            const stringId = String(id);

            if (stringId === "0") {
                return {
                    badge: "Sugar Free",
                    primaryImgId: "0",
                    secondaryImgId: "1",
                    label: "Mitopure Gummies",
                    star: <Filled_five_point_star />,
                    rating: "4.8",
                    reviews: "(1823)",
                    description: "A strawberry-flavored dose of cellular energy"
                };
            }

            return {
                badge: "Bestseller",
                primaryImgId: "2",
                secondaryImgId: "3",
                label: "Mitopure Softgels",
                star: <Filled_five_point_star1 />,
                rating: "4.5",
                reviews: "(4539)",
                description: "The simplest form of Mitopure"
            };
        }
    

export default ProductCard
