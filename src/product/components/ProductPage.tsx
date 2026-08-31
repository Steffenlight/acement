import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import EmptyDiv from './EmptyDiv.tsx'
import BenefitsList from './BenefitsList.tsx'
import Separator from './Separator.tsx'
import ShopButton from './ShopButton.tsx'
import ReviewsMarquee from './ReviewsMarquee.tsx'
import LongevityHeading from './LongevityHeading.tsx'
import ComparisonChart from './ComparisonChart.tsx'
import SlideArrowButton from './SlideArrowButton.tsx'
import ImageCanvas from './ImageCanvas.tsx'
import QualityStandards from './QualityStandards.tsx'
import PressItems from './PressItems.tsx'
import PressItem from './PressItem.tsx'
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions.tsx'
import QuestionsContact from './QuestionsContact.tsx'
import QuestionsLink from './QuestionsLink.tsx'
import MediaGallery from './MediaGallery.tsx'
import ProductIntro from './ProductIntro.tsx'
import SubscriptionSelector from './SubscriptionSelector.tsx'
import ShippingBenefits from './ShippingBenefits.tsx'
import Accordion from './Accordion.tsx'
import SamplePackPurchase from './SamplePackPurchase.tsx'
import ComparisonCategories from './ComparisonCategories.tsx'
import ComparisonTable from './ComparisonTable.tsx'
import MitopureRenewalSection from './MitopureRenewalSection.tsx'
import CustomerReviews from './CustomerReviews.tsx'
import Reviews from './Reviews.tsx'
import ProductCarousel from './ProductCarousel.tsx'
import TransformationTimeline from './TransformationTimeline.tsx'
import VerifiedResults from './VerifiedResults.tsx'


