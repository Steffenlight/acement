import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ComparisonCriteriaHeader from './ComparisonCriteriaHeader.tsx'
import SupplementHeader from './SupplementHeader.tsx'


// Component
function ComparisonHeaderRow() {
    return <tr className={"css-8qlua0"}>
    	<ComparisonCriteriaHeader />
    	
                <SupplementHeader dataId="0" />
            
    	
                <SupplementHeader dataId="1" />
            
    	
                <SupplementHeader dataId="2" />
            
    	
                <SupplementHeader dataId="3" />
            
    	
                <SupplementHeader dataId="4" />
            
    </tr>
}


export default ComparisonHeaderRow
