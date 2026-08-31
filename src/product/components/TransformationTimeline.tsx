import React, { useCallback, useEffect, useRef, useState } from 'react'

import Img from './Img.tsx'
import VideoThumbnail from './VideoThumbnail.tsx'
import AbsorptionTimeline from './AbsorptionTimeline.tsx'
import EmptyDiv from './EmptyDiv.tsx'
import Left_pointing_arrow from './icons/Left_pointing_arrow.tsx'
import Arrow_right_thin1 from './icons/Arrow_right_thin1.tsx'

type Milestone = {
    label: string
    heading: string
    body: string
    /** Still shown in the collapsed thumbnail. */
    imageId?: string
    imageSrc?: string
    imageAlt?: string
    /** Optional video layered over the still, revealed once the panel is expanded. */
    videoSrc?: string
    videoTitle?: string
}

// Placeholder copy and imagery — to be replaced with Ace Men assets.
const MILESTONES: Milestone[] = [
    {
        label: 'Hour 08',
        heading: 'ACE enters your bloodstream',
        body: 'The 8 ingredients work in synergy. Some raise total testosterone, others make sure your body can actually use it.',
        imageId: '23',
        videoSrc: '/videos/milestone-hour08.mp4',
        videoTitle: 'Blood cells'
    },
    {
        label: 'Day 02',
        heading: 'Production is activated',
        body: 'Shilajit, Tongkat Ali and Zinc support steroidogenesis, the process that turns cholesterol into testosterone.',
        imageId: '24'
    },
    {
        label: 'Day 07',
        heading: 'Stuck testosterone is freed up',
        body: 'Boron starts to lower SHBG, the protein that binds testosterone and keeps your body from using it.',
        imageId: '25'
    },
    {
        label: 'Day 14',
        heading: 'Less testosterone turns to estrogen',
        body: 'Fenugreek reduces aromatase, the enzyme that turns testosterone into estrogen.',
        imageId: '26'
    },
    {
        label: 'Day 30',
        heading: 'Brain signaling improves',
        body: 'Tongkat Ali supports the HPG axis, the loop your brain uses to tell your testes to make more testosterone.',
        imageId: '27'
    },
    {
        label: 'Day 60+',
        heading: 'Testosterone is optimized',
        body: 'Every ingredient works in synergy. Energy levels are different, changes in lean mass start to become visible.',
        imageId: '28'
    }
]

const ACTIVE_WIDTH = '23.6363%'
const COLLAPSED_WIDTH = '13.4621%'
// The panel width is what drives the whole animation: every thumbnail is square
// and bottom-aligned, so growing the column grows the image upward.
const WIDTH_TRANSITION = 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
// Outgoing copy clears fast; incoming copy waits for the column to finish widening.
const COPY_IN = 'opacity 0.3s ease 0.35s'
const COPY_OUT = 'opacity 0.2s ease 0s, visibility 0s linear 0.2s'

// Matches the 768px breakpoint the captured stylesheet uses for this section.
// Client-only app, so there is no SSR/hydration mismatch to worry about.
const MOBILE_QUERY = '(max-width: 767.98px)'

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
    )

    useEffect(() => {
        const mq = window.matchMedia(MOBILE_QUERY)
        const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
        setIsMobile(mq.matches)
        mq.addEventListener('change', onChange)
        return () => mq.removeEventListener('change', onChange)
    }, [])

    return isMobile
}

