import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type SubscriptionRadioData = {
            inputId: string;
            value: string;
            checked: "" | undefined;
        };
    
// Component

        function SubscriptionRadio({ dataId }: { dataId: string }) {
            const { inputId, value, checked }: SubscriptionRadioData = getSubscriptionRadioData(dataId);
            return (
                <input
                    id={inputId}
                    type={"radio"}
                    value={value}
                    {...(checked !== undefined ? { checked } : {})}
                    name={"subscription"}
                    style={{border:"0px", clip:"rect(0px,0px,0px,0px)", height:"1px", width:"1px", margin:"-1px", padding:"0px", overflow:"hidden", whiteSpace:"nowrap", position:"absolute"}}
                >
                </input>
            );
        }
    


        function getSubscriptionRadioData(id: string): SubscriptionRadioData {
            const dataId = String(id);
            const data: Record<string, SubscriptionRadioData> = {
                "0": {
                    inputId: "gid://shopify/ProductVariant/41778956632133",
                    value: "gid://shopify/SellingPlan/1698660421",
                    checked: undefined
                },
                "1": {
                    inputId: "gid://shopify/ProductVariant/41778956664901",
                    value: "gid://shopify/SellingPlan/1698693189",
                    checked: undefined
                },
                "2": {
                    inputId: "gid://shopify/ProductVariant/41778956697669",
                    value: "gid://shopify/SellingPlan/1698725957",
                    checked: ""
                },
                "3": {
                    inputId: "gid://shopify/ProductVariant/41778956730437",
                    value: "gid://shopify/SellingPlan/1698627653",
                    checked: undefined
                }
            };
            return data[dataId] ?? {
                inputId: "",
                value: "",
                checked: undefined
            };
        }
    

export default SubscriptionRadio
