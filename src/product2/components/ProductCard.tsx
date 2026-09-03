import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Solid_five_point_star from './icons/Solid_five_point_star.tsx'
import Solid_five_point_star1 from './icons/Solid_five_point_star1.tsx'
import ImageContainer from './ImageContainer.tsx'
import ProductLink from './ProductLink.tsx'


        type ProductCardData = {
            badge: string;
            label: string;
            primaryImageId: string;
            secondaryImageId: string;
            rating: string;
            reviews: string;
            description: string;
            StarComponent: typeof Solid_five_point_star;
        };
    
// Component

        function ProductCard({ dataId }: { dataId: string }) {
            const {
                badge,
                label,
                primaryImageId,
                secondaryImageId,
                rating,
                reviews,
                description,
                StarComponent
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

                                    <ImageContainer variant="css-1z0hfml" imageId={primaryImageId} />

                                    <ImageContainer variant="css-l5goe2" imageId={secondaryImageId} />
                                </div>
                            </div>
                        </div>
                        <div className={"chakra-stack css-17jin10"}>
                            <div className={"css-u1cfch"}>
                                <h2 className={"chakra-text css-18ogj9d"}>
                                    <ProductLink label={label} />
                                </h2>
                                <div className={"chakra-stack css-vc9d0q"}>
                                    <StarComponent />
                                    <p className={"chakra-text css-rfs3wv"}>
                                        {rating}
                                        <span className={"css-idkz9h"}>
                                            {` stars`}
                                        </span>
                                    </p>
                                    <p className={"chakra-text css-rfs3wv"}>
                                        ({reviews})
                                        <span className={"css-idkz9h"}>
                                            {` reviews`}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p className={"chakra-text css-1ejfp0o"}>
                                {description}
                            </p>
                            <div className={"css-i3q7mh"}>
                                <span className={"chakra-text css-1s8s81k"}>
                                    $
                                    99
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    


        function getProductCardData(id: string): ProductCardData {
            const dataId = String(id);

            if (dataId === "1") {
                return {
                    badge: "Bestseller",
                    label: "Mitopure Softgels",
                    primaryImageId: "2",
                    secondaryImageId: "3",
                    rating: "4.5",
                    reviews: "4541",
                    description: "The simplest form of Mitopure",
                    StarComponent: Solid_five_point_star1
                };
            }

            return {
                badge: "Sugar Free",
                label: "Mitopure Gummies",
                primaryImageId: "0",
                secondaryImageId: "1",
                rating: "4.8",
                reviews: "1826",
                description: "A strawberry-flavored dose of cellular energy",
                StarComponent: Solid_five_point_star
            };
        }
    

export default ProductCard
