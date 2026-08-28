import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Right_pointing_arrow from './icons/Right_pointing_arrow.tsx'
import Vertical_horizontal_cross from './icons/Vertical_horizontal_cross.tsx'
import Right_pointing_arrow2 from './icons/Right_pointing_arrow2.tsx'
import CategoryButton from './CategoryButton.tsx'
import LinkOverlay from './LinkOverlay.tsx'


// Component

        function FactsList() {
            return (
                <ul role={"list"} className={"css-tevdxy"}>
                    <FactItem
                        className="fact-1 css-1pdl5pd"
                        value="18"
                        label={<p className={"chakra-text css-18ogj9d"}>Years of research</p>}
                        description="In collaboration with the Swiss Federal Institute of Technology de Lausanne (EPFL)"
                    />
                    <FactItem
                        className="fact-2 css-1pdl5pd"
                        value="25"
                        label={<p className={"chakra-text css-18ogj9d"}>Human clinical trials</p>}
                        description="Completed and ongoing gold-standard clinical trials involving over 2000 participants"
                    />
                    <FactItem
                        className="chakra-linkbox fact-3 css-uthc7x"
                        value="500⁺"
                        label={
                            <CategoryButton
                                buttonClassName="chakra-button css-1giyd6w"
                                label="Studies on Urolithin A"
                                paragraphLabel={true}
                            />
                        }
                        description="Scientists have extensively explored the effectiveness of Urolithin A on health"
                        trailing={<Vertical_horizontal_cross />}
                    />
                    <FactItem
                        className="chakra-linkbox fact-4 css-ofjvn9"
                        value="80"
                        label={<LinkOverlay label="Patents" />}
                        description="Our proprietary ingredient Mitopure® is protected under 80 patents"
                        trailing={<Right_pointing_arrow2 />}
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
            trailing
        }: {
            className: string;
            value: string;
            label: React.ReactNode;
            description: string;
            trailing?: React.ReactNode;
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
                            {label}
                            <div className={"css-0"}>
                                <p className={"chakra-text css-v5oyqe"}>
                                    {description}
                                </p>
                            </div>
                        </div>
                        {trailing}
                    </div>
                </li>
            )
        }
    

export default FactsList
