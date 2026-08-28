import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Filled_five_point_star from './icons/Filled_five_point_star.tsx'
import Filled_five_point_star1 from './icons/Filled_five_point_star1.tsx'
import Mitopure_logo_badge from './icons/Mitopure_logo_badge.tsx'
import Mitopure_logo_badge1 from './icons/Mitopure_logo_badge1.tsx'
import Filled_five_point_star10 from './icons/Filled_five_point_star10.tsx'
import Filled_five_point_star11 from './icons/Filled_five_point_star11.tsx'
import Filled_five_point_star12 from './icons/Filled_five_point_star12.tsx'
import Filled_five_point_star13 from './icons/Filled_five_point_star13.tsx'
import Filled_five_point_star14 from './icons/Filled_five_point_star14.tsx'
import RecommendedBadge from './RecommendedBadge.tsx'
import ActionLink from './ActionLink.tsx'
import ReviewsOverview from './ReviewsOverview.tsx'
import ReviewsMarquee from './ReviewsMarquee.tsx'
import ScienceLink from './ScienceLink.tsx'
import ChartPanel from './ChartPanel.tsx'
import EmptyContainer from './EmptyContainer.tsx'
import LongevityHeading from './LongevityHeading.tsx'
import CarouselButton from './CarouselButton.tsx'
import PressItems from './PressItems.tsx'
import PressItem from './PressItem.tsx'
import ReviewSlide from './ReviewSlide.tsx'
import ImageWrapper from './ImageWrapper.tsx'
import HeroPagination from './HeroPagination.tsx'
import FactsList from './FactsList.tsx'
import ComparisonCategories from './ComparisonCategories.tsx'
import CreatorSlide from './CreatorSlide.tsx'
import Testimonial from './Testimonial.tsx'
import HeroCarousel from './HeroCarousel.tsx'
import RenewalStudy from './RenewalStudy.tsx'
import ComparisonTable from './ComparisonTable.tsx'
import ProductCarousel from './ProductCarousel.tsx'


