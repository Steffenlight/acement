import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import ActionButton from './ActionButton.tsx'


// Component
function EnergyFeature() {
    return <div className={"css-zegf1s"}>
    	<div className={"chakra-stack css-1ewl2mn"}>
    		<h3 className={"chakra-text css-1vawacw"}>
    			Energy
    		</h3>
    		<div className={"css-gfg2ed"}>
    			<Img id="14" />
    		</div>
    		<div className={"chakra-stack css-enj3l8"}>
    			<div className={"css-18rhp79"}>
    				<p className={"chakra-text css-3wdxt7"}>
    					Induces a signature of improved mitochondria.*
    				</p>
    			</div>
    			
                <ActionButton label="See study details" className="chakra-button css-1hsyjfz" />
            
    		</div>
    	</div>
    </div>
}


export default EnergyFeature
