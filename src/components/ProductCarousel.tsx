import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ProductRating from './ProductRating.tsx'
import ProductVisual from './ProductVisual.tsx'


// Component

        function ProductCarousel() {
            return (
                <div className={"swiper-wrapper"} id={"swiper-wrapper-f8359b5ae2410f1a5"}>
                    <ProductSlide
                        slideClassName="swiper-slide swiper-slide-active"
                        primaryImageId="0"
                        secondaryImageId="1"
                        badgeLabel="Sugar Free"
                        ratingDataId="0"
                        description="A strawberry-flavored dose of cellular energy"
                    />
                    <ProductSlide
                        slideClassName="swiper-slide swiper-slide-next"
                        primaryImageId="2"
                        secondaryImageId="3"
                        badgeLabel="Bestseller"
                        ratingDataId="1"
                        description="The simplest form of Mitopure"
                    />
                    <ProductSlide
                        slideClassName="swiper-slide"
                        primaryImageId="16"
                        secondaryImageId="17"
                        ratingDataId="2"
                        description="A tasty addition to your health routine"
                    />
                </div>
            )
        }
    

// Subcomponents

        function ProductSlide({
            slideClassName,
            primaryImageId,
            secondaryImageId,
            badgeLabel,
            ratingDataId,
            description
        }: {
            slideClassName: string;
            primaryImageId: string;
            secondaryImageId: string;
            badgeLabel?: string;
            ratingDataId: string;
            description: string;
        }) {
            return (
                <div
                    className={slideClassName}
                    role={"group"}
                    style={{width:"342px", marginRight:"24px"}}
                >
                    <div className={"product-card css-n4uwtu"}>
                        <div role={"group"} className={"chakra-linkbox css-1vz5i1g"}>
                            <div className={"chakra-aspect-ratio css-mdthky"}>
                                <ProductVisual
                                    primaryImageId={primaryImageId}
                                    secondaryImageId={secondaryImageId}
                                    {...(badgeLabel !== undefined ? { badgeLabel } : {})}
                                />
                            </div>
                            <div className={"chakra-stack css-17jin10"}>
                                <ProductRating dataId={ratingDataId} />
                                <p className={"chakra-text css-1ejfp0o"}>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    

export default ProductCarousel
