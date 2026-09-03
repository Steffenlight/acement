import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


// Component

        function QualityStandards() {
            return (
                <div className={"chakra-stack css-1ntmcog"}>
                    <h2 className={"chakra-text css-syj3jv"}>
                        Rigorous quality standards
                    </h2>
                    <p className={"chakra-text css-wl3v5x"}>
                        Safety is crucial to us. We are a science company, so we take external certifications and approvals very seriously.
                    </p>
                    <div className={"css-0"}>
                        <div className={"chakra-stack css-1ndqeio"}>
                            <CertificationItem imageId="29" label="Clean Label Certified" />
                            <div className={"chakra-stack__divider css-7rkr9n"}>

                            </div>
                            <CertificationItem imageId="30" label="NSF Certified for Sport®" />
                            <div className={"chakra-stack__divider css-7rkr9n"}>

                            </div>
                            <CertificationItem imageId="31" label="FDA GRAS Favorable Review" />
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function CertificationItem({
            imageId,
            label
        }: {
            imageId: string;
            label: string;
        }) {
            return (
                <div className={"chakra-stack css-163gz7e"}>
                    <Img id={imageId} />
                    <p className={"chakra-text css-1cgd8x"}>
                        {label}
                    </p>
                </div>
            )
        }
    

export default QualityStandards
