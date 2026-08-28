import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_up_right_thick from './icons/Arrow_up_right_thick.tsx'
import Arrow_up_right_thick2 from './icons/Arrow_up_right_thick2.tsx'
import FooterLink from './FooterLink.tsx'
import Footer from './Footer.tsx'
import Reviews from './Reviews.tsx'


        type FooterLinkData = {
            elementId: string;
            label: string;
            external: boolean;
            rel: string;
        };
    
// Component

        function FooterLink1({ dataId }: { dataId: string }) {
            const { elementId, label, external, rel }: FooterLinkData = getFooterLinkData(dataId);

            return (
                <a
                    {...(external ? { target: "_blank", rel } : {})}
                    className={"chakra-link css-srs6rl"}
                    id={elementId}
                >
                    <span className={"chakra-text css-t7iote"}>
                        <span className={"css-whh5e5"}>
                            {external ? (
                                <span className={"css-1lahpcg"}>
                                    {label}
                                    <Arrow_up_right_thick2 />
                                </span>
                            ) : (
                                label
                            )}
                        </span>
                    </span>
                </a>
            );
        }
    


        function getFooterLinkData(id: string): FooterLinkData {
            const key = String(id);
            const data: Record<string, FooterLinkData> = {
                "0": {
                    elementId: "ga.desktop.footer.shop_all",
                    label: "Shop all",
                    external: false,
                    rel: ""
                },
                "1": {
                    elementId: "ga.desktop.footer.shop_samples",
                    label: "Samples",
                    external: false,
                    rel: ""
                },
                "2": {
                    elementId: "ga.desktop.footer.shop_bundles",
                    label: "Accessories",
                    external: false,
                    rel: ""
                },
                "3": {
                    elementId: "ga.desktop.footer.science",
                    label: "Science of Mitopure®",
                    external: false,
                    rel: ""
                },
                "4": {
                    elementId: "ga.desktop.footer.how_it_works",
                    label: "How Mitopure® works",
                    external: false,
                    rel: ""
                },
                "5": {
                    elementId: "ga.desktop.footer.benefits",
                    label: "Benefits",
                    external: false,
                    rel: ""
                },
                "6": {
                    elementId: "ga.desktop.footer.studies",
                    label: "Studies",
                    external: false,
                    rel: ""
                },
                "7": {
                    elementId: "ga.desktop.footer.patents",
                    label: "Patents",
                    external: false,
                    rel: ""
                },
                "8": {
                    elementId: "ga.desktop.footer.about",
                    label: "About Us",
                    external: false,
                    rel: ""
                },
                "9": {
                    elementId: "ga.desktop.footer.reviews",
                    label: "Reviews",
                    external: false,
                    rel: ""
                },
                "10": {
                    elementId: "ga.desktop.footer.testimonials",
                    label: "Testimonials",
                    external: false,
                    rel: ""
                },
                "11": {
                    elementId: "ga.desktop.footer.blog",
                    label: "Blog",
                    external: false,
                    rel: ""
                },
                "12": {
                    elementId: "ga.desktop.footer.faq",
                    label: "FAQs",
                    external: false,
                    rel: ""
                },
                "13": {
                    elementId: "ga.desktop.footer.hcp",
                    label: "For Providers",
                    external: true,
                    rel: "noopener"
                },
                "14": {
                    elementId: "ga.desktop.footer.amazentis",
                    label: "Amazentis",
                    external: true,
                    rel: "noopener noreferrer"
                },
                "15": {
                    elementId: "ga.desktop.footer.help_center",
                    label: "Help Center",
                    external: false,
                    rel: ""
                },
                "16": {
                    elementId: "ga.desktop.footer.email",
                    label: "care@timeline.com",
                    external: false,
                    rel: ""
                },
                "17": {
                    elementId: "ga.desktop.footer.phone",
                    label: "+1-888-631-3359",
                    external: false,
                    rel: ""
                },
                "18": {
                    elementId: "ga.desktop.footer.longevity_club",
                    label: "Rewards",
                    external: false,
                    rel: ""
                },
                "19": {
                    elementId: "ga.desktop.footer.affiliate_program",
                    label: "Affiliate Program",
                    external: false,
                    rel: ""
                },
                "20": {
                    elementId: "ga.desktop.footer.international_wholesale",
                    label: "International Wholesale",
                    external: false,
                    rel: ""
                }
            };

            return data[key] ?? data["0"];
        }
    

export default FooterLink1
