import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ComparisonCriteriaHeader from './ComparisonCriteriaHeader.tsx'
import ComparisonHeader from './ComparisonHeader.tsx'
import ComparisonTable from './ComparisonTable.tsx'
import Header from './Header.tsx'


// Component
function ComparisonTableHeader() {
    return <tr className={"css-8qlua0"}>
    	<ComparisonCriteriaHeader />
    	
                <ComparisonHeader dataId="0" />
            
    	
                <ComparisonHeader dataId="1" />
            
    	
                <ComparisonHeader dataId="2" />
            
    	
                <ComparisonHeader dataId="3" />
            
    	
                <ComparisonHeader dataId="4" />
            
    </tr>
}


export default ComparisonTableHeader
