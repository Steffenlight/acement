import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionButton from './ActionButton.tsx'
import BenefitText from './BenefitText.tsx'
import DietFact from './DietFact.tsx'


// Component
function Bioavailability() {
    return <div className={"css-1ggde01"}>
    	<div className={"chakra-stack css-1k363yx"}>
    		<h3 className={"chakra-text css-1vawacw"}>
    			Bioavailability
    		</h3>
    		<div className={"chakra-stack css-1edqndu"}>
    			<div className={"chakra-stack css-cepcuc"}>
    				<div className={"chakra-stack css-enj3l8"}>
    					<p className={"chakra-text css-wee9jf"}>
    						<span>
    							6
    						</span>
    						<span style={{fontSize:"1em"}}>
    							x
    						</span>
    					</p>
    					
                <BenefitText text="Mitopure® unlocks 6x more Urolithin A than diet alone.**" />
            
    					
                <ActionButton label="See study details" className="chakra-button css-up0q37" />
            
    				</div>
    			</div>
    			<div className={"chakra-stack css-qhnuaw"}>
    				<div className={"css-6b3dkm"}>
    					
            <DietFact />
        
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
}


export default Bioavailability
