import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import FooterLink from './FooterLink.tsx'


// Component
function Footer() {
    return <div className={"css-u4p24i"}>
    	<span className={"chakra-text css-bc5tep"}>
    		{`© `}
    		2026
    	</span>
    	<div className={"chakra-stack css-elrs6a"}>
    		
                <FooterLink label={"Terms & Conditions"} id="ga.footer.terms" />
            
    		
                <FooterLink label="Privacy Policy" id="ga.footer.privacy_policy" />
            
    	</div>
    </div>
}


export default Footer
