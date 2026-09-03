import React, { Fragment } from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import DateTime from './DateTime.tsx'
import ArticleLink from './ArticleLink.tsx'


        type BlogCardData = {
            imageId: string;
            categories: string[];
            dateTime: string;
            dateLabel: string;
            title: string;
        };
    
// Component

        function BlogCard({ dataId }: { dataId: string }) {
            const data: BlogCardData = getBlogCardData(dataId);

            return (
                <div className={"chakra-stack chakra-linkbox blog-card css-bkcnhs"}>
                    <div className={"css-79elbk"}>
                        <Img id={data.imageId} />
                    </div>
                    <div className={"chakra-stack css-8pfri0"}>
                        <BlogCardMeta
                            categories={data.categories}
                            dateTime={data.dateTime}
                            dateLabel={data.dateLabel}
                        />
                        <ArticleLink title={data.title} />
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function BlogCardMeta({
            categories,
            dateTime,
            dateLabel,
        }: {
            categories: string[];
            dateTime: string;
            dateLabel: string;
        }) {
            return (
                <div className={"chakra-stack css-ay1i52"}>
                    {categories.map((category, index) => (
                        <Fragment key={`${category}-${index}`}>
                            <span className={"chakra-text css-1327hnk"}>
                                {category}
                            </span>
                            <p className={"chakra-text css-17orvr3"}>
                                ·
                            </p>
                        </Fragment>
                    ))}
                    <div className={"chakra-stack css-1p1m4ay"}>
                        <span className={"chakra-text css-2hoiag"}>
                            <DateTime dateTime={dateTime} label={dateLabel} />
                        </span>
                    </div>
                </div>
            );
        }
    


        function getBlogCardData(id: string): BlogCardData {
            const normalizedId = String(id);

            const data: Record<string, BlogCardData> = {
                "0": {
                    imageId: "8",
                    categories: ["News", "Nutrition"],
                    dateTime: "2026-08-13",
                    dateLabel: "Aug 13, 2026",
                    title: "Fake Urolithin A Supplements: How to Spot the Real Thing ",
                },
                "1": {
                    imageId: "9",
                    categories: ["Nutrition"],
                    dateTime: "2026-07-29",
                    dateLabel: "Jul 29, 2026",
                    title: "Zone 2 vs Zone 3 for Mitochondrial Health: What Studies Show",
                },
                "2": {
                    imageId: "10",
                    categories: ["Nutrition"],
                    dateTime: "2026-07-10",
                    dateLabel: "Jul 10, 2026",
                    title: "Urolithin A vs Creatine: Which Supports Muscle and How?",
                },
            };

            return data[normalizedId] ?? {
                imageId: "",
                categories: [],
                dateTime: "",
                dateLabel: "",
                title: "",
            };
        }
    

export default BlogCard