// Component
function MitopurePage() {
    return <main className={"css-0"}>
    	<div className={"section--hero css-0"}>
    		<div className={"css-1quqpr3"}>
    			<div className={"css-1t9ec4j"}>
    				<div className={"css-vhmi18"}>
    					
            <HeroPagination />
        
    				</div>
    				<div className={"css-ugkblx"}>
    					<RecommendedBadge />
    				</div>
    				<div className={"css-1ug0t4e"}>
    					
            <HeroCarousel />
        
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--reviews-overview-carousel css-97fe6u"}>
    		<div className={"css-hjkrkj"}>
    			<div className={"css-f9qfdi"}>
    				<div className={"css-1kaj2z2"}>
    					<ReviewsOverview />
    					
            <ReviewsMarquee />
        
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--facts css-1dqk32g"}>
    		<div className={"css-qeh7q3"}>
    			<div className={"css-idi58q"}>
    				<div className={"css-1du4m26 sf-hidden"}>
    
    				</div>
    				<div className={"css-2cr9mn"}>
    					<p className={"chakra-text css-1v3m2dw"}>
    						{`Time to give your cells new life with high-performance products powered by `}
    						<strong className={"css-idkz9h"}>
    							Mitopure
    						</strong>
    						<Mitopure_logo_badge1 />
    						, our powerful ingredient that unlocks a precise dose of the rare Urolithin A molecule and promotes healthy aging.
    					</p>
    				</div>
    				<ScienceLink />
    			</div>
    			
            <FactsList />
        
    			<div className={"css-1p3jt6j sf-hidden"}>
    
    			</div>
    		</div>
    	</div>
    	<div className={"css-ms93xs"}>
    		<div className={"section--benefits css-d6zq8"}>
    			<div className={"css-jlwfyy sf-hidden"}>
    
    			</div>
    			<div className={"css-13wb7ez"}>
    				<div className={"css-1dp6755"}>
    					<RenewalStudy />
    				</div>
    				<div className={"css-y1qmy0"}>
    					<ChartPanel />
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"css-ms93xs"}>
    		<div className={"section--comparisonTable css-1c7d2b"}>
    			<div className={"css-1mh84es"}>
    				<div className={"css-q0xbld"}>
    					<ComparisonCategories />
    				</div>
    			</div>
    			<div className={"css-gwfq4y"}>
    				<span className={"css-iyykce"}>
    					<EmptyContainer />
    				</span>
    				<div className={"css-1nten1k"}>
    					<LongevityHeading />
    				</div>
    				<div className={"css-15sdulb"}>
    					<div className={"css-gv08nt"}>
    						<div className={"css-1j4l2ns"}>
    							<ComparisonTable />
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--product-carousel css-1y1ikhe"}>
    		<div className={"css-1jcgw14"}>
    			<div className={"carousel-intro css-13wocr6"}>
    				<div className={"chakra-stack css-1elhd5p"}>
    					<h3 className={"chakra-text css-2hho36"}>
    						Products powered by Mitopure®
    					</h3>
    				</div>
    				
                <ActionLink label="Shop all" className="chakra-button css-pkaqz4" />
            
    			</div>
    			<div className={"css-1xzlkgw"}>
    				<div className={"swiper swiper-initialized swiper-horizontal swiper-backface-hidden"}>
    					
            <ProductCarousel />
        
    					<span className={"swiper-notification sf-hidden"}>
    
    					</span>
    				</div>
    			</div>
    			<div className={"css-1f4ft59"}>
    				
                <CarouselButton className="chakra-button css-acfg8x" disabled={true} isNext={false} />
            
    				
                <CarouselButton className="chakra-button css-dijeb2" disabled={true} isNext={true} />
            
    			</div>
    			<div className={"css-1s51um2 sf-hidden"}>
    
    			</div>
    		</div>
    	</div>
    	<div className={"section--press-marquee css-umz1rd"}>
    		<div className={"css-170rc7p"}>
    			<div className={"rfm-marquee-container css-1fwbold"} style={{"--pause-on-hover":"running", "--pause-on-click":"running", "--width":"100%", "--transform":"none"}}>
    				<div className={"rfm-marquee"} style={{"--play":"running", "--direction":"normal", "--duration":"41.284375s", "--delay":"0s", "--iteration-count":"infinite", "--min-width":"100%"}}>
    					
            <PressItems />
        
    				</div>
    				<div className={"rfm-marquee"} style={{"--play":"running", "--direction":"normal", "--duration":"41.284375s", "--delay":"0s", "--iteration-count":"infinite", "--min-width":"100%"}}>
    					
                <PressItem dataId="0" />
            
    					
                <PressItem dataId="1" />
            
    					
                <PressItem dataId="2" />
            
    					
                <PressItem dataId="3" />
            
    					
                <PressItem dataId="4" />
            
    					
                <PressItem dataId="5" />
            
    					
                <PressItem dataId="6" />
            
    					
                <PressItem dataId="7" />
            
    					
                <PressItem dataId="8" />
            
    					
                <PressItem dataId="9" />
            
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--wall-of-love css-g3jimj"}>
    		<div className={"css-g07ud2"}>
    			<div className={"chakra-stack css-erspa2"} role={"group"}>
    				<Filled_five_point_star10 />
    				<Filled_five_point_star11 />
    				<Filled_five_point_star12 />
    				<Filled_five_point_star13 />
    				<Filled_five_point_star14 />
    			</div>
    			<h2 className={"chakra-text css-peoe5i"}>
    				Loved by our community
    			</h2>
    		</div>
    		<div className={"css-1e3wj8i"}>
    			<div className={"swiper swiper-initialized swiper-horizontal"}>
    				<div className={"swiper-wrapper"} id={"swiper-wrapper-5249dd3e9906eb53"} style={{transitionDuration:"0ms", transitionDelay:"0ms", transform:"translate3d(-1743px,0px,0px)"}}>
    					
                <CreatorSlide dataId="0" />
            
    					
                <ReviewSlide dataId="0" />
            
    					
                <CreatorSlide dataId="1" />
            
    					
                <ReviewSlide dataId="1" />
            
    					
                <CreatorSlide dataId="2" />
            
    					
                <ReviewSlide dataId="2" slideState="prev" />
            
    					
                <CreatorSlide dataId="3" isActive={true} />
            
    					
                <ReviewSlide dataId="3" slideState="next" />
            
    					
                <CreatorSlide dataId="4" />
            
    					
                <ReviewSlide dataId="4" />
            
    					
                <CreatorSlide dataId="5" />
            
    					
                <ReviewSlide dataId="5" />
            
    					
                <CreatorSlide dataId="6" />
            
    					
                <ReviewSlide dataId="6" />
            
    				</div>
    				<span className={"swiper-notification sf-hidden"}>
    
    				</span>
    			</div>
    			<div className={"css-3qt0hh"}>
    				
                <CarouselButton className="chakra-button css-1xouf7q" disabled={false} isNext={false} />
            
    				
                <CarouselButton className="chakra-button css-zb3479" disabled={false} isNext={true} />
            
    			</div>
    		</div>
    		<div className={"css-6fyox4"}>
    			
                <ActionLink label="Read all reviews" className="chakra-button css-npln58" />
            
    		</div>
    	</div>
    	<div className={"section--quote-carousel css-w8jldm"}>
    		<div className={"css-1quqpr3"}>
    			<div className={"css-1w2db5k"}>
    				<h2 className={"chakra-text css-drtmwk"}>
    					Find out why the experts trust Urolithin A from Timeline
    				</h2>
    				<div className={"css-lq8hxu"}>
    					<ImageWrapper />
    				</div>
    				<div className={"css-gsy7sp"}>
    					<Testimonial />
    				</div>
    			</div>
    		</div>
    	</div>
    	<hr className={"chakra-divider css-eho3un"}>
    
    	</hr>
    </main>
}


export default MitopurePage
