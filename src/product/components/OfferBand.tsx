import React from 'react'


/* Offer band above the buy-box CTA. Styling and the reasoning behind the
 * translation live in ../stylesheets/offer-band.css.
 *
 * NOTE — this contradicts the pricing decision on record. docs/04-offer-and-
 * pricing.md sets $69/mo with no intro discount, and that call is load-bearing:
 * a half-price first order contributes roughly $19 against $52 and pushes
 * payback from order two to month three. "50% off for life" is a permanent
 * cut, not an intro offer, so it changes the model at every order rather than
 * only the first. Built as asked; flagging so the numbers get re-run before
 * this drives any spend. */

const PRICE_NOW = '$59'
const PRICE_WAS = '$118'


function ArrowRight() {
    return (
        <svg viewBox={'0 0 16 16'} fill={'none'} aria-hidden={'true'}>
            <path
                d={'M1 8h13M9 3l5 5-5 5'}
                stroke={'currentColor'}
                strokeWidth={'1.5'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
            />
        </svg>
    )
}


function OfferBand() {
    return (
        <div className={'ob'}>
            <p className={'ob-prices'}>
                <span className={'ob-now'}>{PRICE_NOW}</span>
                <span className={'ob-was'} aria-label={`Was ${PRICE_WAS}`}>{PRICE_WAS}</span>
            </p>
            <p className={'ob-headline'}>50% off for life</p>
        </div>
    )
}


export { ArrowRight }
export default OfferBand
