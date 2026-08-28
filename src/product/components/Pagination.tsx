import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import PaginationButton1 from './PaginationButton1.tsx'
import PaginationButton from './PaginationButton.tsx'


// Component
function Pagination() {
    return <nav className={"css-1hffqsu"}>
    	
                <PaginationButton1 variant="previous" />
            
    	<div className={"css-70qvj9"}>
    		
                <PaginationButton page={1} isActive={true} />
            
    		
                <PaginationButton page={2} />
            
    		
                <PaginationButton page={3} />
            
    		<p className={"chakra-text css-2hoiag"}>
    			...
    		</p>
    		
                <PaginationButton page={6} />
            
    	</div>
    	
                <PaginationButton1 variant="next" />
            
    </nav>
}


export default Pagination
