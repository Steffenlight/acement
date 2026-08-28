import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Thick_plus_sign from './icons/Thick_plus_sign.tsx'
import Thick_plus_sign1 from './icons/Thick_plus_sign1.tsx'
import StudiesButton from './StudiesButton.tsx'


// Component

        function ResearchFacts() {
            return (
                <ul role={"list"} className={"css-tevdxy"}>
                    <FactItem
                        className="fact-1 css-1pdl5pd"
                        value="18⁺"
                        label="Years of research"
                        description="In collaboration with the Swiss Federal Institute of Technology de Lausanne (EPFL)"
                    />
                    <FactItem
                        className="fact-2 css-1pdl5pd"
                        value="25"
                        label="Human clinical trials"
                        description="Completed and ongoing gold-standard clinical trials on nutrition and skincare involving over 900 participants"
                    />
                    <FactItem
                        className="chakra-linkbox fact-3 css-uthc7x"
                        value="500⁺"
                        label="Studies on Urolithin A"
                        description="Scientists have extensively explored Urolithin A’s effectiveness on health and patented the bioactive into Mitopure®"
                        studiesButton
                        showPlusSign
                    />
                    <FactItem
                        className="fact-4 css-1pdl5pd"
                        value="80"
                        label="Patents"
                        description="Our proprietary ingredient Mitopure® is protected under 80 patents"
                    />
                </ul>
            )
        }
    

// Subcomponents

        function FactItem({
            className,
            value,
            label,
            description,
            studiesButton = false,
            showPlusSign = false
        }: {
            className: string;
            value: string;
            label: string;
            description: string;
            studiesButton?: boolean;
            showPlusSign?: boolean;
        }) {
            return (
                <li className={className}>
                    <h2 className={"chakra-text css-1x2urt9"}>
                        {value}
                    </h2>
                    <div role={"separator"} className={"css-xhr5qh"}>

                    </div>
                    <div className={"css-gg4vpm"}>
                        <div className={"chakra-stack css-1knm577"}>
                            {studiesButton ? (
                                <StudiesButton label={label} />
                            ) : (
                                <p className={"chakra-text css-18ogj9d"}>
                                    {label}
                                </p>
                            )}
                            <div className={"css-0"}>
                                <p className={"chakra-text css-v5oyqe"}>
                                    {description}
                                </p>
                            </div>
                        </div>
                        {showPlusSign ? <Thick_plus_sign1 /> : null}
                    </div>
                </li>
            )
        }
    

export default ResearchFacts
