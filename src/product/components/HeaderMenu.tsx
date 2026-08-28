import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import HeaderSubnav from './HeaderSubnav.tsx'
import ProductCard from './ProductCard.tsx'
import SkincareArticle from './SkincareArticle.tsx'
import ScienceCard from './ScienceCard.tsx'
import BlogCard from './BlogCard.tsx'


        type HeaderMenuData = {
            header: JSX.Element;
            first: JSX.Element;
            second: JSX.Element;
            third: JSX.Element;
        };
    
// Component

        function HeaderMenu({ dataId }: { dataId: string }) {
            const { header, first, second, third }: HeaderMenuData = getHeaderMenuData(dataId);

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
                        style={{ opacity: "0", transform: "translateY(-20px)" }}
                    >
                        <div className={"css-1quqpr3"}>
                            <div className={"css-hjkrkj"}>
                                <div role={"separator"} className={"css-hnuqmg"}>

                                </div>
                                <ContentSlot>{header}</ContentSlot>
                                <ContentSlot>{first}</ContentSlot>
                                <ContentSlot>{second}</ContentSlot>
                                <ContentSlot>{third}</ContentSlot>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function ContentSlot({ children }: { children: JSX.Element }) {
            return (
                <div className={"css-1jewqar"}>
                    {children}
                </div>
            );
        }
    


        function getHeaderMenuData(id: string): HeaderMenuData {
            const dataId = String(id);

            if (dataId === "0") {
                return {
                    header: <HeaderSubnav dataId="0" />,
                    first: <ProductCard dataId="0" />,
                    second: <ProductCard dataId="1" />,
                    third: <SkincareArticle />
                };
            }

            if (dataId === "1") {
                return {
                    header: <HeaderSubnav dataId="1" />,
                    first: <ScienceCard dataId="0" />,
                    second: <ScienceCard dataId="1" />,
                    third: <ScienceCard dataId="2" />
                };
            }

            return {
                header: <HeaderSubnav dataId="2" />,
                first: <BlogCard dataId="0" />,
                second: <BlogCard dataId="1" />,
                third: <BlogCard dataId="2" />
            };
        }
    

export default HeaderMenu
