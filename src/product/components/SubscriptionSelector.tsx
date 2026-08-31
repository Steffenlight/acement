import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import SubscriptionRadio from './SubscriptionRadio.tsx'
import SupplyPrice from './SupplyPrice.tsx'
import SubscriptionDetails from './SubscriptionDetails.tsx'
import AddToCartButton from './AddToCartButton.tsx'
import Price from './Price.tsx'
import OfferBand from './OfferBand.tsx'


// Component

        function SubscriptionSelector() {
            return (
                <div className={"chakra-stack product_subscriptionMultiVariant css-fci8ch"}>
                    <h2 className={"chakra-text css-eb5ql6"}>
                        Subscribe &amp; Save:
                    </h2>
                    <div className={"chakra-stack css-8pfri0"} role={"radiogroup"}>
                        <SubscriptionOption dataId="0" variant="standard" />
                        <SubscriptionOption dataId="1" variant="standard" />
                        <SubscriptionOption dataId="2" variant="clinical" />
                        <SubscriptionOption dataId="3" variant="bestValue" />
                    </div>
                    <div className={"chakra-stack product_ctas css-1j7yyl0"}>
                        <OfferBand />
                        <div className={"chakra-stack css-xqcv1s"}>
                            <div className={"css-165casq"}>
                                <AddToCartButton dataId="0" />
                            </div>
                        </div>
                        <div className={"css-xi606m"}>
                            <div className={"css-165casq"}>
                                <AddToCartButton dataId="1" />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function SubscriptionOption({
            dataId,
            variant
        }: {
            dataId: string;
            variant: "standard" | "clinical" | "bestValue";
        }) {
            if (variant === "clinical") {
                return (
                    <label className={"css-4g6ai3"}>
                        <SubscriptionRadio dataId={dataId} />
                        <div className={"css-ni68"}>
                            <span className={"chakra-badge css-1cym26v"}>
                                <span className={"css-1tqud6q"}>
                                    Clinically Recommended
                                </span>
                            </span>
                            <div className={"css-1tmvjb4"}>
                                <span className={"css-w36mm4"}>

                                </span>
                                <SupplyPrice dataId={dataId} />
                            </div>
                            <div className={"css-i6bazn"} style={{height:"auto"}}>
                                <SubscriptionDetails />
                            </div>
                        </div>
                    </label>
                )
            }

            if (variant === "bestValue") {
                return (
                    <label className={"css-4g6ai3"}>
                        <SubscriptionRadio dataId={dataId} />
                        <div className={"css-lx70yz"}>
                            <span className={"chakra-badge css-fjs4at"}>
                                <span className={"css-1tqud6q"}>
                                    Best Value
                                </span>
                            </span>
                            <div className={"css-1kca32o"}>
                                <span className={"css-6shprh"}>

                                </span>
                                <SupplyPrice dataId={dataId} />
                            </div>
                        </div>
                    </label>
                )
            }

            return (
                <label className={"css-4g6ai3"}>
                    <SubscriptionRadio dataId={dataId} />
                    <div className={"css-lx70yz"}>
                        <div className={"css-1kca32o"}>
                            <span className={"css-6shprh"}>

                            </span>
                            <SupplyPrice dataId={dataId} />
                        </div>
                    </div>
                </label>
            )
        }
    

export default SubscriptionSelector
