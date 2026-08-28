import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import EmptyContainer from './EmptyContainer.tsx'
import ActionButton from './ActionButton.tsx'
import DirectImage from './DirectImage.tsx'
import CellHealthSection from './CellHealthSection.tsx'
import HealthEffectsList from './HealthEffectsList.tsx'
import LinkButton from './LinkButton.tsx'
import EmptyContainer1 from './EmptyContainer1.tsx'
import LongevityHeading from './LongevityHeading.tsx'
import StoryReel from './StoryReel.tsx'
import StoryLink from './StoryLink.tsx'
import BodyRegions from './BodyRegions.tsx'
import RenewalSection from './RenewalSection.tsx'
import EnergyFeature from './EnergyFeature.tsx'
import Bioavailability from './Bioavailability.tsx'
import ComparisonControl from './ComparisonControl.tsx'
import ResearchFacts from './ResearchFacts.tsx'
import MitopurePromo from './MitopurePromo.tsx'
import ComparisonTable from './ComparisonTable.tsx'


// Component
function MitopurePage() {
    return <main className={"css-0"}>
    	<div className={"section--hero css-1quqpr3"}>
    		<div className={"css-hjkrkj"}>
    			<div className={"hero_content css-1vj8bwm"}>
    				<h1 className={"chakra-text css-sy2ynw"}>
    					{`Mitopure® is the `}
    					<span className={"css-1q9rmwj"}>
    						supplement
    						<span className={"css-v1jcie"}>
    							<DirectImage />
    						</span>
    					</span>
    					{` that changes how cells age.`}
    				</h1>
    			</div>
    		</div>
    	</div>
    	<div className={"css-utu5ip"}>
    		<div className={"pin-spacer"} style={{order:"0", placeSelf:"auto", gridArea:"auto", zIndex:"auto", float:"none", flexShrink:"1", display:"block", margin:"0px", inset:"auto", position:"relative", flexBasis:"auto", overflow:"visible", boxSizing:"border-box", width:"1470px", height:"4010px", padding:"0px 0px 3208px"}}>
    			<div className={"css-1mv8z3i"} style={{translate:"none", rotate:"none", scale:"none", inset:"0px auto auto 0px", margin:"0px", maxWidth:"1470px", width:"1470px", maxHeight:"802px", height:"802px", padding:"0px"}}>
    				<div className={"css-7gyd1g"}>
    					
            <CellHealthSection />
        
    				</div>
    			</div>
    		</div>
    		<section className={"css-3sgphn"} style={{clipPath:"circle(0vmax at 50% 50%)"}}>
    			<div className={"css-nt5kye"} style={{translate:"none", rotate:"none", scale:"none", transform:"scale(0.9,0.9)", opacity:"0.5"}}>
    				<div className={"css-16qefzr"}>
    					<div className={"css-1es186y"}>
    						<canvas width={"433"} height={"750"} style={{width:"100%", height:"100%", backgroundBlendMode:"normal", backgroundClip:"content-box", backgroundPosition:"center center", backgroundColor:"rgba(0,0,0,0)", backgroundImage:"url(\"/assets/data-asset-9d37df5a-07b2-433a-b06e-ecdf631c8261.webp\")", backgroundSize:"100% 100%", backgroundOrigin:"content-box", backgroundRepeat:"no-repeat"}}>
    
    						</canvas>
    					</div>
    					<div className={"css-90ask"}>
    						<p className={"chakra-text css-21haiw"} style={{translate:"none", rotate:"none", scale:"none", transform:"translate(0%,10%)", opacity:"0"}}>
    							Mitochondria are the batteries that make your cells work.
    						</p>
    						<p className={"chakra-text css-21haiw"} style={{translate:"none", rotate:"none", scale:"none", transform:"translate(0%,10%)", opacity:"0"}}>
    							These cellular batteries start wearing out in your 30s.
    						</p>
    					</div>
    					
            <HealthEffectsList />
        
    				</div>
    			</div>
    		</section>
    	</div>
    	<div className={"css-ms93xs"}>
    		<div className={"css-1i1lm9a"}>
    			<div className={"css-1l3swn7"}>
    				<div className={"css-15mcfy2"}>
    					<h2 className={"chakra-text css-glrwcu"}>
    						Weak mitochondria affect every system in your body.
    					</h2>
    				</div>
    				<div className={"css-1ca3vz1"}>
    					
            <BodyRegions />
        
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"css-1fr8jcp"}>
    		<div className={"css-y4i4t5"}>
    			<div className={"chakra-stack css-133rmja"}>
    				<p className={"chakra-text css-1flmji8"}>
    					A healthy aging breakthrough
    				</p>
    				<h2 className={"chakra-text css-1tdxz6j"}>
    					Mitopure® is clinically proven to revitalize mitochondria.
    				</h2>
    				
                <LinkButton className="chakra-button css-7ef41v" label="How Mitopure works" />
            
    			</div>
    			<div className={"chakra-stack css-1et5bc5"}>
    				<div className={"css-19v0ldf"}>
    					<RenewalSection />
    					<EnergyFeature />
    					<div className={"css-1w8wdkx"}>
    						<div className={"chakra-stack css-1k363yx"}>
    							<h3 className={"chakra-text css-1vawacw"}>
    								Strength
    							</h3>
    							<div className={"chakra-stack css-enj3l8"}>
    								<p className={"chakra-text css-wee9jf"}>
    									<span>
    										+12
    									</span>
    									<span style={{fontSize:"0.62em"}}>
    										%
    									</span>
    								</p>
    								<div className={"css-13s6qan"}>
    									<p className={"chakra-text css-3wdxt7"}>
    										Increases muscle strength by up to 12% after 16 weeks.*
    									</p>
    								</div>
    								
                <ActionButton label="See study details" className="chakra-button css-up0q37" />
            
    							</div>
    						</div>
    					</div>
    					<Bioavailability />
    				</div>
    				<p className={"chakra-text css-1m1uv8r"}>
    					*Our clinical study showed that sedentary, middle-aged adults with an average BMI of 29.52 increased hamstring muscle strength.
    				</p>
    			</div>
    		</div>
    		<div className={"css-1guqcbz sf-hidden"}>
    
    		</div>
    		<div className={"css-1d15uz2 sf-hidden"}>
    
    		</div>
    	</div>
    	<div className={"section--quote css-12cc8yw"}>
    		<div className={"css-nhvvhj"}>
    			<div className={"css-maweio"}>
    				<Img id="15" />
    			</div>
    			<blockquote className={"css-wzk03m"}>
    				<p className={"chakra-text css-1v3m2dw"}>
    					This is a supplement I use myself everyday to be as healthy as I can, for as long as I can.
    				</p>
    				<p className={"chakra-text css-ib9xd7"}>
    					Dr. Mark Hyman, MD
    				</p>
    				<p className={"chakra-text css-8x2kf2"}>
    					Functional Medicine Physician, 15x New York Times Bestselling Author
    				</p>
    			</blockquote>
    		</div>
    	</div>
    	<div className={"css-ms93xs"}>
    		<div className={"section--comparisonTable css-1c7d2b"}>
    			<div className={"css-1mh84es"}>
    				<div className={"css-q0xbld"}>
    					<ComparisonControl />
    				</div>
    			</div>
    			<div className={"css-gwfq4y"}>
    				<span className={"css-iyykce"}>
    					<EmptyContainer1 />
    				</span>
    				<div className={"css-1nten1k"}>
    					<LongevityHeading />
    				</div>
    				<div className={"css-19eihll"}>
    					<div className={"css-gv08nt"}>
    						<div className={"css-1j4l2ns"}>
    							<ComparisonTable />
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--text css-12cc8yw"}>
    		<div className={"css-kv24by"}>
    			<p className={"chakra-text css-h7pvvb"}>
    				Swiss Science, Made in U.S.A.
    			</p>
    			<div className={"css-b0exw3"}>
    				<div className={"css-1wydio7"}>
    					<p className={"chakra-text css-u3zvhu"}>
    						{`Our products meet the highest global standards, with quality and safety verified by NSF `}
    						<span className={"css-z198f9"}>
    							<span className={"css-1n20j8"}>
    								<Img id="20" />
    							</span>
    						</span>
    						. Our Urolithin A ingredient has been determined Generally Recognized as Safe (GRAS) by FDA.
    					</p>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--facts css-1dqk32g"}>
    		<div className={"css-qeh7q3"}>
    			
            <ResearchFacts />
        
    		</div>
    	</div>
    	<div className={"section--text-media-split css-w8jldm"}>
    		<div className={"css-1quqpr3"}>
    			<div className={"css-z20a12"}>
    				<div className={"css-ay5xa8"}>
    					<h2 className={"chakra-text css-5m29e6"}>
    						We aren’t just making supplements
    					</h2>
    					<p className={"chakra-text css-1bqvtd7"}>
    						We’re advancing the science of aging, translating cutting-edge biotechnological innovation into solutions for lifelong vitality. Timeline was born out of pioneering research at the École Polytechnique Fédérale de Lausanne (EPFL), where our experts continue to push the boundaries of human healthspan.
    					</p>
    				</div>
    				<div className={"css-1l7qtkm"}>
    					<StoryReel />
    				</div>
    				<div className={"css-n9xq4b"}>
    					<StoryLink />
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"css-ms93xs"}>
    		<div className={"section--banner css-1l9r55b"}>
    			<div className={"banner_media-desktop css-12f05a7"}>
    				<Img id="21" />
    			</div>
    			<div className={"css-xcf7pf"}>
    				<div className={"css-1weg7h6"}>
    					<MitopurePromo />
    				</div>
    			</div>
    			<div className={"banner_media-mobile css-adgo35 sf-hidden"}>
    
    			</div>
    		</div>
    	</div>
    </main>
}


export default MitopurePage
