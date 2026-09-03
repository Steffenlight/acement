import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Solid_five_point_star from './icons/Solid_five_point_star.tsx'
import Solid_five_point_star2 from './icons/Solid_five_point_star2.tsx'
import Solid_five_point_star3 from './icons/Solid_five_point_star3.tsx'
import Solid_five_point_star4 from './icons/Solid_five_point_star4.tsx'
import Solid_five_point_star5 from './icons/Solid_five_point_star5.tsx'
import Solid_five_point_star6 from './icons/Solid_five_point_star6.tsx'
import Rating from './Rating.tsx'


// Component
function RatingButton() {
    return <button type={"button"} className={"chakra-button css-19m4crv"}>
    	<span className={"children"}>
    		<div className={"css-70qvj9"}>
    			<div className={"chakra-stack css-erspa2"} role={"group"}>
    				<Solid_five_point_star2 />
    				<Solid_five_point_star3 />
    				<Solid_five_point_star4 />
    				<Solid_five_point_star5 />
    				<Solid_five_point_star6 />
    			</div>
    			<p className={"chakra-text css-1l1u23"}>
    				4.5 (4541)
    				{` · 95% recommend`}
    			</p>
    		</div>
    	</span>
    </button>
}


export default RatingButton
