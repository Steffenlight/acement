import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import MitopureVideo from './MitopureVideo.tsx'
import EmptyContainer2 from './EmptyContainer2.tsx'
import HeroMedia from './HeroMedia.tsx'
import EmptyContainer1 from './EmptyContainer1.tsx'
import EmptyContainer from './EmptyContainer.tsx'
import HeroContent from './HeroContent.tsx'


// Component

        function HeroCarousel() {
            return (
                <div
                    className={"swiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"}
                    style={{ width: "100%" }}
                >
                    <div
                        className={"swiper-wrapper"}
                        id={"swiper-wrapper-ec59f5f2b6b13e3c"}
                    >
                        <HeroSlide
                            className={"swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"}
                            width={"1896px"}
                            opacity={"1"}
                            transform={"translate3d(0px,0px,0px)"}
                            dataId={"0"}
                        >
                            <MitopureVideo />
                            <EmptyContainer2 />
                        </HeroSlide>
                        <HeroSlide
                            className={"swiper-slide swiper-slide-next"}
                            width={"1896px"}
                            opacity={"0"}
                            transform={"translate3d(-1896px,0px,0px)"}
                            dataId={"1"}
                        >
                            <HeroMedia />
                            <EmptyContainer1 />
                        </HeroSlide>
                    </div>
                    <span className={"swiper-notification sf-hidden"}>
    
                    </span>
                </div>
            )
        }
    

// Subcomponents

        function HeroSlide({
            className,
            width,
            opacity,
            transform,
            dataId,
            children
        }: {
            className: string;
            width: string;
            opacity: string;
            transform: string;
            dataId: string;
            children: React.ReactNode;
        }) {
            return (
                <div
                    className={className}
                    role={"group"}
                    style={{ width, opacity, transform }}
                >
                    <div className={"hero-carousel-item css-jzz4r9"}>
                        <div className={"hero-carousel-content css-opiv86"}>
                            <HeroContent dataId={dataId} />
                        </div>
                        <div className={"css-1543gav"}>
                            {children}
                        </div>
                    </div>
                </div>
            )
        }
    

export default HeroCarousel
