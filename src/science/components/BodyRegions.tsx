import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import SeeMoreButton from './SeeMoreButton.tsx'


// Component

        function BodyRegions() {
            return (
                <div className={"css-1cw2bdu"}>
                    <Img id="13" />
                    <Region
                        className="css-o6wcit"
                        iconClassName="css-1e0cai2"
                        textClassName="chakra-text css-o1h23f"
                        label="Brain"
                    />
                    <Region
                        className="css-1xczkja"
                        iconClassName="css-4b45sl"
                        textClassName="chakra-text css-o1h23f"
                        label="Skin"
                    />
                    <Region
                        className="css-nfbi8n"
                        iconClassName="css-4b45sl"
                        textClassName="chakra-text css-o1h23f"
                        label="Immune system"
                    />
                    <Region
                        className="css-16pkfz7"
                        iconClassName="css-n6z4gu"
                        textClassName="chakra-text css-o1h23f"
                        label="Joints"
                    />
                    <Region
                        className="css-1fnqzjm"
                        iconClassName="css-1e0cai2"
                        textClassName="chakra-text css-ia7rnm"
                        label="Digestive system"
                    />
                    <Region
                        className="css-95srgr"
                        iconClassName="css-1e0cai2"
                        textClassName="chakra-text css-o1h23f"
                        label="Skeletal muscle"
                    />
                </div>
            )
        }
    

// Subcomponents

        function Region({
            className,
            iconClassName,
            textClassName,
            label
        }: {
            className: string;
            iconClassName: string;
            textClassName: string;
            label: string;
        }) {
            return (
                <div className={className}>
                    <div role={"group"} className={"css-oa4z49"}>
                        <SeeMoreButton iconClassName={iconClassName} />
                        <p className={textClassName}>
                            {label}
                        </p>
                    </div>
                </div>
            )
        }
    

export default BodyRegions
