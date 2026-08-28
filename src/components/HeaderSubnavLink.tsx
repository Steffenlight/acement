import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_up_right_diagonal from './icons/Arrow_up_right_diagonal.tsx'
import HeaderSubnav from './HeaderSubnav.tsx'
import Testimonial from './Testimonial.tsx'


        type HeaderSubnavLinkData = {
            label: string;
            itemIndex: string;
            hasArrow: boolean;
            target?: string;
            rel?: string;
        };
    
// Component

        function HeaderSubnavLink({ dataId }: { dataId: string }) {
            const {
                label,
                itemIndex,
                hasArrow,
                target,
                rel,
            }: HeaderSubnavLinkData = getHeaderSubnavLinkData(dataId);

            return (
                <a
                    {...(target !== undefined ? { target } : {})}
                    {...(rel !== undefined ? { rel } : {})}
                    className={`chakra-link header_subnav-item-${itemIndex} css-srs6rl`}
                >
                    <span className={"chakra-text css-1umca9n"}>
                        <span className={"css-whh5e5"}>
                            {hasArrow ? (
                                <span className={"css-1lahpcg"}>
                                    {label}
                                    <Arrow_up_right_diagonal />
                                </span>
                            ) : (
                                label
                            )}
                        </span>
                    </span>
                </a>
            );
        }
    


        function getHeaderSubnavLinkData(id: string): HeaderSubnavLinkData {
            const stringId = String(id);
            const data: Record<string, HeaderSubnavLinkData> = {
                "0": { label: "Shop all", itemIndex: "1", hasArrow: false },
                "1": { label: "Science of Mitopure®", itemIndex: "1", hasArrow: false },
                "2": { label: "About Us", itemIndex: "1", hasArrow: false },
                "3": { label: "Samples", itemIndex: "2", hasArrow: false },
                "4": { label: "How Mitopure® works", itemIndex: "2", hasArrow: false },
                "5": { label: "Reviews", itemIndex: "2", hasArrow: false },
                "6": { label: "Accessories", itemIndex: "3", hasArrow: false },
                "7": { label: "Benefits", itemIndex: "3", hasArrow: false },
                "8": { label: "Testimonials", itemIndex: "3", hasArrow: false },
                "9": { label: "Topicals", itemIndex: "4", hasArrow: true },
                "10": { label: "Studies", itemIndex: "4", hasArrow: false },
                "11": { label: "Blog", itemIndex: "4", hasArrow: false },
                "12": { label: "Patents", itemIndex: "5", hasArrow: false },
                "13": { label: "FAQs", itemIndex: "5", hasArrow: false },
                "14": { label: "For Providers", itemIndex: "6", hasArrow: true, target: "_blank", rel: "noopener" },
                "15": { label: "Amazentis", itemIndex: "7", hasArrow: true, target: "_blank", rel: "noopener" },
            };

            return data[stringId] ?? {
                label: "",
                itemIndex: "",
                hasArrow: false,
            };
        }
    

export default HeaderSubnavLink
