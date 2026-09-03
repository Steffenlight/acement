import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Price from './Price.tsx'


        type SupplyPriceData = {
            months: number;
            monthlyPrice: string;
            savingsPercent: string;
            priceWhole: string;
            priceDecimal?: string;
            wasWhole: string;
            wasThousands?: string;
        };
    
// Component

        function SupplyPrice({ dataId }: { dataId: string }) {
            const data: SupplyPriceData = getSupplyPriceData(dataId);

            return (
                <div className={"chakra-stack css-mmcuap"}>
                    <div className={"css-1ialerq"}>
                        <span className={"chakra-text css-1h8ehqw"}>
                            {data.months}-month supply
                        </span>
                        <span className={"chakra-text css-t9vpo3"}>
                            $
                            {data.monthlyPrice}
                            <span className={"chakra-text css-8s2k68"}>
                                /mo
                            </span>
                        </span>
                    </div>
                    <div className={"css-9n95wr"}>
                        <span className={"chakra-text price--saved css-1kme82f"}>
                            {`Save `}
                            {data.savingsPercent}
                            %
                        </span>
                        <div className={"css-mslifs"}>
                            <div className={"css-1rmue71"}>
                                <span className={"css-idkz9h"}>
                                    Price
                                </span>
                                <PriceValue
                                    whole={data.priceWhole}
                                    decimal={data.priceDecimal}
                                />
                                <span className={"css-idkz9h"}>
                                    Was
                                </span>
                                <PriceValue
                                    whole={data.wasWhole}
                                    thousands={data.wasThousands}
                                    was
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function PriceValue({
            whole,
            decimal,
            thousands,
            was = false
        }: {
            whole: string;
            decimal?: string;
            thousands?: string;
            was?: boolean;
        }) {
            return (
                <span className={was ? "chakra-text price--was css-45kggr" : "chakra-text price css-1eogrsf"}>
                    $
                    {whole}
                    {thousands !== undefined && (
                        <>
                            ,
                            {thousands}
                        </>
                    )}
                    {decimal !== undefined && (
                        <span className={"decimal"}>
                            .
                            {decimal}
                        </span>
                    )}
                </span>
            );
        }
    


        function getSupplyPriceData(id: string): SupplyPriceData {
            const stringId = String(id);

            const data: Record<string, SupplyPriceData> = {
                "0": {
                    months: 1,
                    monthlyPrice: "89",
                    savingsPercent: "10",
                    priceWhole: "89",
                    wasWhole: "99"
                },
                "1": {
                    months: 2,
                    monthlyPrice: "79",
                    savingsPercent: "20",
                    priceWhole: "158",
                    wasWhole: "198"
                },
                "2": {
                    months: 4,
                    monthlyPrice: "74",
                    savingsPercent: "25",
                    priceWhole: "295",
                    priceDecimal: "98",
                    wasWhole: "396"
                },
                "3": {
                    months: 12,
                    monthlyPrice: "69",
                    savingsPercent: "30",
                    priceWhole: "827",
                    priceDecimal: "92",
                    wasWhole: "1",
                    wasThousands: "188"
                }
            };

            return data[stringId] ?? data["0"];
        }
    

export default SupplyPrice
