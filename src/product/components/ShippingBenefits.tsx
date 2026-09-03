import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Black_circle_with_greyscale_background from './icons/Black_circle_with_greyscale_background.tsx'


/* The three buy-box reassurances.
 *
 * Replaces the captured store's shipping-threshold and HSA/FSA rows, which
 * belonged to a different offer: "free above $25" is meaningless when there is
 * one product at $59, and TrueMed is an integration we do not have.
 *
 * Copy comes from a direct-response reference that set these as three icon
 * columns on black. Kept as this page's existing checkmark rows instead, so
 * they read as part of the buy box rather than as a banner.
 *
 * The refill line is doing quiet work beyond reassurance: it is the only
 * place on the page that says $59 is a recurring price rather than a one-off.
 */
const BENEFITS = [
    '$59 Refill Ships in 24 Days',
    'Try Risk-Free for 90 Days',
    'Fast & Free Shipping with 1st Order',
]


// Component
function ShippingBenefits() {
    return (
        <ul className={"chakra-stack css-3vdebf"}>
            {BENEFITS.map(text => (
                // The css-puz2r7 wrapper is load-bearing, not markup noise: the
                // row's font-size, weight, line-height and tracking are all set
                // by `.css-puz2r7 > p.chakra-text`, a child selector. Drop the
                // div and the text falls back to the inherited 16px.
                <li className={"chakra-stack css-1y3kakk"} key={text}>
                    <Black_circle_with_greyscale_background />
                    <div className={"css-puz2r7"}>
                        <p className={"chakra-text css-u3zvhu"}>
                            {text}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}


export default ShippingBenefits
