import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionButton from './ActionButton.tsx'
import ComparisonChart from './ComparisonChart.tsx'
import BenefitText from './BenefitText.tsx'


// Component
function RenewalSection() {
    return <div className={"css-1ggde01"}>
    	<div className={"chakra-stack css-1k363yx"}>
    		<h3 className={"chakra-text css-1vawacw"}>
    			Renewal
    		</h3>
    		<div className={"chakra-stack css-b8fto0"}>
    			<div className={"chakra-stack css-cepcuc"}>
    				<div className={"css-0"}>
    					<p className={"chakra-text css-wee9jf"}>
    						<span>
    							+39
    						</span>
    						<span style={{fontSize:"0.62em"}}>
    							%
    						</span>
    					</p>
    					<ComparisonChart />
    				</div>
    			</div>
    			<div className={"chakra-stack css-1fd82v"}>
    				<div className={"chakra-stack css-enj3l8"}>
    					
                <BenefitText text="Increases mitochondrial renewal by +39% after 16 weeks over placebo.*" />
            
    					
                <ActionButton label="See study details" className="chakra-button css-up0q37" />
            
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
}


export default RenewalSection
