import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ThumbnailButton from './ThumbnailButton.tsx'


// Component
function Testimonial() {
    return <div className={"css-i3v4pc"}>
    	<div className={"chakra-stack css-1uaztwl"}>
    		
                <ThumbnailButton dataId="0" />
            
    		
                <ThumbnailButton dataId="1" />
            
    		
                <ThumbnailButton dataId="2" />
            
    		
                <ThumbnailButton dataId="3" />
            
    	</div>
    	<div className={"css-0"} style={{opacity:"1"}}>
    		<div className={"quote-content-1 css-0"}>
    			<p className={"chakra-text css-17ryu7"}>
    				“
    				This is a supplement I use myself everyday to be as healthy as I can, for as long as I can.
    				”
    			</p>
    			<h3 className={"chakra-text css-18ogj9d"}>
    				Dr. Mark Hyman, MD
    			</h3>
    			<p className={"chakra-text css-8x2kf2"}>
    				Functional Medicine Physician, 15x New York Times Bestselling Author
    			</p>
    		</div>
    	</div>
    </div>
}


export default Testimonial
