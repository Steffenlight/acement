import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ComparisonCriteriaHeader from './ComparisonCriteriaHeader.tsx'
import ComparisonHeader from './ComparisonHeader.tsx'


/* Three columns instead of the captured five: ACE against TRT and the generic
 * booster shelf, which is the comparison someone shopping for testosterone
 * support is actually making. The captured table set Urolithin A against NAD+,
 * CoQ10, creatine and spermidine — a molecule we do not sell, against
 * categories nobody is weighing us up against. */
function ComparisonTableHeader() {
    return <tr className={"css-8qlua0"}>
    	<ComparisonCriteriaHeader />
    	
                <ComparisonHeader
                    headerClassName="css-1xlvs78"
                    isBrand={true}
                />
            
    	
                <ComparisonHeader
                    headerClassName="css-d25f0m"
                    label="TRT"
                />
            
    	
                <ComparisonHeader
                    headerClassName="css-d25f0m"
                    label="Generic boosters"
                />
            
    </tr>
}


export default ComparisonTableHeader
