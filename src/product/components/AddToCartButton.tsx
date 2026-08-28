import React from 'react'
import type { JSX } from 'react/jsx-runtime'



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

            return {
                className: "chakra-button button--add-to-cart css-sce20v",
                content: <>Add to cart</>,
            };
        }
    

export default AddToCartButton
