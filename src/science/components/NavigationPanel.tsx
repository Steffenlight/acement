import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import HeaderNav from './HeaderNav.tsx'
import ProductCard from './ProductCard.tsx'
import SkincarePromo from './SkincarePromo.tsx'
import ScienceNavigationCard from './ScienceNavigationCard.tsx'
import BlogCard from './BlogCard.tsx'
import Header from './Header.tsx'


        type NavigationPanelData = {
            items: [JSX.Element, JSX.Element, JSX.Element, JSX.Element];
        };
    
// Component

        function NavigationPanel({ dataId }: { dataId: string }) {
            const { items }: NavigationPanelData = getNavigationPanelData(dataId);

            return (
                <div
                    className={"css-1q2viss"}
                    style={{
                        height: "0px",
                        transform: "none",
                        transformOrigin: "50% 50% 0px"
                    }}
                >
                    <div
                        className={"css-1sv5q0y"}
                        style={{
                            opacity: "0",
                            transform: "translateY(-20px)"
                        }}
                    >
                        <div className={"css-1quqpr3"}>
                            <div className={"css-hjkrkj"}>
                                <div role={"separator"} className={"css-hnuqmg"}>

                                </div>
                                <NavigationPanelItem>
                                    {items[0]}
                                </NavigationPanelItem>
                                <NavigationPanelItem>
                                    {items[1]}
                                </NavigationPanelItem>
                                <NavigationPanelItem>
                                    {items[2]}
                                </NavigationPanelItem>
                                <NavigationPanelItem>
                                    {items[3]}
                                </NavigationPanelItem>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function NavigationPanelItem({ children }: { children: JSX.Element }) {
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
                    items: [
                        <HeaderNav dataId="0" />,
                        <ProductCard dataId="0" />,
                        <ProductCard dataId="1" />,
                        <SkincarePromo />
                    ]
                };
            }

            if (stringId === "1") {
                return {
                    items: [
                        <HeaderNav dataId="1" />,
                        <ScienceNavigationCard
                            imageId="5"
                            label="Science of Mitopure®"
                            trackingId="ga.desktop.header.science_card"
                        />,
                        <ScienceNavigationCard
                            imageId="6"
                            label="How Mitopure® works"
                            trackingId="ga.desktop.header.how_it_works_card"
                        />,
                        <ScienceNavigationCard
                            imageId="7"
                            label="Benefits"
                            trackingId="ga.desktop.header.benefits_card"
                        />
                    ]
                };
            }

            if (stringId === "2") {
                return {
                    items: [
                        <HeaderNav dataId="2" />,
                        <BlogCard dataId="0" />,
                        <BlogCard dataId="1" />,
                        <BlogCard dataId="2" />
                    ]
                };
            }

            return {
                items: [
                    <HeaderNav dataId="0" />,
                    <ProductCard dataId="0" />,
                    <ProductCard dataId="1" />,
                    <SkincarePromo />
                ]
            };
        }
    

export default NavigationPanel
