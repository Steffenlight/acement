import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Verified_badge_checkmark from './icons/Verified_badge_checkmark.tsx'
import Verified_badge_checkmark1 from './icons/Verified_badge_checkmark1.tsx'


// Component
function GuaranteeMessage() {
    return <div className={"css-1jtjglk"}>
    	<Verified_badge_checkmark1 />
    	<p className={"chakra-text css-1cr59sy"}>
    		90 day money-back guarantee
    		<span className={"chakra-text css-pc6jhy"}>
    			{`  ·  Free US Shipping`}
    			{`  ·  Pause or cancel at any time`}
    		</span>
    	</p>
    </div>
}


export default GuaranteeMessage
