import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Mitopure_brand_logo from './icons/Mitopure_brand_logo.tsx'
import SkincareLink from './SkincareLink.tsx'


// Component
function SkincareArticle() {
    return <article className={"chakra-linkbox css-1998cvb"}>
    	<Img id="4" />
    	<div className={"chakra-stack css-1p4a2kc"}>
    		<Mitopure_brand_logo />
    		<h2 className={"chakra-text css-1xbld9"}>
    			Now available as Skincare
    		</h2>
    		<SkincareLink />
    	</div>
    </article>
}


export default SkincareArticle
