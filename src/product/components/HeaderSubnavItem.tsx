import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_up_right_thick from './icons/Arrow_up_right_thick.tsx'
import HeaderSubnav from './HeaderSubnav.tsx'
import Reviews from './Reviews.tsx'


        type HeaderSubnavItemData = {
            label: string;
            itemClass: string;
            showArrow: boolean;
            external: boolean;
        };
    
// Component

        function HeaderSubnavItem({ dataId }: { dataId: string }) {
            const { label, itemClass, showArrow, external }: HeaderSubnavItemData =
                getHeaderSubnavItemData(dataId);

            return (
                <a
                    {...(external ? { target: "_blank", rel: "noopener" } : {})}
                    className={`chakra-link ${itemClass} css-srs6rl`}
                >
                    <span className={"chakra-text css-1umca9n"}>
                        <span className={"css-whh5e5"}>
                            {showArrow ? (
                                <span className={"css-1lahpcg"}>
                                    {label}
                                    <Arrow_up_right_thick />
                                </span>
                            ) : (
                                label
                            )}
                        </span>
                    </span>
                </a>
            );
        }
    


        function getHeaderSubnavItemData(id: string): HeaderSubnavItemData {
            const stringId = String(id);
            const items: Record<string, HeaderSubnavItemData> = {
                "0": { label: "Shop all", itemClass: "header_subnav-item-1", showArrow: false, external: false },
                "1": { label: "Science of Mitopure®", itemClass: "header_subnav-item-1", showArrow: false, external: false },
                "2": { label: "About Us", itemClass: "header_subnav-item-1", showArrow: false, external: false },
                "3": { label: "Samples", itemClass: "header_subnav-item-2", showArrow: false, external: false },
                "4": { label: "How Mitopure® works", itemClass: "header_subnav-item-2", showArrow: false, external: false },
                "5": { label: "Reviews", itemClass: "header_subnav-item-2", showArrow: false, external: false },
                "6": { label: "Accessories", itemClass: "header_subnav-item-3", showArrow: false, external: false },
                "7": { label: "Benefits", itemClass: "header_subnav-item-3", showArrow: false, external: false },
                "8": { label: "Testimonials", itemClass: "header_subnav-item-3", showArrow: false, external: false },
                "9": { label: "Topicals", itemClass: "header_subnav-item-4", showArrow: true, external: false },
                "10": { label: "Studies", itemClass: "header_subnav-item-4", showArrow: false, external: false },
                "11": { label: "Blog", itemClass: "header_subnav-item-4", showArrow: false, external: false },
                "12": { label: "Patents", itemClass: "header_subnav-item-5", showArrow: false, external: false },
                "13": { label: "FAQs", itemClass: "header_subnav-item-5", showArrow: false, external: false },
                "14": { label: "For Providers", itemClass: "header_subnav-item-6", showArrow: true, external: true },
                "15": { label: "Amazentis", itemClass: "header_subnav-item-7", showArrow: true, external: true }
            };

            return items[stringId] ?? {
                label: "",
                itemClass: "header_subnav-item-1",
                showArrow: false,
                external: false
            };
        }
    

export default HeaderSubnavItem
