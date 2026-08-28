import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import VoteButton from './VoteButton.tsx'


// Component
function VoteButtons() {
    return <div className={"chakra-stack css-1k4ko9t"}>
    	
                <VoteButton size="large" />
            
    	
                <VoteButton size="medium" />
            
    </div>
}


export default VoteButtons
