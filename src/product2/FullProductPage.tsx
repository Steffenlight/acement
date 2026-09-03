import React from 'react'

// Captured Alloy Softgels page, merged in as /products/mitopure-softgels-vegan.
//
// Same arrangement as the Science merge. The capture shipped as a standalone
// single-route app with its own header and footer; those are dropped for
// Acement's shared SiteHeader and SiteFooter so navigation stays consistent.
//
// Its 111 components and 374 stylesheets live under src/product/ because 31
// component names collide with Acement's own with different content, and 12
// CSS classes conflict outright, including css-1qdrp3y which drives the
// mobile menu button.
//
// Only the captured content sits inside .product-page-2. The shared header and
// footer stay outside it: the scoped rules carry higher specificity than
// Acement's global ones and would otherwise restyle them.
import './styles.ts'

import AnnouncementBar from '../components/AnnouncementBar.tsx'
import SiteHeader from '../components/SiteHeader.tsx'
import SiteFooter from '../components/SiteFooter.tsx'

import ProductPage from './components/ProductPage.tsx'

function FullProductPage() {
    return (
        <div className={"chakra-ui-light pp2-dark"}>
            <div id={"__next"}>
                <div className={"css-10aoefm"}>

                    {/* Acement's shared header, kept outside the product scope */}
                    <div className={"header css-11kngrn"} id={"header"}>
                        <div className={"chakra-collapse"} style={{ overflow: "hidden", display: "block", opacity: "1", height: "auto" }}>
                            <AnnouncementBar />
                        </div>
                        <div className={"headroom-wrapper"} style={{ height: "132px" }}>
                            <div style={{ position: "relative", top: "0", left: "0", right: "0", zIndex: 1, WebkitTransform: "translate3D(0,0,0)", transform: "translate3D(0,0,0)", transition: "transform var(--header-transition)" }} className={"headroom headroom--unfixed"}>
                                <div className={"css-0"}>
                                    <SiteHeader />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Captured product page content */}
                    <div className={"product-page-2"}>
                        <ProductPage />
                    </div>

                    {/* Acement's shared footer, also outside the product scope */}
                    <SiteFooter />
                </div>
            </div>
        </div>
    )
}

export default FullProductPage
