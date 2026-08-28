import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Google_pay_logo from './icons/Google_pay_logo.tsx'
import Apple_pay_logo from './icons/Apple_pay_logo.tsx'
import Mastercard_logo from './icons/Mastercard_logo.tsx'
import Visa_logo from './icons/Visa_logo.tsx'
import Trademark from './Trademark.tsx'
import HiddenContainer from './HiddenContainer.tsx'
import SocialLink from './SocialLink.tsx'
import ProductReferences from './ProductReferences.tsx'
import SocialLinks from './SocialLinks.tsx'
import Footer from './Footer.tsx'
import FooterNavigation from './FooterNavigation.tsx'


// Component
function SiteFooter() {
    return <footer className={"footer css-1oia3mk"}>
    	<div className={"css-oah547"}>
    		<div className={"css-7qblmy"}>
    			<div className={"css-6km5q3"}>
    				<div className={"footer_intro css-1ook4gn"}>
    					<h2 className={"chakra-text css-h5jrg8"}>
    						Life-Altering Science
    						<Trademark />
    					</h2>
    				</div>
    			</div>
    			<div className={"css-zyslhc"}>
    				<div className={"css-f9qfdi"}>
    					
            <FooterNavigation />
        
    					<HiddenContainer />
    				</div>
    			</div>
    			<div className={"css-17qsqt1"}>
    				<div className={"css-9a43yf"}>
    					<SocialLinks />
    				</div>
    			</div>
    			<div className={"css-1mh84es"}>
    				<div className={"css-f9qfdi"}>
    					<ProductReferences />
    				</div>
    			</div>
    			<div className={"css-14o4io9"}>
    				<div className={"css-1a6ja6u"}>
    					<Footer />
    				</div>
    				<div className={"chakra-stack css-1r461g2"}>
    					<Google_pay_logo />
    					<Apple_pay_logo />
    					<Mastercard_logo />
    					<Visa_logo />
    				</div>
    			</div>
    		</div>
    	</div>
    </footer>
}


export default SiteFooter
