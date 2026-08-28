import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CategoryButton from './CategoryButton.tsx'
import HeaderButton from './HeaderButton.tsx'
import TimelineHomeLink from './TimelineHomeLink.tsx'
import LongevityGameLink from './LongevityGameLink.tsx'
import HeaderMenu from './HeaderMenu.tsx'


// Component

        function SiteHeader() {
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

                                <CategoryButton
                                    label="Supplements"
                                    className="chakra-button css-1gcih8d"
                                />

                                <CategoryButton
                                    label="Skincare"
                                    className="chakra-button css-eeylpg"
                                />
                            </div>
                        </div>

                        <HeaderButton
                            variant="menu"
                            buttonClass="chakra-button css-1qdrp3y sf-hidden"
                        />

                        <TimelineHomeLink />

                        <div className={"css-fcnkvq"}>
                            <div className={"css-dlkvq0"}>
                            </div>
                            <div className={"chakra-stack css-1w86ymg"}>
                                <HeaderButton
                                    variant="account"
                                    buttonClass="chakra-button css-95phje"
                                />

                                <HeaderButton
                                    variant="search"
                                    buttonClass="chakra-button css-95phje"
                                />

                                <HeaderButton
                                    variant="cart"
                                    buttonClass="chakra-button css-dc77fb"
                                />
                            </div>
                        </div>

                        <div className={"css-1be9aw6"}>
                            <div className={"css-5aziu9"}>
                                <SubnavTrigger label="Shop" dataId="0" />
                                <SubnavTrigger label="Science" dataId="1" />
                                <SubnavTrigger label="About" dataId="2" />

                                <LongevityGameLink />

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

        function SubnavTrigger({
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

                    <HeaderMenu dataId={dataId} />
                </div>
            )
        }
    

export default SiteHeader
