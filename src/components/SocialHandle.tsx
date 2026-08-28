import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function SocialHandle({ handle }: { handle: string }) {
            return (
                <a target={"_blank"} rel={"noopener noreferrer"} className={"chakra-link css-1unxbkg"}>
                    <p className={"chakra-text css-fhd0dq"}>
                        {handle}
                    </p>
                </a>
            )
        }
    

export default SocialHandle
