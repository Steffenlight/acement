import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Rating from './Rating.tsx'
import ProductRating from './ProductRating.tsx'
import Price from './Price.tsx'
import ProductVisual from './ProductVisual.tsx'


// Component

        function ProductCarousel() {
            return (
                <div className={"swiper-wrapper"} id={"swiper-wrapper-3d2128250836cb46"}>
                    <ProductSlide
                        slideClassName="swiper-slide swiper-slide-active"
                        primaryImageId="0"
                        secondaryImageId="1"
                        showSugarFree={true}
                        ratingDataId="0"
                        description="A strawberry-flavored dose of cellular energy"
                    />
                    <ProductSlide
                        slideClassName="swiper-slide swiper-slide-next"
                        primaryImageId="37"
                        secondaryImageId="38"
                        showSugarFree={false}
                        ratingDataId="1"
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
            showSugarFree,
            ratingDataId,
            description
        }: {
            slideClassName: string;
            primaryImageId: string;
            secondaryImageId: string;
            showSugarFree: boolean;
            ratingDataId: string;
            description: string;
        }) {
            return (
                <div
                    className={slideClassName}
                    role={"group"}
                    style={{width:"383px", marginRight:"24px"}}
                >
                    <div className={"product-card css-n4uwtu"}>
                        <div role={"group"} className={"chakra-linkbox css-1vz5i1g"}>
                            <div className={"chakra-aspect-ratio css-mdthky"}>
                                <ProductVisual
                                    primaryImageId={primaryImageId}
                                    secondaryImageId={secondaryImageId}
                                    showSugarFree={showSugarFree}
                                />
                            </div>
                            <div className={"chakra-stack css-17jin10"}>
                                <ProductRating dataId={ratingDataId} />
                                <p className={"chakra-text css-1ejfp0o"}>
                                    {description}
                                </p>
                                <Price amount="99" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    

export default ProductCarousel
