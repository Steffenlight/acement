import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import VideoThumbnail from './VideoThumbnail.tsx'


// Component
function HourThumbnail() {
    return <div role={"button"} className={"css-0"}>
    	<div className={"css-fcfg1c"}>
    		<Img id="23" />
    		<div className={"css-40c31x"}>
    			<div style={{opacity:"1"}}>
    				<div className={"css-pz30ya"}>
    					
                <VideoThumbnail poster="/images/d31a64ec-0367-4b26-b79e-94e4fd59d6f2.webp" title="Blood cells" className="css-m5n7c" />
            
    				</div>
    			</div>
    		</div>
    	</div>
    	<div role={"separator"} className={"css-afw65w"}>
    
    	</div>
    	<p className={"chakra-text css-5d7a9q"}>
    		Hour 08
    	</p>
    </div>
}


export default HourThumbnail
