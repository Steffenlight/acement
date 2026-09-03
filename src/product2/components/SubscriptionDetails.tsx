import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Curved_swap_arrows from './icons/Curved_swap_arrows.tsx'
import Filled_black_circle from './icons/Filled_black_circle.tsx'


// Component
function SubscriptionDetails() {
    return <div className={"chakra-stack css-484pv"}>
    	<div className={"css-1rbe0yd"}>
    		<Curved_swap_arrows />
    		<p className={"chakra-text css-fhd0dq"}>
    			4-month supply delivered every 4 months
    		</p>
    	</div>
    	<div className={"css-1rbe0yd"}>
    		<Filled_black_circle />
    		<p className={"chakra-text css-fhd0dq"}>
    			Pause or cancel at any time
    		</p>
    	</div>
    </div>
}


export default SubscriptionDetails
