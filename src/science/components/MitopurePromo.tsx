import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Mitopure_logo_badge from './icons/Mitopure_logo_badge.tsx'
import Mitopure_logo_badge3 from './icons/Mitopure_logo_badge3.tsx'
import LinkButton from './LinkButton.tsx'


// Component
function MitopurePromo() {
    return <div className={"chakra-stack css-16nkz8l"}>
    	<div className={"chakra-stack powered-by-mitopure css-1n9n0g6"}>
    		<h2 className={"chakra-text css-zdfcm7"}>
    			Powered by
    		</h2>
    		<Mitopure_logo_badge3 />
    	</div>
    	<h3 className={"chakra-text css-17rnpvt"}>
    		<span className={"chakra-text css-1hl3kow"}>
    			Change how your cells age.
    		</span>
    		<span className={"chakra-text css-12du0zj"}>
    			Explore our science-backed longevity solutions.
    		</span>
    	</h3>
    	
                <LinkButton className="chakra-button css-1bib11y" label="Shop Supplements" />
            
    </div>
}


export default MitopurePromo
