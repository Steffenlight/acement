import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'

import Filled_five_point_star from './icons/Filled_five_point_star.tsx'
import Filled_five_point_star2 from './icons/Filled_five_point_star2.tsx'
import Filled_five_point_star3 from './icons/Filled_five_point_star3.tsx'
import Filled_five_point_star4 from './icons/Filled_five_point_star4.tsx'
import Filled_five_point_star5 from './icons/Filled_five_point_star5.tsx'
import Filled_five_point_star6 from './icons/Filled_five_point_star6.tsx'


// Component
function ReviewsOverview() {
    return <div className={"chakra-stack reviews-overview css-1bu7rmc"}>
    	<div className={"chakra-stack css-erspa2"} role={"group"}>
    		<Filled_five_point_star2 />
    		<Filled_five_point_star3 />
    		<Filled_five_point_star4 />
    		<Filled_five_point_star5 />
    		<Filled_five_point_star6 />
    	</div>
    	<Link to={"/products/mitopure-softgels-vegan"} className={"chakra-button css-59q361"}>
    		4.7
    		{` from`}
    		13473
    		{` reviews`}
    		{` · 95% recommend`}
    	</Link>
    </div>
}


export default ReviewsOverview
