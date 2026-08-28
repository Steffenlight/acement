import React from 'react'

// Captured Alloy Science page, merged into the Acement site as /science.
//
// The capture shipped as its own single-route app with its own header and
// footer. Those are dropped in favour of Acement's shared SiteHeader and
// SiteFooter so navigation stays consistent across the site.
//
// Its components and stylesheets live under src/science/ because 23 component
// names and 6 CSS classes collide with Acement's own with different content.
// The stylesheets are scoped to .science-page for the same reason.
//
// Only the captured page's own content sits inside .science-page. The shared
// header and footer stay outside it: the scoped rules carry higher specificity
// than Acement's global ones, so anything inside the wrapper gets restyled by
// the capture's CSS.
import './styles.ts'

import EmptyContainer3 from '../components/EmptyContainer3.tsx'
import SiteHeader from '../components/SiteHeader.tsx'
import SiteFooter from '../components/SiteFooter.tsx'

import MitopurePage from './components/MitopurePage.tsx'
import BodyPopover from './components/BodyPopover.tsx'

function FullSciencePage() {
    return (
        <div className={"chakra-ui-light"}>
            <div id={"__next"}>
                <div className={"css-10aoefm"}>

                    {/* Acement's shared header, kept outside the science scope */}
                    <div className={"header css-11kngrn"} id={"header"}>
                        <div className={"chakra-collapse"} style={{ overflow: "hidden", display: "block", opacity: "1", height: "auto" }}>
                            <EmptyContainer3 />
                        </div>
                        <div className={"headroom-wrapper"} style={{ height: "132px" }}>
                            <div style={{ position: "relative", top: "0", left: "0", right: "0", zIndex: 1, WebkitTransform: "translate3D(0,0,0)", transform: "translate3D(0,0,0)", transition: "transform var(--header-transition)" }} className={"headroom headroom--unfixed"}>
                                <div className={"css-0"}>
                                    <SiteHeader />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Captured Science page content */}
                    <div className={"science-page"}>
                        <MitopurePage />
                    </div>

                    {/* Acement's shared footer, also outside the science scope */}
                    <SiteFooter />
                </div>
            </div>

            {/* Citation popover portal used by the captured page's DOI links.
                The capture's tracking beacons and ad iframes are omitted. */}
            <div className={"science-page chakra-portal"}>
                <div className={"chakra-popover__popper css-kq73h1"} style={{ visibility: "hidden", position: "fixed", minWidth: "max-content", inset: "0px auto auto 0px" }}>
                    <BodyPopover dataId="0" />
                </div>
            </div>
        </div>
    )
}

export default FullSciencePage