// Component
function ProductPage() {
    return <main className={"css-zv7ju9"}>
    	<div className={"section--product css-b0x5q5"}>
    		<div className={"css-qeh7q3"}>
    			<div className={"css-1yk8gk5"}>
    				<div className={"css-0"}>
    					
            <MediaGallery />
        
    				</div>
    			</div>
    			<div className={"css-1o6z2gm"}>
    				<div className={"chakra-stack css-hsai4u"}>
    					<ProductIntro />
    					<div className={"css-1v0u1ta"}>
    						<div className={"css-90o0nh"}>
    							
            <BenefitsList />
        
    						</div>
    					</div>
    					
            <SubscriptionSelector />
        
    					<ShippingBenefits />
    					<p className={"chakra-text css-pc6jhy"}>
    						*Our clinical study showed that sedentary, middle-aged adults with an average BMI of 29.52 increased hamstring muscle strength.
    					</p>
    				</div>
    				<div role={"separator"} className={"css-o5vfml"}>
    
    				</div>
    				{/* The captured FrontRowMD clinician-review iframe was removed. It
    				    rendered nothing but still reserved 150px, which was the blank
    				    band above the accordion. It is also Timeline's widget showing
    				    Timeline's clinicians; per docs/10 our badge has to be earned
    				    post-launch, not borrowed. */}
    				<div className={"css-0"}>
    					
                <Accordion dataId="0" />
            
    				</div>
    				<div className={"css-1quqpr3"}>
    					<Separator />
    					
                <EmptyDiv className="css-1tmpo6k" />
            
    					<SamplePackPurchase />
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--reviews-overview-carousel css-97fe6u"}>
    		<div className={"css-hjkrkj"}>
    			<div className={"css-f9qfdi"}>
    				<div className={"css-1kaj2z2"}>
    					
            <ReviewsMarquee />
        
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
    					
                <EmptyDiv className="css-0" />
            
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
    	<div className={"css-ms93xs"}>
    		<div className={"section--benefits css-d6zq8"}>
    			<div className={"css-jlwfyy sf-hidden"}>
    
    			</div>
    			<div className={"css-13wb7ez"}>
    				<div className={"css-1dp6755"}>
    					<MitopureRenewalSection />
    				</div>
    				<div className={"css-y1qmy0"}>
    					<ComparisonChart />
    				</div>
    			</div>
    		</div>
    	</div>
    	<TransformationTimeline />
    	{/* Reads as the payoff to the timeline above: that section ends at day
    	    60+, this one shows four men at week 12. Placed here rather than
    	    beside the clinical chart because that band is already gray-100 and
    	    the two would merge into one slab; here it alternates white → grey →
    	    dark banner. */}
    	<VerifiedResults />
    	<div className={"css-ms93xs"}>
    		<div className={"section--banner css-1t993ry"}>
    			<div className={"banner_media-desktop css-12f05a7"}>
    				<div className={"chakra-aspect-ratio css-rv1dm7"}>
    					<ImageCanvas />
    				</div>
    			</div>
    			<div className={"css-1s3vjgt"}>
    				<div className={"css-1xwtsx5"}>
    					
            <QualityStandards />
        
    				</div>
    			</div>
    			<div className={"banner_media-mobile css-adgo35 sf-hidden"}>
    
    			</div>
    		</div>
    	</div>
    	<div className={"section--press-marquee css-umz1rd"}>
    		<div className={"css-170rc7p"}>
    			<div className={"rfm-marquee-container css-1fwbold"} style={{"--pause-on-hover":"paused", "--pause-on-click":"paused", "--width":"100%", "--transform":"none"}}>
    				<div className={"rfm-marquee"} style={{"--play":"running", "--direction":"normal", "--duration":"68.8s", "--delay":"0s", "--iteration-count":"infinite", "--min-width":"100%"}}>
    					
            <PressItems />
        
    				</div>
    				<div className={"rfm-marquee"} style={{"--play":"running", "--direction":"normal", "--duration":"68.8s", "--delay":"0s", "--iteration-count":"infinite", "--min-width":"100%"}}>
    					
                <PressItem dataId="1" />
            
    					
                <PressItem dataId="2" />
            
    					
                <PressItem dataId="3" />
            
    					
                <PressItem dataId="4" />
            
    					
                <PressItem dataId="5" />
            
    					
                <PressItem dataId="6" />
            
    					
                <PressItem dataId="7" />
            
    					
                <PressItem dataId="8" />
            
    					
                <PressItem dataId="9" />
            
    					
                <PressItem dataId="10" />
            
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--fr-testimonials css-1quqpr3"}>
	 	<iframe title={"frontrow-testimonials"} id={"frontrow-testimonials"} className={"iframe-frontrow-testimonials css-x5sxj9"} frameBorder={"0"} sandbox={"allow-same-origin allow-popups allow-top-navigation-by-user-activation"} style={{height:"1107px", display:"block"}} src="/frames/f5feeb0e-0045-402d-a4ad-973cedee8d84/index.html">
    
    		</iframe>
    	</div>
    	<div className={"section--product-reviews css-12cc8yw"}>
    		<div className={"css-hjkrkj"}>
    			<div className={"css-f9qfdi"}>
    				<div className={"css-qmra4l"}>
    					
            <CustomerReviews />
        
    					
            <Reviews />
        
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"css-ms93xs"}>
    		<div className={"section--faqs css-5xmus7"}>
    			<div className={"css-auem22"}>
    				<div className={"css-1bhkm4o"}>
    					<FrequentlyAskedQuestions />
    					<QuestionsContact />
    				</div>
    				<div className={"css-74hl3p"}>
    					
                <Accordion dataId="1" />
            
    					<QuestionsLink />
    				</div>
    			</div>
    		</div>
    	</div>
    	<div className={"section--product-carousel css-u53yi4"}>
    		<div className={"css-1jcgw14"}>
    			<div className={"carousel-intro css-1ctjhtp"}>
    				<div className={"chakra-stack css-1elhd5p"}>
    					<h3 className={"chakra-text css-knj6zc"}>
    						Discover our supplement range
    					</h3>
    				</div>
    				
                <ShopButton label="Shop all" className="chakra-button css-pkaqz4" />
            
    			</div>
    			<div className={"css-e91p8v"}>
    				<div className={"swiper swiper-initialized swiper-horizontal swiper-backface-hidden"}>
    					
            <ProductCarousel />
        
    					<span className={"swiper-notification sf-hidden"}>
    
    					</span>
    				</div>
    			</div>
    			<div className={"css-1f4ft59"}>
    				
                <SlideArrowButton dataId="2" />
            
    				
                <SlideArrowButton dataId="3" />
            
    			</div>
    			<div className={"css-1s51um2 sf-hidden"}>
    
    			</div>
    		</div>
    	</div>
    </main>
}


export default ProductPage
