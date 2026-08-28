import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ComparisonCriteriaHeader from './ComparisonCriteriaHeader.tsx'
import ComparisonHeader from './ComparisonHeader.tsx'
import ComparisonTable from './ComparisonTable.tsx'


// Component
function ComparisonTableHeader() {
    return <tr className={"css-8qlua0"}>
    	<ComparisonCriteriaHeader />
    	
                <ComparisonHeader
                    headerClassName="css-1xlvs78"
                    imageId="18"
                    isBrand={true}
                />
            
    	
                <ComparisonHeader
                    headerClassName="css-d25f0m"
                    imageId="19"
                    label="NAD+"
                />
            
    	
                <ComparisonHeader
                    headerClassName="css-d25f0m"
                    imageId="20"
                    label="CoQ10"
                />
            
    	
                <ComparisonHeader
                    headerClassName="css-d25f0m"
                    imageId="19"
                    label="Creatine"
                />
            
    	
                <ComparisonHeader
                    headerClassName="css-d25f0m"
                    imageId="21"
                    label="Spermidine"
                />
            
    </tr>
}


export default ComparisonTableHeader
