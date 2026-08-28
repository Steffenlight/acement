import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Solid_five_point_star from './icons/Solid_five_point_star.tsx'
import Solid_five_point_star1 from './icons/Solid_five_point_star1.tsx'
import Solid_five_point_star2 from './icons/Solid_five_point_star2.tsx'
import Solid_five_point_star13 from './icons/Solid_five_point_star13.tsx'
import Solid_five_point_star14 from './icons/Solid_five_point_star14.tsx'
import Solid_five_point_star15 from './icons/Solid_five_point_star15.tsx'
import Solid_five_point_star16 from './icons/Solid_five_point_star16.tsx'
import Solid_five_point_star17 from './icons/Solid_five_point_star17.tsx'
import Solid_five_point_star18 from './icons/Solid_five_point_star18.tsx'
import Solid_five_point_star19 from './icons/Solid_five_point_star19.tsx'
import Solid_five_point_star20 from './icons/Solid_five_point_star20.tsx'
import Solid_five_point_star21 from './icons/Solid_five_point_star21.tsx'
import Solid_five_point_star22 from './icons/Solid_five_point_star22.tsx'
import Solid_five_point_star23 from './icons/Solid_five_point_star23.tsx'
import Solid_five_point_star24 from './icons/Solid_five_point_star24.tsx'
import Solid_five_point_star25 from './icons/Solid_five_point_star25.tsx'
import Solid_five_point_star26 from './icons/Solid_five_point_star26.tsx'
import Solid_five_point_star27 from './icons/Solid_five_point_star27.tsx'
import CategoryButton from './CategoryButton.tsx'
import FilterMenuButton from './FilterMenuButton.tsx'
import Citation from './Citation.tsx'
import VerifiedBuyer from './VerifiedBuyer.tsx'
import ReviewDemographics from './ReviewDemographics.tsx'
import ShowMoreButton from './ShowMoreButton.tsx'
import VoteButton from './VoteButton.tsx'
import MenuList from './MenuList.tsx'
import VoteButtons from './VoteButtons.tsx'
import Pagination from './Pagination.tsx'


