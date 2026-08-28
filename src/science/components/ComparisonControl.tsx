import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionButton from './ActionButton.tsx'


// Component
function ComparisonControl() {
    return <div className={"chakra-stack css-dqbeds"}>
    	<p className={"chakra-text css-15kg60q"}>
    		Compare us to other
    	</p>
    	<div className={"css-1yyxr0g"}>
    		<div className={"css-1ffsi3h"} style={{borderRadius:"4px"}}>
    
    		</div>
    		
                <ActionButton label="Supplements" className="chakra-button css-1gcih8d" />
            
    		
                <ActionButton label="Urolithin A" className="chakra-button css-eeylpg" />
            
    	</div>
    </div>
}


export default ComparisonControl
