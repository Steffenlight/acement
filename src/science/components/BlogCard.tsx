import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import DateDisplay from './DateDisplay.tsx'
import ArticleLink from './ArticleLink.tsx'


        type BlogCardData = {
            imageId: string;
            primaryCategory: string;
            secondaryCategory?: string;
            dateTime: string;
            dateLabel: string;
            title: string;
        };
    
// Component

        function BlogCard({ dataId }: { dataId: string }) {
            const {
                imageId,
                primaryCategory,
                secondaryCategory,
                dateTime,
                dateLabel,
                title
            }: BlogCardData = getBlogCardData(dataId);

            return (
                <div className={"chakra-stack chakra-linkbox blog-card css-bkcnhs"}>
                    <div className={"css-79elbk"}>
                        <Img id={imageId} />
                    </div>
                    <div className={"chakra-stack css-8pfri0"}>
                        <BlogMetadata
                            primaryCategory={primaryCategory}
                            secondaryCategory={secondaryCategory}
                            dateTime={dateTime}
                            dateLabel={dateLabel}
                        />
                        <ArticleLink title={title} />
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function BlogMetadata({
            primaryCategory,
            secondaryCategory,
            dateTime,
            dateLabel
        }: {
            primaryCategory: string;
            secondaryCategory?: string;
            dateTime: string;
            dateLabel: string;
        }) {
            return (
                <div className={"chakra-stack css-ay1i52"}>
                    <span className={"chakra-text css-1327hnk"}>
                        {primaryCategory}
                    </span>
                    <p className={"chakra-text css-17orvr3"}>
                        ·
                    </p>
                    {secondaryCategory !== undefined && (
                        <>
                            <span className={"chakra-text css-1327hnk"}>
                                {secondaryCategory}
                            </span>
                            <p className={"chakra-text css-17orvr3"}>
                                ·
                            </p>
                        </>
                    )}
                    <div className={"chakra-stack css-1p1m4ay"}>
                        <span className={"chakra-text css-2hoiag"}>
                            <DateDisplay dateTime={dateTime} label={dateLabel} />
                        </span>
                    </div>
                </div>
            );
        }
    


        function getBlogCardData(id: string): BlogCardData {
            const stringId = String(id);

            const data: Record<string, BlogCardData> = {
                "0": {
                    imageId: "8",
                    primaryCategory: "News",
                    secondaryCategory: "Nutrition",
                    dateTime: "2026-08-13",
                    dateLabel: "Aug 13, 2026",
                    title: "Fake Urolithin A Supplements: How to Spot the Real Thing "
                },
                "1": {
                    imageId: "9",
                    primaryCategory: "Nutrition",
                    dateTime: "2026-07-29",
                    dateLabel: "Jul 29, 2026",
                    title: "Zone 2 vs Zone 3 for Mitochondrial Health: What Studies Show"
                },
                "2": {
                    imageId: "10",
                    primaryCategory: "Nutrition",
                    dateTime: "2026-07-10",
                    dateLabel: "Jul 10, 2026",
                    title: "Urolithin A vs Creatine: Which Supports Muscle and How?"
                }
            };

            return data[stringId] ?? data["0"];
        }
    

export default BlogCard
