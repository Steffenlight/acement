import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import FooterEmailInput from './FooterEmailInput.tsx'
import SignupButton from './SignupButton.tsx'
import Footer from './Footer.tsx'


// Component
function NewsletterSignup() {
    return <div className={"css-xuz742"}>
    	<form className={"newsletter-signup"}>
    		<div role={"group"} className={"chakra-form-control css-1kxonj9"}>
    			<div className={"chakra-input__group css-1piiz1w"} data-group={"true"}>
    				<FooterEmailInput />
    				<div className={"chakra-input__right-element css-12w2n0a"}>
    					<SignupButton />
    				</div>
    			</div>
    		</div>
    	</form>
    </div>
}


export default NewsletterSignup
