import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import FooterLink1 from './FooterLink1.tsx'
import FooterLink from './FooterLink.tsx'
import NewsletterSignup from './NewsletterSignup.tsx'
import Footer from './Footer.tsx'


// Component

        function FooterNavigation() {
            return (
                <div className={"css-171zfd9"}>
                    <div className={"footer_nav css-0"}>
                        <div role={"presentation"} className={"css-1m3z1kz"}>
                            <MobileFooterHeading title="Shop" />
                            <MobileFooterHeading title="Science" />
                            <MobileFooterHeading title="About" />
                            <MobileFooterHeading title="Support" />
                            <MobileFooterHeading title="Newsletter" />
                        </div>
                        <div className={"css-nrianc"}>
                            <FooterLinkColumn
                                title="Shop"
                                dataIds={["0", "1", "2"]}
                            />
                            <FooterLinkColumn
                                title="Science"
                                dataIds={["3", "4", "5", "6", "7"]}
                            />
                            <FooterLinkColumn
                                title="About"
                                dataIds={["8", "9", "10", "11", "12", "13", "14"]}
                            />
                            <FooterLinkColumn
                                title="Support"
                                dataIds={["15", "16", "17", "18", "19", "20"]}
                            />
                            <div className={"css-0"}>
                                <h3 className={"css-idkz9h"}>
                                    Sign up for our newsletter
                                </h3>
                                <div className={"chakra-stack css-1i7tqzb"}>
                                    <h3 className={"chakra-text css-xj4vhs sf-hidden"}>
                                        Newsletter
                                    </h3>
                                    <NewsletterSignup />
                                    <p className={"chakra-text css-1vwamnb"}>
                                        By signing up, you agree to our
                                        <FooterLink label="privacy policy" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function MobileFooterHeading({ title }: { title: string }) {
            return (
                <div className={"chakra-stack css-nknghe"}>
                    <h3 className={"chakra-text css-1327hnk"}>
                        {title}
                    </h3>
                    <div role={"separator"} className={"css-o5vfml"}>
                    </div>
                </div>
            )
        }

        function FooterLinkColumn({
            title,
            dataIds
        }: {
            title: string;
            dataIds: string[];
        }) {
            return (
                <div className={"css-0"}>
                    <h3 className={"css-idkz9h"}>
                        {title}
                    </h3>
                    <div className={"chakra-stack css-3650js"}>
                        {dataIds.map((dataId) => (
                            <FooterLink1 key={dataId} dataId={dataId} />
                        ))}
                    </div>
                </div>
            )
        }
    

export default FooterNavigation
