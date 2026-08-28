import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_up_right_bold from './icons/Arrow_up_right_bold.tsx'


    
// Component

        function DoiLink({ label }: { label: string }) {
            return (
                <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    className={"chakra-link css-pzm2f2"}
                >
                    {label}
                    <Arrow_up_right_bold />
                </a>
            )
        }
    

export default DoiLink
