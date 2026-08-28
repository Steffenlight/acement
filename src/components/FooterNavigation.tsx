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
                            <MobileFooterHeading label="Shop" />
                            <MobileFooterHeading label="Science" />
                            <MobileFooterHeading label="About" />
                            <MobileFooterHeading label="Support" />
                            <MobileFooterHeading label="Newsletter" />
                        </div>
                        <div className={"css-nrianc"}>
                            <FooterSection
                                label="Shop"
                                linkIds={["0", "1", "2"]}
                            />
                            <FooterSection
                                label="Science"
                                linkIds={["3", "4", "5", "6", "7"]}
                            />
                            <FooterSection
                                label="About"
                                linkIds={["8", "9", "10", "11", "12", "13", "14"]}
                            />
                            <FooterSection
                                label="Support"
                                linkIds={["15", "16", "17", "18", "19"]}
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

        function MobileFooterHeading({ label }: { label: string }) {
            return (
                <div className={"chakra-stack css-nknghe"}>
                    <h3 className={"chakra-text css-1327hnk"}>
                        {label}
                    </h3>
                    <div role={"separator"} className={"css-o5vfml"}>

                    </div>
                </div>
            )
        }

        function FooterSection({
            label,
            linkIds
        }: {
            label: string;
            linkIds: string[];
        }) {
            return (
                <div className={"css-0"}>
                    <h3 className={"css-idkz9h"}>
                        {label}
                    </h3>
                    <div className={"chakra-stack css-3650js"}>
                        {linkIds.map((dataId) => (
                            <FooterLink1 key={dataId} dataId={dataId} />
                        ))}
                    </div>
                </div>
            )
        }
    

export default FooterNavigation
