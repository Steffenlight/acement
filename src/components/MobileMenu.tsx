import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'

import Menu_hamburger_three_bars from './icons/Menu_hamburger_three_bars.tsx'

// The drawer is portalled to document.body: the site header carries a
// transform, which makes it the containing block for position: fixed and
// would otherwise clip the panel.
//
// timeline.com opens a slide-in drawer from the hamburger. Alloy's capture
// contains no drawer markup and ships no JavaScript, so the button existed but
// had nothing behind it. This is a working equivalent wired to the site's own
// routes, shown below 960px to match timeline.com's breakpoint.

const LINKS: [string, string][] = [
    ['Shop', '/shop'],
    ['Science', '/science'],
    ['Benefits', '/benefits'],
    ['About', '/about'],
    ['Reviews', '/reviews'],
    ['Testimonials', '/testimonials'],
    ['Blog', '/blog'],
    ['FAQ', '/faq'],
    ['Contact', '/contact'],
]

function MobileMenu() {
    const [open, setOpen] = useState(false)
    const [shown, setShown] = useState(false)
    const location = useLocation()

    // Drive the slide-in with a transition rather than a keyframe animation.
    // If animations are throttled or disabled, a transition still settles on
    // its end value, whereas a stalled keyframe would strand the panel
    // off-screen and make the menu unusable.
    useEffect(() => {
        setShown(open)
    }, [open])

    // Close on navigation so the drawer never survives a route change.
    useEffect(() => setOpen(false), [location.pathname])

    // Lock background scroll while the drawer is open.
    useEffect(() => {
        if (!open) return
        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = previous }
    }, [open])

    useEffect(() => {
        if (!open) return
        const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    return (
        <>
            <button
                type={"button"}
                className={"chakra-button css-1qdrp3y"}
                aria-label={"Open Menu"}
                aria-expanded={open}
                onClick={() => setOpen(true)}
            >
                <Menu_hamburger_three_bars />
            </button>

            {open && createPortal(
                <div
                    className={"acement-mobile-menu"}
                    role={"dialog"}
                    aria-modal={"true"}
                    aria-label={"Site navigation"}
                >
                    <button
                        type={"button"}
                        className={"acement-mobile-menu__scrim"}
                        aria-label={"Close menu"}
                        onClick={() => setOpen(false)}
                    />
                    <nav className={"acement-mobile-menu__panel"} data-state={shown ? 'open' : 'closed'}>
                        <button
                            type={"button"}
                            className={"acement-mobile-menu__close"}
                            aria-label={"Close menu"}
                            onClick={() => setOpen(false)}
                        >
                            &#215;
                        </button>
                        <ul>
                            {LINKS.map(([label, href]) => (
                                <li key={href}>
                                    <Link to={href} aria-current={location.pathname === href ? 'page' : undefined}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link className={"acement-mobile-menu__cta"} to={"/products/mitopure-softgels-vegan"}>
                            Shop softgels
                        </Link>
                    </nav>
                </div>,
                document.body
            )}
        </>
    )
}

export default MobileMenu
