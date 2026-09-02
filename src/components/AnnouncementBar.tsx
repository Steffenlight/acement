import React from 'react'
import type { JSX } from 'react/jsx-runtime'


/* The offer bar above the header.
 *
 * The capture left this slot empty — EmptyContainer3 rendered the css-tw4vmx
 * wrapper and nothing inside it. That wrapper carries the stacking context the
 * header relies on, so the bar goes inside it rather than replacing it.
 *
 * Rendered on all three page shells (App, product, science), which is where
 * EmptyContainer3 was already mounted. */

const OFFER = {
    text: '50% off for life. No code needed.',
    linkLabel: 'Shop now',
    href: '#',
}


function AnnouncementBar() {
    return (
        <div className={"css-tw4vmx"}>
            <div className={"ab"}>
                <p className={"ab-text"}>
                    {OFFER.text}{' '}
                    <a className={"ab-link"} href={OFFER.href}>{OFFER.linkLabel}</a>
                </p>
            </div>
        </div>
    )
}


export default AnnouncementBar
