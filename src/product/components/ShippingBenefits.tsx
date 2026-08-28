import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Black_circle_with_greyscale_background from './icons/Black_circle_with_greyscale_background.tsx'
import Truemed_logo from './icons/Truemed_logo.tsx'
import PreQualifiedLink from './PreQualifiedLink.tsx'


// Component
function ShippingBenefits() {
    return <ul className={"chakra-stack css-3vdebf"}>
    	<li className={"chakra-stack css-1y3kakk"}>
    		<Black_circle_with_greyscale_background />
    		<div className={"css-puz2r7"}>
    			<p className={"chakra-text css-u3zvhu"}>
    				{`Free US shipping above $25 · `}
    				<a className={"chakra-link css-pzm2f2"}>
    					International shipping
    				</a>
    			</p>
    		</div>
    	</li>
    	<li className={"chakra-stack css-1y3kakk"}>
    		<Black_circle_with_greyscale_background />
    		<p className={"chakra-text css-fhd0dq"}>
    			{`HSA/FSA eligible with `}
    			<span className={"css-idkz9h"}>
    				TrueMed
    			</span>
    			<Truemed_logo />
    			·
    			<PreQualifiedLink />
    		</p>
    	</li>
    </ul>
}


export default ShippingBenefits
