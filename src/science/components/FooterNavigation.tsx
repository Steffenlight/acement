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
                            <FooterMobileHeading label="Shop" />
                            <FooterMobileHeading label="Science" />
                            <FooterMobileHeading label="About" />
                            <FooterMobileHeading label="Support" />
                            <FooterMobileHeading label="Newsletter" />
                        </div>
                        <div className={"css-nrianc"}>
                            <FooterColumn title="Shop">
                                <FooterLink1 label="Shop all" linkId="ga.desktop.footer.shop_all" />
                                <FooterLink1 label="Samples" linkId="ga.desktop.footer.shop_samples" />
                                <FooterLink1 label="Accessories" linkId="ga.desktop.footer.shop_bundles" />
                            </FooterColumn>
                            <FooterColumn title="Science">
                                <FooterLink1 label="Science of Mitopure®" linkId="ga.desktop.footer.science" />
                                <FooterLink1 label="How Mitopure® works" linkId="ga.desktop.footer.how_it_works" />
                                <FooterLink1 label="Benefits" linkId="ga.desktop.footer.benefits" />
                                <FooterLink1 label="Studies" linkId="ga.desktop.footer.studies" />
                                <FooterLink1 label="Patents" linkId="ga.desktop.footer.patents" />
                            </FooterColumn>
                            <FooterColumn title="About">
                                <FooterLink1 label="About Us" linkId="ga.desktop.footer.about" />
                                <FooterLink1 label="Reviews" linkId="ga.desktop.footer.reviews" />
                                <FooterLink1 label="Testimonials" linkId="ga.desktop.footer.testimonials" />
                                <FooterLink1 label="Blog" linkId="ga.desktop.footer.blog" />
                                <FooterLink1 label="FAQs" linkId="ga.desktop.footer.faq" />
                                <FooterLink1 label="For Providers" linkId="ga.desktop.footer.hcp" external={true} rel="noopener" />
                                <FooterLink1 label="Amazentis" linkId="ga.desktop.footer.amazentis" external={true} rel="noopener noreferrer" />
                            </FooterColumn>
                            <FooterColumn title="Support">
                                <FooterLink1 label="Help Center" linkId="ga.desktop.footer.help_center" />
                                <FooterLink1 label="care@timeline.com" linkId="ga.desktop.footer.email" />
                                <FooterLink1 label="+1-888-631-3359" linkId="ga.desktop.footer.phone" />
                                <FooterLink1 label="Rewards" linkId="ga.desktop.footer.longevity_club" />
                                <FooterLink1 label="Affiliate Program" linkId="ga.desktop.footer.affiliate_program" />
                                <FooterLink1 label="International Wholesale" linkId="ga.desktop.footer.international_wholesale" />
                            </FooterColumn>
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

        function FooterMobileHeading({ label }: { label: string }) {
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

        function FooterColumn({
            title,
            children
        }: {
            title: string;
            children: React.ReactNode;
        }) {
            return (
                <div className={"css-0"}>
                    <h3 className={"css-idkz9h"}>
                        {title}
                    </h3>
                    <div className={"chakra-stack css-3650js"}>
                        {children}
                    </div>
                </div>
            )
        }
    

export default FooterNavigation
