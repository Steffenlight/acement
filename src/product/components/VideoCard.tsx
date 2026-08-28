import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import White_play_button from './icons/White_play_button.tsx'
import ActionButton from './ActionButton.tsx'
import VideoThumbnail from './VideoThumbnail.tsx'
import ScientistsButton from './ScientistsButton.tsx'


// Component
function VideoCard() {
    return <div className={"chakra-linkbox css-1o37vtl"}>
    	<div className={"css-1jlqz3p"}>
    		<div className={"css-6jnziw"}>
    			<div className={"chakra-aspect-ratio css-14mwmvn"}>
    				<div className={"css-18shlo4"}>
    					
                <VideoThumbnail poster="/images/e9f22183-4672-4edc-80f6-f0b619e6c27c.webp" title="Renewal thumbnail" className="css-1kqxm3r" />
            
    				</div>
    			</div>
    			<div className={"css-4ukn66"}>
    				<White_play_button />
    			</div>
    		</div>
    		<div className={"chakra-stack css-1fhpnbq"}>
    			<ScientistsButton />
    			
                <ActionButton label="Watch now" />
            
    		</div>
    	</div>
    </div>
}


export default VideoCard