// Component
function TransformationTimeline() {
    const [active, setActive] = useState(0)
    // Only one variant is mounted at a time, so the Hour 08 video is never
    // fetched twice.
    const isMobile = useIsMobile()

    const atStart = active === 0
    const atEnd = active === MILESTONES.length - 1

    // --- mobile carousel -------------------------------------------------
    const trackRef = useRef<HTMLDivElement>(null)
    const cardRefs = useRef<Array<HTMLDivElement | null>>([])

    // Tapping a pill scrolls the track; scroll-padding puts the card on the gutter.
    const selectFromPill = useCallback((index: number) => {
        setActive(index)
        cardRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        })
    }, [])

    // Swiping the track drives the pills. Derived from scrollLeft/offsetLeft
    // rather than requestAnimationFrame: a throttle keyed on a pending frame
    // stops working for good if that frame never runs (a backgrounded tab never
    // fires rAF), and these are cheap reads off the already-computed layout.
    const handleTrackScroll = useCallback(() => {
        const track = trackRef.current
        if (!track) return
        // Card nearest the track's leading edge, matching scroll-snap: start.
        const position = track.scrollLeft
        let nearest = 0
        let best = Infinity
        cardRefs.current.forEach((card, i) => {
            if (!card) return
            const distance = Math.abs(card.offsetLeft - track.offsetLeft - position)
            if (distance < best) {
                best = distance
                nearest = i
            }
        })
        setActive((current) => (current === nearest ? current : nearest))
    }, [])

    return <div className={"section--mitopure-transformation css-w8jldm"}>
    	<div className={"css-1t817oh"}>
    		<div className={"css-1xei9ji"}>
    			<h2 className={"chakra-text css-1ctj6hy"}>
    				Increase, free, and optimize your testosterone
    			</h2>
    		</div>
    	</div>
    	{!isMobile && (
    	<div className={"css-ityywy"}>
    		<div className={"mitopure-transformation--desktop css-1c56x01"}>
    			<div className={"css-1wua4zq"}>
    				<div className={"css-w0rcfm"}>
    					<div className={"css-0"}>
    						<button
    							type={"button"}
    							aria-label={"Previous"}
    							disabled={atStart}
    							onClick={() => setActive((i) => Math.max(0, i - 1))}
    							className={atStart ? "chakra-button css-j246yl" : "chakra-button css-1et49st"}
    						>
    							<Left_pointing_arrow />
    						</button>
    						<button
    							type={"button"}
    							aria-label={"Next"}
    							disabled={atEnd}
    							onClick={() => setActive((i) => Math.min(MILESTONES.length - 1, i + 1))}
    							className={atEnd ? "chakra-button css-j246yl" : "chakra-button css-1et49st"}
    						>
    							<Arrow_right_thin1 />
    						</button>
    					</div>
    				</div>
    			</div>
    			<div className={"css-1thmk3v"}>
    				{MILESTONES.map((milestone, index) => {
    					const isActive = index === active

    					return (
    						<div
    							key={milestone.label}
    							className={"css-190kgxt"}
    							style={{ width: isActive ? ACTIVE_WIDTH : COLLAPSED_WIDTH, transition: WIDTH_TRANSITION }}
    						>
    							<div role={"group"} className={"css-ljanx"}>
    								<div
    									role={"button"}
    									tabIndex={0}
    									aria-pressed={isActive}
    									onClick={() => setActive(index)}
    									onKeyDown={(event) => {
    										if (event.key === 'Enter' || event.key === ' ') {
    											event.preventDefault()
    											setActive(index)
    										}
    									}}
    									className={"css-0"}
    									style={{ cursor: 'pointer' }}
    								>
    									<div className={isActive ? "css-fcfg1c" : "css-wwusfj"}>
    										{milestone.imageId ? (
    											<Img id={milestone.imageId} />
    										) : (
    											<img
    												alt={milestone.imageAlt ?? ""}
    												loading={"lazy"}
    												decoding={"async"}
    												src={milestone.imageSrc}
    												style={{ color: "transparent", width: "100%", height: "auto", aspectRatio: "1 / 1", objectFit: "cover" }}
    											></img>
    										)}
    										{milestone.videoSrc ? (
    											<div className={isActive ? "css-40c31x" : "css-1ppx8yb"}>
    												<div className={"css-pz30ya"}>
    													<VideoThumbnail
    														src={milestone.videoSrc}
    														title={milestone.videoTitle ?? milestone.label}
    														className="css-m5n7c"
    													/>
    												</div>
    											</div>
    										) : null}
    									</div>
    									<div role={"separator"} className={isActive ? "css-afw65w" : "css-jk2uea"}>

    									</div>
    									<p className={isActive ? "chakra-text css-5d7a9q" : "chakra-text css-1ew22t8"}>
    										{milestone.label}
    									</p>
    								</div>
    							</div>
    							<div
    								className={"css-0"}
    								aria-hidden={!isActive}
    								style={{
    									opacity: isActive ? 1 : 0,
    									visibility: isActive ? 'visible' : 'hidden',
    									pointerEvents: isActive ? 'auto' : 'none',
    									transition: isActive ? COPY_IN : COPY_OUT
    								}}
    							>
    								<div className={"css-0"}>
    									<h2 className={"chakra-text css-18ogj9d"}>
    										{milestone.heading}
    									</h2>
    									<div className={"css-whh5e5"}>
    										<p className={"chakra-text css-cxwm1o"}>
    											{milestone.body}
    										</p>
    									</div>
    								</div>
    							</div>
    						</div>
    					)
    				})}
    			</div>
    			{/* Ghost row: reserves the tallest possible height so the section never
    			    jumps as milestones are switched. Hidden via css-1uphhyw. */}
    			<div className={"css-1uphhyw"}>
    				<AbsorptionTimeline />
    				<EmptyDiv className="css-1cs1yjc" />
    				<EmptyDiv className="css-1cs1yjc" />
    				<EmptyDiv className="css-1cs1yjc" />
    				<EmptyDiv className="css-1cs1yjc" />
    				<EmptyDiv className="css-1cs1yjc" />
    			</div>
    		</div>
    	</div>
    	)}
    	{/* Mobile variant: milestone pills over a full-bleed snap carousel. The
    	    desktop grid above is hidden below 768px by css-ityywy, and this is
    	    hidden above it. Both share the same active index. */}
    	{isMobile && (
    	<div className={"tt-mobile"}>
    		<div className={"tt-pills"} role={"tablist"} aria-label={"Milestones"}>
    			{MILESTONES.map((milestone, index) => (
    				<button
    					key={milestone.label}
    					type={"button"}
    					role={"tab"}
    					aria-selected={index === active}
    					className={"tt-pill"}
    					onClick={() => selectFromPill(index)}
    				>
    					<span className={"tt-pill-label"}>
    						{/* Unit over value, so every pill is two lines regardless of
    						    font metrics — matching Timeline's uniform pill row. */}
    						<span className={"tt-pill-unit"}>{milestone.label.split(' ')[0]}</span>
    						<span className={"tt-pill-value"}>{milestone.label.split(' ').slice(1).join(' ')}</span>
    					</span>
    				</button>
    			))}
    		</div>
    		<div className={"tt-track"} ref={trackRef} onScroll={handleTrackScroll}>
    			{MILESTONES.map((milestone, index) => {
    				const isActive = index === active

    				return (
    					<div
    						key={milestone.label}
    						className={"tt-card"}
    						data-active={isActive ? 'true' : 'false'}
    						ref={(el) => { cardRefs.current[index] = el }}
    					>
    						<div className={"tt-media"}>
    							{milestone.imageId ? (
    								<Img id={milestone.imageId} />
    							) : (
    								<img
    									alt={milestone.imageAlt ?? ""}
    									loading={"lazy"}
    									decoding={"async"}
    									src={milestone.imageSrc}
    								></img>
    							)}
    							{milestone.videoSrc ? (
    								<div className={"tt-video"}>
    									<VideoThumbnail
    										src={milestone.videoSrc}
    										title={milestone.videoTitle ?? milestone.label}
    										className="css-m5n7c"
    									/>
    								</div>
    							) : null}
    						</div>
    						<div className={"tt-copy"}>
    							<h2 className={"tt-milestone"}>
    								{milestone.label}
    							</h2>
    							<h3 className={"chakra-text css-18ogj9d"}>
    								{milestone.heading}
    							</h3>
    							<div className={"css-0"}>
    								<p className={"chakra-text css-cxwm1o"}>
    									{milestone.body}
    								</p>
    							</div>
    						</div>
    					</div>
    				)
    			})}
    		</div>
    	</div>
    	)}
    </div>
}


export default TransformationTimeline
