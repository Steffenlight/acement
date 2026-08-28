import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Mitopure_logo_badge from './icons/Mitopure_logo_badge.tsx'
import Mitopure_logo_badge2 from './icons/Mitopure_logo_badge2.tsx'
import Mitopure_logo_badge3 from './icons/Mitopure_logo_badge3.tsx'
import OptionButton from './OptionButton.tsx'
import Superscript from './Superscript.tsx'
import StudyButton from './StudyButton.tsx'
import PublishedIn from './PublishedIn.tsx'
import RenewalCard from './RenewalCard.tsx'


// Component
function RenewalStudy() {
    return <div className={"chakra-stack css-1fmtkaj"}>
    	<div className={"chakra-stack css-2mgq3w"}>
    		<Mitopure_logo_badge2 />
    		<div className={"css-avumms"}>
    			<Mitopure_logo_badge3 />
    			<p className={"chakra-text css-fxbimn"}>
    				Gold-standard clinical trial
    			</p>
    		</div>
    		<div className={"css-9ulqhf"}>
    			<div className={"css-q939mg"}>
    				<div className={"css-u4d2c5"}>
    					
                <OptionButton label="Renewal" selected={true} />
            
    					
                <OptionButton label="Strength" />
            
    					
                <OptionButton label="Energy" />
            
    					
                <OptionButton label="Bioavailability" />
            
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"css-1eli5bn"} style={{opacity:"1"}}>
    		<div className={"chakra-stack css-5syiqg"}>
    			<div className={"chakra-stack css-ba2erm"}>
    				<div className={"css-1jdlkwt"}>
    					<p className={"chakra-text css-u3zvhu"}>
    						Mitochondrial renewal increases by +39% after 16 weeks over placebo
    						
                <Superscript symbol="†" styled={true} />
            
    					</p>
    				</div>
    				<div className={"chakra-stack css-8x7i4s"}>
    					
                <StudyButton label="See study details" />
            
    					<PublishedIn />
    				</div>
    			</div>
    			<div className={"css-171zfd9"}>
    				<div className={"css-1701odz"}>
    					<RenewalCard />
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
}


export default RenewalStudy
