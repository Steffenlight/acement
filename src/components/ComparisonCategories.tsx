import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CategoryButton from './CategoryButton.tsx'


// Component
function ComparisonCategories() {
    return <div className={"chakra-stack css-dqbeds"}>
    	<p className={"chakra-text css-15kg60q"}>
    		Compare us to other
    	</p>
    	<div className={"chakra-stack css-760t2k"}>
    		<div className={"css-30sxij"} style={{width:"126px", transform:"none"}}>
    
    		</div>
    		
                <CategoryButton buttonClassName="chakra-button css-1w6qivb" label="Supplements" />
            
    		
                <CategoryButton buttonClassName="chakra-button css-1wkvp6r" label="Urolithin A" />
            
    	</div>
    </div>
}


export default ComparisonCategories
