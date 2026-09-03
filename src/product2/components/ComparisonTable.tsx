import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ComparisonTableHeader from './ComparisonTableHeader.tsx'
import BenefitRow from './BenefitRow.tsx'


// Component
function ComparisonTable() {
    return <table className={"css-nkwiqj"}>
    	<thead className={"css-0"}>
    		<ComparisonTableHeader />
    	</thead>
    	<tbody className={"css-0"}>
    		
                <BenefitRow dataId="0" />
            
    		
                <BenefitRow dataId="1" />
            
    		
                <BenefitRow dataId="2" />
            
    		
                <BenefitRow dataId="3" />
            
    	</tbody>
    </table>
}


export default ComparisonTable
