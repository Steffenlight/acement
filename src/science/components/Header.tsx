import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionButton from './ActionButton.tsx'
import IconButton from './IconButton.tsx'
import TimelineHomeLink from './TimelineHomeLink.tsx'
import CartButton from './CartButton.tsx'
import HeaderNavItem from './HeaderNavItem.tsx'
import HeaderNav from './HeaderNav.tsx'
import NavigationPanel from './NavigationPanel.tsx'


// Component

        function Header() {
            return (
                <header className={"css-1quqpr3"}>
                    <div className={"css-1l8efhj"}>
                        <div className={"css-1het91h"}>
                            <div className={"css-19kxgsd"}>
                                <div
                                    className={"css-1ffsi3h"}
                                    style={{
                                        borderRadius: "4px",
                                        transform: "none",
                                        transformOrigin: "50% 50% 0px"
                                    }}
                                >
                                </div>

                                <ActionButton
                                    label="Supplements"
                                    className="chakra-button css-1gcih8d"
                                />

                                <ActionButton
                                    label="Skincare"
                                    className="chakra-button css-eeylpg"
                                />
                            </div>
                        </div>

                        <IconButton variant="menu" />

                        <TimelineHomeLink />

                        <div className={"css-fcnkvq"}>
                            <div className={"css-dlkvq0"}>
                            </div>
                            <div className={"chakra-stack css-1w86ymg"}>
                                <IconButton variant="account" />

                                <IconButton variant="search" />

                                <CartButton count={2} />
                            </div>
                        </div>

                        <div className={"css-1be9aw6"}>
                            <div className={"css-5aziu9"}>
                                <HeaderSubnav label="Shop" dataId="0" />
                                <HeaderSubnav label="Science" dataId="1" />
                                <HeaderSubnav label="About" dataId="2" />

                                <HeaderNavItem dataId="16" />

                                <div
                                    className={"css-10f3xy2"}
                                    style={{ opacity: "0", display: "none" }}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )
        }
    

// Subcomponents

        function HeaderSubnav({
            label,
            dataId
        }: {
            label: string;
            dataId: string;
        }) {
            return (
                <div className={"header_subnav-trigger css-1v0cd8t"}>
                    <span className={"chakra-link css-1jqgv6h"}>
                        <span className={"chakra-text css-2vvooy"}>
                            <span className={"css-whh5e5"}>
                                {label}
                            </span>
                        </span>
                    </span>

                    <NavigationPanel dataId={dataId} />
                </div>
            )
        }
    

export default Header
