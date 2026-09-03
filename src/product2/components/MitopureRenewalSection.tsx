import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Mitopure_brand_logo from './icons/Mitopure_brand_logo.tsx'
import Mitopure_brand_logo2 from './icons/Mitopure_brand_logo2.tsx'
import Mitopure_brand_logo3 from './icons/Mitopure_brand_logo3.tsx'
import RenewalOption from './RenewalOption.tsx'
import Superscript from './Superscript.tsx'
import ActionButton from './ActionButton.tsx'
import PublishedIn from './PublishedIn.tsx'
import VideoCard from './VideoCard.tsx'


// Component
function MitopureRenewalSection() {
    return <div className={"chakra-stack css-1fmtkaj"}>
    	<div className={"chakra-stack css-2mgq3w"}>
    		<Mitopure_brand_logo2 />
    		<div className={"css-avumms"}>
    			<Mitopure_brand_logo3 />
    			<p className={"chakra-text css-fxbimn"}>
    				Gold-standard clinical trial
    			</p>
    		</div>
    		<div className={"css-9ulqhf"}>
    			<div className={"css-q939mg"}>
    				<div className={"css-u4d2c5"}>
    					
                <RenewalOption label="Renewal" selected={true} />
            
    					
                <RenewalOption label="Strength" selected={false} />
            
    					
                <RenewalOption label="Energy" selected={false} />
            
    					
                <RenewalOption label="Bioavailability" selected={false} />
            
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
    						
                <Superscript symbol="†" className="css-10x2srw" />
            
    					</p>
    				</div>
    				<div className={"chakra-stack css-8x7i4s"}>
    					
                <ActionButton label="See study details" />
            
    					<PublishedIn />
    				</div>
    			</div>
    			<div className={"css-171zfd9"}>
    				<div className={"css-1701odz"}>
    					<VideoCard />
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
}


export default MitopureRenewalSection
