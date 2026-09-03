import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type ReviewDemographicsData = {
            demographics: Array<{
                label: string;
                value: string;
            }>;
        };
    
// Component

        function ReviewDemographics({ dataId }: { dataId: string }) {
            const { demographics }: ReviewDemographicsData = getReviewDemographicsData(dataId);

            return (
                <ul role={"list"} className={"css-1ahh3va"}>
                    <li className={"chakra-text css-145eu8b"}>
                        Yes, I would recommend this product
                    </li>
                    {demographics.map((item) => (
                        <DemographicItem
                            key={item.label}
                            label={item.label}
                            value={item.value}
                        />
                    ))}
                </ul>
            );
        }
    

// Subcomponents

        function DemographicItem({
            label,
            value
        }: {
            label: string;
            value: string;
        }) {
            return (
                <li className={"chakra-text css-fhd0dq"}>
                    {label}
                    {`: `}
                    {value}
                </li>
            );
        }
    


        function getReviewDemographicsData(id: string): ReviewDemographicsData {
            const stringId = String(id);

            const data: Record<string, ReviewDemographicsData> = {
                "0": {
                    demographics: [
                        { label: "Age", value: "60 to 69" },
                        { label: "Gender", value: "Male" }
                    ]
                },
                "1": {
                    demographics: [
                        { label: "Gender", value: "Female" },
                        { label: "Age", value: "40 to 49" }
                    ]
                },
                "2": {
                    demographics: [
                        { label: "Age", value: "30 to 39" },
                        { label: "Gender", value: "Male" }
                    ]
                }
            };

            return data[stringId] ?? {
                demographics: []
            };
        }
    

export default ReviewDemographics
