import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ImageLink from './ImageLink.tsx'
import SamplePackLink from './SamplePackLink.tsx'
import ShopButton from './ShopButton.tsx'


// Component
function SamplePackPurchase() {
    return <div className={"css-1nccwi5"}>
    	<div className={"chakra-stack css-1rclyk"}>
    		<div className={"chakra-stack css-v9iupl"}>
    			<ImageLink />
    			<div className={"chakra-stack css-bejnph"}>
    				<div className={"chakra-stack css-1buq1sq"}>
    					<SamplePackLink />
    					<span className={"chakra-text css-1j6xvs7"}>
    						$
    						10
    					</span>
    				</div>
    				
                <ShopButton label="Buy sample" className="chakra-button css-1nvucn7" />
            
    			</div>
    		</div>
    	</div>
    </div>
}


export default SamplePackPurchase
