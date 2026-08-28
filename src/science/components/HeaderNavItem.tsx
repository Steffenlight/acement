import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_up_right_thick_outline from './icons/Arrow_up_right_thick_outline.tsx'
import HeaderNav from './HeaderNav.tsx'
import Header from './Header.tsx'


        type HeaderNavItemData = {
            className: string;
            textClassName: string;
            label: string;
            showArrow: boolean;
            target?: string;
            rel?: string;
            elementId?: string;
        };
    
// Component

        function HeaderNavItem({ dataId }: { dataId: string }) {
            const {
                className,
                textClassName,
                label,
                showArrow,
                target,
                rel,
                elementId
            }: HeaderNavItemData = getHeaderNavItemData(dataId);

            return (
                <a
                    {...(target !== undefined ? { target } : {})}
                    {...(rel !== undefined ? { rel } : {})}
                    className={className}
                    {...(elementId !== undefined ? { id: elementId } : {})}
                >
                    <span className={textClassName}>
                        <span className={"css-whh5e5"}>
                            {showArrow ? (
                                <span className={"css-1lahpcg"}>
                                    {label}
                                    <Arrow_up_right_thick_outline />
                                </span>
                            ) : (
                                label
                            )}
                        </span>
                    </span>
                </a>
            );
        }
    


        function getHeaderNavItemData(id: string): HeaderNavItemData {
            const stringId = String(id);

            const items: Record<string, HeaderNavItemData> = {
                "0": {
                    className: "chakra-link header_subnav-item-1 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Shop all",
                    showArrow: false
                },
                "1": {
                    className: "chakra-link header_subnav-item-1 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Science of Mitopure®",
                    showArrow: false
                },
                "2": {
                    className: "chakra-link header_subnav-item-1 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "About Us",
                    showArrow: false
                },
                "3": {
                    className: "chakra-link header_subnav-item-2 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Samples",
                    showArrow: false
                },
                "4": {
                    className: "chakra-link header_subnav-item-2 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "How Mitopure® works",
                    showArrow: false
                },
                "5": {
                    className: "chakra-link header_subnav-item-2 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Reviews",
                    showArrow: false
                },
                "6": {
                    className: "chakra-link header_subnav-item-3 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Accessories",
                    showArrow: false
                },
                "7": {
                    className: "chakra-link header_subnav-item-3 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Benefits",
                    showArrow: false
                },
                "8": {
                    className: "chakra-link header_subnav-item-3 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Testimonials",
                    showArrow: false
                },
                "9": {
                    className: "chakra-link header_subnav-item-4 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Topicals",
                    showArrow: true
                },
                "10": {
                    className: "chakra-link header_subnav-item-4 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Studies",
                    showArrow: false
                },
                "11": {
                    className: "chakra-link header_subnav-item-4 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Blog",
                    showArrow: false
                },
                "12": {
                    className: "chakra-link header_subnav-item-5 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Patents",
                    showArrow: false
                },
                "13": {
                    className: "chakra-link header_subnav-item-5 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "FAQs",
                    showArrow: false
                },
                "14": {
                    className: "chakra-link header_subnav-item-6 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "For Providers",
                    showArrow: true,
                    target: "_blank",
                    rel: "noopener"
                },
                "15": {
                    className: "chakra-link header_subnav-item-7 css-srs6rl",
                    textClassName: "chakra-text css-1umca9n",
                    label: "Amazentis",
                    showArrow: true,
                    target: "_blank",
                    rel: "noopener"
                },
                "16": {
                    className: "chakra-link header_nav-item css-fi22n0",
                    textClassName: "chakra-text css-t7iote",
                    label: "Longevity Game",
                    showArrow: false,
                    target: "_blank",
                    rel: "noopener",
                    elementId: "ga.desktop.header.longevity_game"
                }
            };

            return items[stringId] ?? items["0"];
        }
    

export default HeaderNavItem
