import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import DateTime from './DateTime.tsx'
import ArticleLink from './ArticleLink.tsx'


        type BlogCardData = {
            imageId: string;
            dateTimeDataId: string;
            title: string;
            showNews: boolean;
        };
    
// Component

        function BlogCard({ dataId }: { dataId: string }) {
            const { imageId, dateTimeDataId, title, showNews }: BlogCardData = getBlogCardData(dataId);

            return (
                <div className={"chakra-stack chakra-linkbox blog-card css-bkcnhs"}>
                    <div className={"css-79elbk"}>
                        <Img id={imageId} />
                    </div>
                    <div className={"chakra-stack css-8pfri0"}>
                        <div className={"chakra-stack css-ay1i52"}>
                            {showNews && (
                                <>
                                    <span className={"chakra-text css-1327hnk"}>
                                        News
                                    </span>
                                    <p className={"chakra-text css-17orvr3"}>
                                        ·
                                    </p>
                                </>
                            )}
                            <span className={"chakra-text css-1327hnk"}>
                                Nutrition
                            </span>
                            <p className={"chakra-text css-17orvr3"}>
                                ·
                            </p>
                            <div className={"chakra-stack css-1p1m4ay"}>
                                <span className={"chakra-text css-2hoiag"}>
                                    <DateTime dataId={dateTimeDataId} />
                                </span>
                            </div>
                        </div>
                        <ArticleLink title={title} />
                    </div>
                </div>
            );
        }
    


        function getBlogCardData(id: string): BlogCardData {
            const normalizedId = String(id);

            const data: Record<string, BlogCardData> = {
                "0": {
                    imageId: "7",
                    dateTimeDataId: "0",
                    title: "Fake Urolithin A Supplements: How to Spot the Real Thing ",
                    showNews: true
                },
                "1": {
                    imageId: "8",
                    dateTimeDataId: "1",
                    title: "Zone 2 vs Zone 3 for Mitochondrial Health: What Studies Show",
                    showNews: false
                },
                "2": {
                    imageId: "9",
                    dateTimeDataId: "2",
                    title: "Urolithin A vs Creatine: Which Supports Muscle and How?",
                    showNews: false
                }
            };

            return data[normalizedId] ?? data["0"];
        }
    

export default BlogCard
