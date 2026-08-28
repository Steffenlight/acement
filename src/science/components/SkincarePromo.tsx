import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Mitopure_logo_badge from './icons/Mitopure_logo_badge.tsx'
import SkincareLink from './SkincareLink.tsx'


// Component
function SkincarePromo() {
    return <article className={"chakra-linkbox css-1998cvb"}>
    	<Img id="4" />
    	<div className={"chakra-stack css-1p4a2kc"}>
    		<Mitopure_logo_badge />
    		<h2 className={"chakra-text css-1xbld9"}>
    			Now available as Skincare
    		</h2>
    		
            <SkincareLink label="Shop Skincare" />
        
    	</div>
    </article>
}


export default SkincarePromo
