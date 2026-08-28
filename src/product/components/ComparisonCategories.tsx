import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CategoryButton from './CategoryButton.tsx'


// Component
function ComparisonCategories() {
    return <div className={"chakra-stack css-dqbeds"}>
    	<p className={"chakra-text css-15kg60q"}>
    		Compare us to other
    	</p>
    	<div className={"css-1yyxr0g"}>
    		<div className={"css-1ffsi3h"} style={{borderRadius:"4px"}}>
    
    		</div>
    		
                <CategoryButton label="Supplements" className="chakra-button css-1gcih8d" />
            
    		
                <CategoryButton label="Urolithin A" className="chakra-button css-eeylpg" />
            
    	</div>
    </div>
}


export default ComparisonCategories
