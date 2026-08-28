import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Verified_badge_checkmark from './icons/Verified_badge_checkmark.tsx'
import RatingButton from './RatingButton.tsx'
import Rating from './Rating.tsx'
import Price from './Price.tsx'


// Component
function ProductIntro() {
    return <div className={"product_intro css-13o7eu2"}>
    	<div className={"chakra-stack css-1b8ypgg"}>
    		<span className={"chakra-badge badge--product css-1xxihrv"}>
    			<span className={"css-1tqud6q"}>
    				Bestseller
    			</span>
    		</span>
    		<span className={"chakra-badge badge--product css-2lrs3d"}>
    			<span className={"css-1tqud6q"}>
    				New 20% Price Cut
    			</span>
    		</span>
    	</div>
    	<h1 className={"chakra-text css-ryxp7a"}>
    		Mitopure Softgels
    		<span className={"css-19mjbaf"}>
    			Urolithin A
    		</span>
    	</h1>
    	<div className={"css-pignbj"}>
    		<RatingButton />
    	</div>
    	<div className={"css-zw6yzs"}>
    		<span className={"chakra-badge css-1ui2mij"}>
    			<div className={"css-pugf83"}>
    				<Verified_badge_checkmark />
    			</div>
    			<span className={"css-1tqud6q"}>
    				30 day money-back guarantee
    			</span>
    		</span>
    	</div>
    	<div className={"css-1jdlkwt"}>
    		<p className={"chakra-text css-u3zvhu"}>
    			Improve your cellular health by taking Mitopure in its simplest form with two vegan softgels daily for the recommended dose of Urolithin A (500mg of Mitopure). Each sachet contains 60 softgels, which will last you a month.
    			<sup className={"css-10x2srw"}>
    				†
    			</sup>
    		</p>
    	</div>
    </div>
}


export default ProductIntro
