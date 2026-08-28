import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Filled_five_point_star from './icons/Filled_five_point_star.tsx'
import Filled_five_point_star1 from './icons/Filled_five_point_star1.tsx'
import Filled_five_point_star2 from './icons/Filled_five_point_star2.tsx'
import Filled_five_point_star3 from './icons/Filled_five_point_star3.tsx'
import Filled_five_point_star4 from './icons/Filled_five_point_star4.tsx'
import Filled_five_point_star15 from './icons/Filled_five_point_star15.tsx'
import Filled_five_point_star16 from './icons/Filled_five_point_star16.tsx'
import Filled_five_point_star17 from './icons/Filled_five_point_star17.tsx'
import Filled_five_point_star18 from './icons/Filled_five_point_star18.tsx'
import Filled_five_point_star19 from './icons/Filled_five_point_star19.tsx'
import Badge_with_checkmark from './icons/Badge_with_checkmark.tsx'
import Filled_five_point_star20 from './icons/Filled_five_point_star20.tsx'
import Filled_five_point_star21 from './icons/Filled_five_point_star21.tsx'
import Filled_five_point_star22 from './icons/Filled_five_point_star22.tsx'
import Filled_five_point_star23 from './icons/Filled_five_point_star23.tsx'
import Filled_five_point_star24 from './icons/Filled_five_point_star24.tsx'
import Filled_five_point_star25 from './icons/Filled_five_point_star25.tsx'
import Filled_five_point_star26 from './icons/Filled_five_point_star26.tsx'
import Filled_five_point_star27 from './icons/Filled_five_point_star27.tsx'
import Filled_five_point_star28 from './icons/Filled_five_point_star28.tsx'
import Filled_five_point_star29 from './icons/Filled_five_point_star29.tsx'
import Filled_five_point_star30 from './icons/Filled_five_point_star30.tsx'
import Filled_five_point_star31 from './icons/Filled_five_point_star31.tsx'
import Filled_five_point_star32 from './icons/Filled_five_point_star32.tsx'
import Filled_five_point_star33 from './icons/Filled_five_point_star33.tsx'
import Filled_five_point_star34 from './icons/Filled_five_point_star34.tsx'
import Filled_five_point_star35 from './icons/Filled_five_point_star35.tsx'
import Filled_five_point_star36 from './icons/Filled_five_point_star36.tsx'
import Filled_five_point_star37 from './icons/Filled_five_point_star37.tsx'
import Filled_five_point_star38 from './icons/Filled_five_point_star38.tsx'
import Filled_five_point_star39 from './icons/Filled_five_point_star39.tsx'
import Filled_five_point_star40 from './icons/Filled_five_point_star40.tsx'
import Filled_five_point_star41 from './icons/Filled_five_point_star41.tsx'
import Filled_five_point_star42 from './icons/Filled_five_point_star42.tsx'
import Filled_five_point_star43 from './icons/Filled_five_point_star43.tsx'
import Filled_five_point_star44 from './icons/Filled_five_point_star44.tsx'
import Filled_five_point_star45 from './icons/Filled_five_point_star45.tsx'
import Filled_five_point_star46 from './icons/Filled_five_point_star46.tsx'
import Filled_five_point_star47 from './icons/Filled_five_point_star47.tsx'
import Filled_five_point_star48 from './icons/Filled_five_point_star48.tsx'
import Filled_five_point_star49 from './icons/Filled_five_point_star49.tsx'


        type ReviewSlideData = {
            title: string;
            buyerName: string;
            buyerInitial: string;
            stars: JSX.Element;
        }
    
// Component

        function ReviewSlide({
            dataId,
            slideState
        }: {
            dataId: string;
            slideState?: "prev" | "next";
        }) {
            const { title, buyerName, buyerInitial, stars }: ReviewSlideData =
                getReviewSlideData(dataId);

            return (
                <div
                    className={`swiper-slide${slideState ? ` swiper-slide-${slideState}` : ""}`}
                    role={"group"}
                    style={{ marginRight: "24px" }}
                >
                    <div className={"css-1vn31qp"}>
                        <StarRating>{stars}</StarRating>
                        <h3 className={"chakra-text css-yysivz"}>
                            {title}
                        </h3>
                        <div className={"chakra-stack css-dk69dq"}>
                            <p className={"chakra-text css-1327hnk"}>
                                {buyerName}
                                {buyerInitial}
                            </p>
                            <div className={"chakra-stack css-197depe"}>
                                <span className={"chakra-text css-skr01p"}>
                                    Verified buyer
                                </span>
                                <Badge_with_checkmark />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function StarRating({ children }: { children: JSX.Element }) {
            return (
                <div className={"chakra-stack css-erspa2"} role={"group"}>
                    {children}
                </div>
            );
        }
    


        function getReviewSlideData(id: string): ReviewSlideData {
            const dataId = String(id);

            const data: Record<string, ReviewSlideData> = {
                "0": {
                    title: "Game changer for your energy and health",
                    buyerName: "Ines",
                    buyerInitial: "K",
                    stars: (
                        <>
                            <Filled_five_point_star15 />
                            <Filled_five_point_star16 />
                            <Filled_five_point_star17 />
                            <Filled_five_point_star18 />
                            <Filled_five_point_star19 />
                        </>
                    )
                },
                "1": {
                    title: "A lifesaver",
                    buyerName: "Catherine",
                    buyerInitial: "J",
                    stars: (
                        <>
                            <Filled_five_point_star20 />
                            <Filled_five_point_star21 />
                            <Filled_five_point_star22 />
                            <Filled_five_point_star23 />
                            <Filled_five_point_star24 />
                        </>
                    )
                },
                "2": {
                    title: "Superior product!",
                    buyerName: "SYLVIA",
                    buyerInitial: "M",
                    stars: (
                        <>
                            <Filled_five_point_star25 />
                            <Filled_five_point_star26 />
                            <Filled_five_point_star27 />
                            <Filled_five_point_star28 />
                            <Filled_five_point_star29 />
                        </>
                    )
                },
                "3": {
                    title: "Excellent supplement",
                    buyerName: "Debra",
                    buyerInitial: "K",
                    stars: (
                        <>
                            <Filled_five_point_star30 />
                            <Filled_five_point_star31 />
                            <Filled_five_point_star32 />
                            <Filled_five_point_star33 />
                            <Filled_five_point_star34 />
                        </>
                    )
                },
                "4": {
                    title: "Increased Strength and Energy",
                    buyerName: "Margaret",
                    buyerInitial: "M",
                    stars: (
                        <>
                            <Filled_five_point_star35 />
                            <Filled_five_point_star36 />
                            <Filled_five_point_star37 />
                            <Filled_five_point_star38 />
                            <Filled_five_point_star39 />
                        </>
                    )
                },
                "5": {
                    title: "My stamina is returning....",
                    buyerName: "Carol",
                    buyerInitial: "B",
                    stars: (
                        <>
                            <Filled_five_point_star40 />
                            <Filled_five_point_star41 />
                            <Filled_five_point_star42 />
                            <Filled_five_point_star43 />
                            <Filled_five_point_star44 />
                        </>
                    )
                },
                "6": {
                    title: "Revitalized mind and body",
                    buyerName: "Amanda",
                    buyerInitial: "K",
                    stars: (
                        <>
                            <Filled_five_point_star45 />
                            <Filled_five_point_star46 />
                            <Filled_five_point_star47 />
                            <Filled_five_point_star48 />
                            <Filled_five_point_star49 />
                        </>
                    )
                }
            };

            return data[dataId] ?? data["0"];
        }
    

export default ReviewSlide
