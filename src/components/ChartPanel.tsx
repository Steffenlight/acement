import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Mitopure_logo_badge from './icons/Mitopure_logo_badge.tsx'
import Bar_chart_with_increase_annotation from './icons/Bar_chart_with_increase_annotation.tsx'
import Mitopure_logo_badge4 from './icons/Mitopure_logo_badge4.tsx'


// Component
function ChartPanel() {
    return <div className={"css-iyykz4"} style={{opacity:"1"}}>
    	<div className={"css-k2vqtc"}>
    		<div className={"recharts-responsive-container"} style={{width:"100%", minWidth:"0px"}}>
    			<div style={{width:"0px", overflowX:"visible"}}>
    				<div className={"recharts-wrapper"} style={{position:"relative", cursor:"default", width:"540px", height:"450px", overflow:"visible"}}>
    					<Bar_chart_with_increase_annotation />
    				</div>
    			</div>
    		</div>
    		<div className={"css-1y3p8es"}>
    			<div className={"css-ztz1mp"}>
    				<div className={"css-1kp4ll0"}>
    
    				</div>
    				<p className={"chakra-text css-1327hnk"}>
    					Placebo
    				</p>
    			</div>
    			<div className={"css-ztz1mp"}>
    				<Mitopure_logo_badge4 />
    				<p className={"chakra-text css-1327hnk"}>
    					Supplements
    				</p>
    			</div>
    		</div>
    	</div>
    	<div className={"css-1u87v4s sf-hidden"}>
    
    	</div>
    </div>
}


export default ChartPanel
