import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import HeaderSubnav from './HeaderSubnav.tsx'
import ProductCard from './ProductCard.tsx'
import ScienceNavigationCard from './ScienceNavigationCard.tsx'
import BlogCard from './BlogCard.tsx'


        type NavigationPanelData = {
            headerSubnavDataId: string;
            firstContent: React.ReactNode;
            secondContent: React.ReactNode;
            thirdContent: React.ReactNode;
        };
    
// Component

        function NavigationPanel({ dataId }: { dataId: string }) {
            const {
                headerSubnavDataId,
                firstContent,
                secondContent,
                thirdContent,
            }: NavigationPanelData = getNavigationPanelData(dataId);

            return (
                <div className={"css-1q2viss"} style={{ height: "0px" }}>
                    <div
                        className={"css-1sv5q0y"}
                        style={{ opacity: "0", transform: "translateY(-20px)" }}
                    >
                        <div className={"css-1quqpr3"}>
                            <div className={"css-hjkrkj"}>
                                <div role={"separator"} className={"css-hnuqmg"}></div>
                                <NavigationSlot>
                                    <HeaderSubnav dataId={headerSubnavDataId} />
                                </NavigationSlot>
                                <NavigationSlot>{firstContent}</NavigationSlot>
                                <NavigationSlot>{secondContent}</NavigationSlot>
                                <NavigationSlot>{thirdContent}</NavigationSlot>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function NavigationSlot({ children }: { children?: React.ReactNode }) {
            return (
                <div className={"css-1jewqar"}>
                    {children}
                </div>
            );
        }
    


        function getNavigationPanelData(id: string): NavigationPanelData {
            const stringId = String(id);

            if (stringId === "0") {
                return {
                    headerSubnavDataId: "0",
                    firstContent: <ProductCard dataId="0" />,
                    secondContent: <ProductCard dataId="1" />,
                    thirdContent: null,
                };
            }

            if (stringId === "1") {
                return {
                    headerSubnavDataId: "1",
                    firstContent: (
                        <ScienceNavigationCard
                            imageId="4"
                            label="Science of Mitopure®"
                            trackingId="ga.desktop.header.science_card"
                        />
                    ),
                    secondContent: (
                        <ScienceNavigationCard
                            imageId="5"
                            label="How Mitopure® works"
                            trackingId="ga.desktop.header.how_it_works_card"
                        />
                    ),
                    thirdContent: (
                        <ScienceNavigationCard
                            imageId="6"
                            label="Benefits"
                            trackingId="ga.desktop.header.benefits_card"
                        />
                    ),
                };
            }

            if (stringId === "2") {
                return {
                    headerSubnavDataId: "2",
                    firstContent: <BlogCard dataId="0" />,
                    secondContent: <BlogCard dataId="1" />,
                    thirdContent: <BlogCard dataId="2" />,
                };
            }

            return {
                headerSubnavDataId: "0",
                firstContent: <ProductCard dataId="0" />,
                secondContent: <ProductCard dataId="1" />,
                thirdContent: null,
            };
        }
    

export default NavigationPanel
