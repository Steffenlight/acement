import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ComparisonTableHeader from './ComparisonTableHeader.tsx'
import FeatureComparisonRow from './FeatureComparisonRow.tsx'
import Header from './Header.tsx'


// Component
function ComparisonTable() {
    return <table className={"css-nkwiqj"}>
    	<thead className={"css-0"}>
    		<ComparisonTableHeader />
    	</thead>
    	<tbody className={"css-0"}>
    		
                <FeatureComparisonRow dataId="0" />
            
    		
                <FeatureComparisonRow dataId="1" />
            
    		
                <FeatureComparisonRow dataId="2" />
            
    		
                <FeatureComparisonRow dataId="3" />
            
    	</tbody>
    </table>
}


export default ComparisonTable
