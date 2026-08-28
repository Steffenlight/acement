import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'

import CategoryButton from './CategoryButton.tsx'
import IconButton from './IconButton.tsx'
import MobileMenu from './MobileMenu.tsx'
import TimelineHomeLink from './TimelineHomeLink.tsx'
import LongevityGameLink from './LongevityGameLink.tsx'
import NavigationPanel from './NavigationPanel.tsx'


// Component
function SiteHeader() {
    return <header className={"css-1quqpr3"}>
    	<div className={"css-1l8efhj"}>
    		<div className={"css-1het91h"}>
    			<div className={"chakra-stack css-760t2k"}>
    				<div className={"css-30sxij"} style={{width:"126px", transform:"none"}}>
    
    				</div>
    				
                <CategoryButton buttonClassName="chakra-button css-nluuds" label="Supplements" />
            
    				
                <CategoryButton buttonClassName="chakra-button css-5h5ps1" label="Skincare" />
            
    			</div>
    		</div>
    		
                <MobileMenu />
            
    		<TimelineHomeLink />
    		<div className={"css-fcnkvq"}>
    			<div className={"css-dlkvq0"}>
    
    			</div>
    			<div className={"chakra-stack css-1w86ymg"}>
    				
                <IconButton variant="standard" icon="account" />
            
    				
                <IconButton variant="standard" icon="search" />
            
    				
                <IconButton variant="cart" icon="cart" wrapped={true} />
            
    			</div>
    		</div>
    		<div className={"css-1be9aw6"}>
    			<div className={"css-5aziu9"}>
    				<div className={"header_subnav-trigger css-1v0cd8t"}>
    					<Link to={"/products/mitopure-softgels-vegan"} className={"chakra-link css-1jqgv6h"}>
    						<span className={"chakra-text css-2vvooy"}>
    							<span className={"css-whh5e5"}>
    								Shop
    							</span>
    						</span>
    					</Link>

                <NavigationPanel dataId="0" />

    				</div>
    				<div className={"header_subnav-trigger css-1v0cd8t"}>
    					<Link to={"/science"} className={"chakra-link css-1jqgv6h"}>
    						<span className={"chakra-text css-2vvooy"}>
    							<span className={"css-whh5e5"}>
    								Science
    							</span>
    						</span>
    					</Link>

                <NavigationPanel dataId="1" />

    				</div>
    				<div className={"header_subnav-trigger css-1v0cd8t"}>
    					<Link to={"/about"} className={"chakra-link css-1jqgv6h"}>
    						<span className={"chakra-text css-2vvooy"}>
    							<span className={"css-whh5e5"}>
    								About
    							</span>
    						</span>
    					</Link>

                <NavigationPanel dataId="2" />

    				</div>
    				<LongevityGameLink />
    				<div className={"css-10f3xy2"} style={{opacity:"0", display:"none"}}>
    
    				</div>
    			</div>
    		</div>
    	</div>
    </header>
}


export default SiteHeader
