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


function ShieldCheck() {
    return (
        <svg viewBox={'0 0 16 16'} fill={'none'} aria-hidden={'true'} className={'ob-shield'}>
            <path
                d={'M8 1.5 2.75 3.4v4.2c0 3 2.1 5.7 5.25 6.9 3.15-1.2 5.25-3.9 5.25-6.9V3.4L8 1.5Z'}
                stroke={'currentColor'}
                strokeWidth={'1.3'}
                strokeLinejoin={'round'}
            />
            <path
                d={'m5.9 7.9 1.5 1.5 2.9-2.9'}
                stroke={'currentColor'}
                strokeWidth={'1.3'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
            />
        </svg>
    )
}


/* Guarantee line under the CTA.
 *
 * NOTE — docs/09-brand-design.md lists "Higher T or your money back" in the
 * copy landmines pulled off competitor pages, filed as "Mars Men's claim and
 * their risk appetite". This is that claim. It is also a promise about a lab
 * value rather than about satisfaction, which is a materially harder thing to
 * honour: a refund policy tied to bloodwork invites the customer to produce a
 * panel, and docs/14 has our refund terms mirroring Mars Men's tighter
 * first-order-only structure rather than a results guarantee. Built as asked;
 * worth an attorney read before launch. */
function GuaranteeLine() {
    return (
        <p className={'ob-guarantee'}>
            <ShieldCheck />
            Higher testosterone in 90 days or your money back
        </p>
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


export { ArrowRight, GuaranteeLine }
export default OfferBand
