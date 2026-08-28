import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import EmptyContainer3 from './components/EmptyContainer3.tsx'
import EmptyContainer from './components/EmptyContainer.tsx'
import Footer from './components/Footer.tsx'
import SiteHeader from './components/SiteHeader.tsx'
import MitopurePage from './components/MitopurePage.tsx'
import SiteFooter from './components/SiteFooter.tsx'
import { AboutPage, BenefitsPage, ContactPage, FaqPage, ProductPage, SciencePage, ShopPage } from './components/AcementSite.tsx'
import { BlogPage, DetailedFaqPage, LegalPage, ReviewsPage, TestimonialsPage } from './components/AcementContentPages.tsx'
import { BlogIndexPage, BlogPostPage } from './components/AcementBlog.tsx'
import FullSciencePage from './components/FullSciencePage.tsx'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppContent() {
    const location = useLocation();

    return (
        <>
        <body className={"chakra-ui-light"}>
        <div id={"__next"}>
        <div className={"css-10aoefm"}>
        <div className={"header css-11kngrn"} id={"header"}>
        <div className={"chakra-collapse"} style={{overflow:"hidden", display:"block", opacity:"1", height:"auto"}}>
        <EmptyContainer3 />
        </div>
        <div className={"headroom-wrapper"} style={{height:"132px"}}>
        <div style={{position:"relative", top:"0", left:"0", right:"0", zIndex:"1", WebkitTransform:"translate3D(0,0,0)", MsTransform:"translate3D(0,0,0)", transform:"translate3D(0,0,0)", transition:"transform var(--header-transition)"}} className={"headroom headroom--unfixed"}>
        <div className={"css-0"}>
        <SiteHeader />
        </div>
        </div>
        </div>
        </div>
        <MitopurePage />
        <SiteFooter />
        </div>
        </div>
        <next-route-announcer>
        <p id={"__next-route-announcer__"} role={"alert"} style={{border:"0px", clip:"rect(0px,0px,0px,0px)", height:"1px", margin:"-1px", overflow:"hidden", padding:"0px", position:"absolute", top:"0px", width:"1px", whiteSpace:"nowrap", overflowWrap:"normal"}}></p>
        </next-route-announcer>
        <div className={"chakra-portal"}></div>
        <div className={"chakra-portal"}>
        <div role={"region"} id={"chakra-toast-manager-top"} style={{position:"fixed", zIndex:"var(--toast-z-index,5500)", pointerEvents:"none", display:"flex", flexDirection:"column", margin:"0px auto", top:"env(safe-area-inset-top,0px)", right:"env(safe-area-inset-right,0px)", left:"env(safe-area-inset-left,0px)"}}></div>
        <div role={"region"} id={"chakra-toast-manager-top-left"} style={{position:"fixed", zIndex:"var(--toast-z-index,5500)", pointerEvents:"none", display:"flex", flexDirection:"column", top:"env(safe-area-inset-top,0px)", left:"env(safe-area-inset-left,0px)"}}></div>
        <div role={"region"} id={"chakra-toast-manager-top-right"} style={{position:"fixed", zIndex:"var(--toast-z-index,5500)", pointerEvents:"none", display:"flex", flexDirection:"column", top:"env(safe-area-inset-top,0px)", right:"env(safe-area-inset-right,0px)"}}></div>
        <div role={"region"} id={"chakra-toast-manager-bottom-left"} style={{position:"fixed", zIndex:"var(--toast-z-index,5500)", pointerEvents:"none", display:"flex", flexDirection:"column", bottom:"env(safe-area-inset-bottom,0px)", left:"env(safe-area-inset-left,0px)"}}></div>
        <div role={"region"} id={"chakra-toast-manager-bottom"} style={{position:"fixed", zIndex:"var(--toast-z-index,5500)", pointerEvents:"none", display:"flex", flexDirection:"column", margin:"0px auto", bottom:"env(safe-area-inset-bottom,0px)", right:"env(safe-area-inset-right,0px)", left:"env(safe-area-inset-left,0px)"}}></div>
        <div role={"region"} id={"chakra-toast-manager-bottom-right"} style={{position:"fixed", zIndex:"var(--toast-z-index,5500)", pointerEvents:"none", display:"flex", flexDirection:"column", bottom:"env(safe-area-inset-bottom,0px)", right:"env(safe-area-inset-right,0px)"}}></div>
        </div>
        <div className={"chakra-portal"}></div>
        <span id={"recharts_measurement_span"} style={{position:"absolute", top:"-20000px", left:"0px", padding:"0px", margin:"0px", border:"none", whiteSpace:"pre", fontSize:"10px", letterSpacing:"0.9px"}}>
        0%
        </span>
        </body>
        </>
    );
}

function App() {
    const defaultRoute = "/";

    return (
        <Router>
            <Routes>
                {defaultRoute !== '/' && <Route path="/" element={<Navigate to={defaultRoute} replace />} />}
                <Route path="/" element={<AppContent />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/products/mitopure-softgels-vegan" element={<ProductPage />} />
                <Route path="/science" element={<FullSciencePage />} />
                <Route path="/benefits" element={<BenefitsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<DetailedFaqPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/blog" element={<BlogIndexPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/terms-and-conditions" element={<LegalPage />} />
                <Route path="/privacy-policy" element={<LegalPage privacy />} />
                <Route path="*" element={<AppContent />} />
            </Routes>
        </Router>
    );
}

export default App
