import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import MitopurePromo from './MitopurePromo.tsx'


/* The promo band from the foot of the science page, copied onto the product
 * page. Markup is the capture's, lifted from science/components/MitopurePage
 * unchanged — the same wrappers, the same class names, the same copy.
 *
 * Two things had to travel with it:
 *
 *  - The CSS. The captured sheets are namespaced per page, so the product page
 *    cannot see .science-page rules. product/stylesheets/science-banner.css
 *    carries all 22 rule blocks with only the scope rewritten.
 *  - The photograph. On the science page it comes through <Img id="21" />,
 *    which is that page's own image switch; the file itself already sits in
 *    public/images, so it is referenced directly here rather than dragging the
 *    whole switch across.
 *
 * Note this band is Timeline's, Mitopure badge and all, exactly as asked. It
 * sits on a page that is still largely Timeline's — the product photography,
 * the comparison table, the press strip — so it is consistent with the rest of
 * the prototype rather than a new exception. */

import bannerImage from '/images/b945b9e2-90cb-497e-90f7-2e79bac87392.webp'


function ClosingBanner() {
    return (
        <div className={"css-ms93xs"}>
            <div className={"section--banner css-1l9r55b"}>
                <div className={"banner_media-desktop css-12f05a7"}>
                    <img
                        alt={""}
                        role={"presentation"}
                        loading={"lazy"}
                        decoding={"async"}
                        sizes={""}
                        src={bannerImage}
                        style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "center center", color: "transparent" }}
                    />
                </div>
                <div className={"css-xcf7pf"}>
                    <div className={"css-1weg7h6"}>
                        <MitopurePromo />
                    </div>
                </div>
                <div className={"banner_media-mobile css-adgo35 sf-hidden"}>

                </div>
            </div>
        </div>
    )
}


export default ClosingBanner
