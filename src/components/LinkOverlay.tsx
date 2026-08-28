import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'

import { routeForLabel } from '../lib/navRoutes.ts'



// Component

        function LinkOverlay({ label }: { label: string }) {
            const text = <p className={"chakra-text css-18ogj9d"}>{label}</p>
            const to = routeForLabel(label)

            if (to) {
                return <Link to={to} className={"chakra-linkbox__overlay css-fd176x"}>{text}</Link>
            }

            return (
                <a className={"chakra-linkbox__overlay css-fd176x"} target={"_self"}>
                    {text}
                </a>
            )
        }
    

export default LinkOverlay
