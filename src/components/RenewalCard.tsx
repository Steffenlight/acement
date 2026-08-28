import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Right_facing_play_button from './icons/Right_facing_play_button.tsx'
import StudyButton from './StudyButton.tsx'
import RenewalThumbnail from './RenewalThumbnail.tsx'
import ScientistButton from './ScientistButton.tsx'


// Component
function RenewalCard() {
    return <div className={"chakra-linkbox css-1o37vtl"}>
    	<div className={"css-1jlqz3p"}>
    		<div className={"css-6jnziw"}>
    			<div className={"chakra-aspect-ratio css-14mwmvn"}>
    				<div className={"css-18shlo4"}>
    					<RenewalThumbnail />
    				</div>
    			</div>
    			<div className={"css-4ukn66"}>
    				<Right_facing_play_button />
    			</div>
    		</div>
    		<div className={"chakra-stack css-1fhpnbq"}>
    			<ScientistButton />
    			
                <StudyButton label="Watch now" />
            
    		</div>
    	</div>
    </div>
}


export default RenewalCard