// Component

        function Reviews() {
            return (
                <div className={"css-1ngfd27"}>
                    <div className={"css-m5bhta"}>
                        <div className={"css-zfmrxr"}>
                            <FilterMenuButton label="All ratings" id="menu-button-_R_kplaiqmbqm6H1_" />
                            <div
                                style={{
                                    visibility: "hidden",
                                    position: "absolute",
                                    minWidth: "max-content",
                                    inset: "0 auto auto 0"
                                }}
                                className={"css-l1a2g3"}
                            >
                                <MenuList dataId="0" />
                            </div>
                            <FilterMenuButton label="All ages" id="menu-button-_R_splaiqmbqm6H1_" />
                            <div
                                style={{
                                    visibility: "hidden",
                                    position: "absolute",
                                    minWidth: "max-content",
                                    inset: "0 auto auto 0"
                                }}
                                className={"css-l1a2g3"}
                            >
                                <MenuList dataId="1" />
                            </div>
                            <CategoryButton label="With media" className="chakra-button css-mqitr" />
                        </div>
                    </div>
                    <div role={"separator"} className={"css-o5vfml"}></div>
                    <ReviewEntry
                        stars={
                            <>
                                <Solid_five_point_star13 />
                                <Solid_five_point_star14 />
                                <Solid_five_point_star15 />
                                <Solid_five_point_star16 />
                                <Solid_five_point_star17 />
                            </>
                        }
                        name="STERGIOS P."
                        demographicsDataId="0"
                        title="Encouraging initial observations of a patient with Parkinson's trying Mitopureg"
                        date="15 days ago"
                        body="I am a 64 year old, Greek radiologist, a long time patient myself with Parkinson's disease, the first symptom of anosmia dating back. to the year 1996. Mitochondrial dysfunction appears to lie at the root of my health problems-so far treatment and supplementation have been directed at treating the symptoms not the underlying cause. I have been receiving conventional treatment under supervision by neurologists since 2011 when the diagnosis was first established and i was enrolled in a clinical PD research study at Hermann Memorial Center, Houston TX. I have remained in a more or less satisfactory condition with my current PD treatment including Rasagiline, 1 mg 1X1, Madopar Levodopa with Benserazide 200+50mg 1X4 and some Mucuna Pruriens in powder form. I have managed to remain active in my private Radiology practice in Greece. My first impression after the first 2 month trial batch of Mitopure softgels 500 mg 1X1 is positive. I started cautiously with a 500mg daily dose taken in the morning with an empty stomach, without observing any noteworthy adverse reactions. I noticed a positive improvement in my mood, after the first week, as well as a hint of long forgotten smells. By week three, I noticed a degree of cognitive improvement, especially in recall of elusive memories. There also appears to be an anti-inflammatory effect in action, in my case calming a hyper reactive urinary bladder that made long distance driving difficult. It definitely improved my travelling range so to say. My appetite is improving my diet is Meditteranean with a touch of intermittent fasting Small things they may seem but the emotional impact is huge. So far as i can tell these are small, subtle but relevant steps in a promising direction so i intend to persevere. Best of luck to all involved Stergios P"
                        verified
                        showMore
                    />
                    <ReviewEntry
                        stars={
                            <>
                                <Solid_five_point_star18 />
                                <Solid_five_point_star19 />
                                <Solid_five_point_star20 />
                                <Solid_five_point_star21 />
                                <Solid_five_point_star22 />
                            </>
                        }
                        name="Cerise M."
                        demographicsDataId="1"
                        title="Foundational Supplement"
                        date="15 days ago"
                        body="I knew they were helping me recover from my strength training but then I started to give them to my husband and he started noticing having less muscle soreness and more energy in his workouts too. It is now a staple in our foundational supplements."
                        verified
                    />
                    <ReviewEntry
                        stars={
                            <>
                                <Solid_five_point_star23 />
                                <Solid_five_point_star24 />
                                <Solid_five_point_star25 />
                                <Solid_five_point_star26 />
                                <Solid_five_point_star27 />
                            </>
                        }
                        name="Bhanu T."
                        demographicsDataId="2"
                        title="Best quality"
                        date="16 days ago"
                        body="Best product in the market"
                    />
                    <div className={"css-1xg20uj"}>
                        <Pagination />
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function ReviewEntry({
            stars,
            name,
            demographicsDataId,
            title,
            date,
            body,
            verified = false,
            showMore = false
        }: {
            stars: JSX.Element;
            name: string;
            demographicsDataId: string;
            title: string;
            date: string;
            body: string;
            verified?: boolean;
            showMore?: boolean;
        }) {
            return (
                <div className={"css-1p7euut"}>
                    <blockquote className={"css-10l912s"}>
                        <div className={"chakra-stack css-fci8ch"}>
                            <div className={"chakra-stack css-erspa2"} role={"group"}>
                                {stars}
                            </div>
                            <div className={"css-0"}>
                                <Citation name={name} />
                                {verified ? <VerifiedBuyer /> : null}
                            </div>
                            <ReviewDemographics dataId={demographicsDataId} />
                        </div>
                    </blockquote>
                    <div className={"css-idi58q"}>
                        <div className={"css-1p9egwz"}>
                            <h3 className={"chakra-text css-1y0fk7o"}>
                                {title}
                            </h3>
                            <p className={"chakra-text css-1tn2im3"}>
                                {date}
                            </p>
                        </div>
                        <div className={"chakra-stack css-hsai4u"}>
                            <div className={"css-0"}>
                                <p className={"chakra-text css-n68aj4"}>
                                    {body}
                                </p>
                                {showMore ? <ShowMoreButton /> : null}
                            </div>
                            <div className={"chakra-stack css-1oq6nde"}>
                                <p className={"chakra-text css-fhd0dq"}>
                                    Was this helpful?
                                </p>
                                <VoteButtons />
                            </div>
                        </div>
                    </div>
                    <div role={"separator"} className={"css-1lat03a"}></div>
                </div>
            )
        }
    

export default Reviews
