import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_up_right_thick from './icons/Arrow_up_right_thick.tsx'
import Arrow_up_right_thick1 from './icons/Arrow_up_right_thick1.tsx'


// Component
function PreQualifiedLink() {
    return <a target={"_blank"} rel={"noopener noreferrer"} className={"chakra-link css-pzm2f2"}>
    	{`Get `}
    	<span className={"chakra-text css-1p7nqv1"}>
    		pre-qualified
    		<Arrow_up_right_thick1 />
    	</span>
    </a>
}


export default PreQualifiedLink
