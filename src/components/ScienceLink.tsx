import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Right_pointing_arrow from './icons/Right_pointing_arrow.tsx'
import Right_pointing_arrow1 from './icons/Right_pointing_arrow1.tsx'


// Component
function ScienceLink() {
    return <a className={"chakra-button css-1rh5i2h"}>
    	<span className={"children"}>
    		Discover our science
    	</span>
    	<span className={"chakra-button__icon css-1hzyiq5"}>
    		<Right_pointing_arrow1 />
    	</span>
    </a>
}


export default ScienceLink
