import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import AceMenWordmark from '../../components/icons/AceMenWordmark.tsx'


/* Closing banner at the foot of the product page.
 *
 * Modelled on the promo band at the bottom of our own science page: full-bleed
 * photograph, an eyebrow lockup, a two-tone headline where the first clause is
 * white and the second drops to grey, and one light button.
 *
 * Two substitutions:
 *
 *  - The reference's eyebrow is a "Powered by <ingredient brand>" lockup. We
 *    have no branded extract to name — docs/03 is explicit that we buy generic
 *    standardized extracts and skip the licence fee — so the wordmark signs off
 *    instead, which is what the last band on a page is for.
 *  - The copy is the campaign platform locked on 2026-08-31 (docs/18):
 *    "For the man you're supposed to be." with the kicker "He's in there."
 *    The two-tone treatment the reference uses for headline-then-subhead maps
 *    onto line-then-kicker exactly.
 *
 * PHOTOGRAPHY PENDING. `IMAGE` is null, which renders a tonal panel in the
 * slot's place; the band reads correctly without it because the ground is
 * already dark and the type is reversed. Set a path and it takes over. */

const IMAGE: string | null = null


function ClosingBanner() {
    return (
        <section className={'cb'}>
            <div className={'cb-copy'}>
                <div className={'cb-mark'}>
                    <AceMenWordmark />
                </div>

                <h2 className={'cb-title'}>
                    For the man you&rsquo;re supposed to be.{' '}
                    <span className={'cb-kicker'}>He&rsquo;s in there.</span>
                </h2>

                <a className={'cb-cta'} href={'#'}>
                    Shop ACE
                </a>
            </div>

            <div className={'cb-media'}>
                {IMAGE && <img src={IMAGE} alt={''} loading={'lazy'} decoding={'async'} />}
            </div>
        </section>
    )
}


export default ClosingBanner
