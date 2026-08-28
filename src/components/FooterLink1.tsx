import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_up_right_diagonal from './icons/Arrow_up_right_diagonal.tsx'
import Arrow_up_right_diagonal1 from './icons/Arrow_up_right_diagonal1.tsx'
import FooterLink from './FooterLink.tsx'
import Testimonial from './Testimonial.tsx'
import Footer from './Footer.tsx'


        type FooterLinkData = {
            id: string;
            label: string;
            external: boolean;
            rel: string;
        };
    
// Component

        function FooterLink1({ dataId }: { dataId: string }) {
            const data: FooterLinkData = getFooterLinkData(dataId);

            return (
                <a
                    {...(data.external ? { target: "_blank", rel: data.rel } : {})}
                    className={"chakra-link css-srs6rl"}
                    id={data.id}
                >
                    <span className={"chakra-text css-t7iote"}>
                        <span className={"css-whh5e5"}>
                            {data.external ? (
                                <span className={"css-1lahpcg"}>
                                    {data.label}
                                    <Arrow_up_right_diagonal1 />
                                </span>
                            ) : (
                                data.label
                            )}
                        </span>
                    </span>
                </a>
            );
        }
    


        function getFooterLinkData(id: string): FooterLinkData {
            const dataId = String(id);

            const data: Record<string, FooterLinkData> = {
                "0": {
                    id: "ga.desktop.footer.shop_all",
                    label: "Shop all",
                    external: false,
                    rel: ""
                },
                "1": {
                    id: "ga.desktop.footer.shop_samples",
                    label: "Samples",
                    external: false,
                    rel: ""
                },
                "2": {
                    id: "ga.desktop.footer.shop_bundles",
                    label: "Accessories",
                    external: false,
                    rel: ""
                },
                "3": {
                    id: "ga.desktop.footer.science",
                    label: "Science of Mitopure®",
                    external: false,
                    rel: ""
                },
                "4": {
                    id: "ga.desktop.footer.how_it_works",
                    label: "How Mitopure® works",
                    external: false,
                    rel: ""
                },
                "5": {
                    id: "ga.desktop.footer.benefits",
                    label: "Benefits",
                    external: false,
                    rel: ""
                },
                "6": {
                    id: "ga.desktop.footer.studies",
                    label: "Studies",
                    external: false,
                    rel: ""
                },
                "7": {
                    id: "ga.desktop.footer.patents",
                    label: "Patents",
                    external: false,
                    rel: ""
                },
                "8": {
                    id: "ga.desktop.footer.about",
                    label: "About Us",
                    external: false,
                    rel: ""
                },
                "9": {
                    id: "ga.desktop.footer.reviews",
                    label: "Reviews",
                    external: false,
                    rel: ""
                },
                "10": {
                    id: "ga.desktop.footer.testimonials",
                    label: "Testimonials",
                    external: false,
                    rel: ""
                },
                "11": {
                    id: "ga.desktop.footer.blog",
                    label: "Blog",
                    external: false,
                    rel: ""
                },
                "12": {
                    id: "ga.desktop.footer.faq",
                    label: "FAQs",
                    external: false,
                    rel: ""
                },
                "13": {
                    id: "ga.desktop.footer.hcp",
                    label: "For Providers",
                    external: true,
                    rel: "noopener"
                },
                "14": {
                    id: "ga.desktop.footer.amazentis",
                    label: "Amazentis",
                    external: true,
                    rel: "noopener noreferrer"
                },
                "15": {
                    id: "ga.desktop.footer.help_center",
                    label: "Help Center",
                    external: false,
                    rel: ""
                },
                "16": {
                    id: "ga.desktop.footer.email",
                    label: "care@timeline.com",
                    external: false,
                    rel: ""
                },
                "17": {
                    id: "ga.desktop.footer.phone",
                    label: "+1-888-631-3359",
                    external: false,
                    rel: ""
                },
                "18": {
                    id: "ga.desktop.footer.longevity_club",
                    label: "Rewards",
                    external: false,
                    rel: ""
                },
                "19": {
                    id: "ga.desktop.footer.affiliate_program",
                    label: "Affiliate Program",
                    external: false,
                    rel: ""
                }
            };

            return data[dataId] ?? {
                id: "",
                label: "",
                external: false,
                rel: ""
            };
        }
    

export default FooterLink1
