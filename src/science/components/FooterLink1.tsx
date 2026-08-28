import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_up_right_thick_outline from './icons/Arrow_up_right_thick_outline.tsx'
import Arrow_up_right_thick_outline1 from './icons/Arrow_up_right_thick_outline1.tsx'
import FooterLink from './FooterLink.tsx'
import Footer from './Footer.tsx'


    
// Component

        function FooterLink1({
            label,
            linkId,
            external = false,
            rel
        }: {
            label: string;
            linkId: string;
            external?: boolean;
            rel?: string;
        }) {
            return (
                <a
                    {...(external ? { target: "_blank", rel } : {})}
                    className={"chakra-link css-srs6rl"}
                    id={linkId}
                >
                    <span className={"chakra-text css-t7iote"}>
                        <span className={"css-whh5e5"}>
                            {external ? (
                                <span className={"css-1lahpcg"}>
                                    {label}
                                    <Arrow_up_right_thick_outline1 />
                                </span>
                            ) : (
                                label
                            )}
                        </span>
                    </span>
                </a>
            )
        }
    

export default FooterLink1
