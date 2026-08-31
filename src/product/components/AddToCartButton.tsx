import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { ArrowRight } from './OfferBand.tsx'



        type AddToCartButtonData = {
            className: string;
            content: React.ReactNode;
        }
    
// Component

        function AddToCartButton({ dataId }: { dataId: string }) {
            const { className, content }: AddToCartButtonData = getAddToCartButtonData(dataId);
            return (
                <button type={"button"} className={className}>
                    <span className={"children"}>
                        {content}
                    </span>
                </button>
            );
        }
    


        function getAddToCartButtonData(id: string): AddToCartButtonData {
            const stringId = String(id);

            if (stringId === "1") {
                return {
                    className: "chakra-button button--add-to-cart css-1h7ja34",
                    content: (
                        <>
                            One-time purchase ·
                            <span className={"chakra-text css-1ve822l"}>
                                $
                                99
                            </span>
                        </>
                    ),
                };
            }

            // The subscription CTA. ob-cta restyles it as the page's one loud
            // element; the one-time purchase button above keeps css-sce20v's
            // captured look, so the override is scoped to this class only.
            return {
                className: "chakra-button button--add-to-cart css-sce20v ob-cta",
                content: (
                    <>
                        Try now and save 50%
                        <ArrowRight />
                    </>
                ),
            };
        }
    

export default AddToCartButton
