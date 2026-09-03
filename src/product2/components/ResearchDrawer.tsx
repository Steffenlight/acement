import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { RESEARCH } from './researchData.ts'


/* Clinical research drawer, opened from under the ingredient grid.
 *
 * Shell follows timeline.com's study drawer, read off their live science page:
 * a *white* scrim rather than the usual black one, a paper panel, a table of
 * contents rail beside the content, and section headings over dotted rules.
 * The white scrim is the detail worth keeping — a black overlay on a paper
 * page reads as a cookie banner, and Timeline's version keeps the page feeling
 * present behind the panel instead of switched off.
 *
 * Card content follows innerbody's, which is the better model for a formula
 * like ours: a benefit-led headline, the ingredient, how many studies and over
 * how many years, then the papers themselves — evidence organised per
 * ingredient rather than as one product trial, because per-ingredient evidence
 * is what we actually have.
 *
 * Every citation is real and every link resolves. See researchData.ts for
 * where each list came from and how the counts are derived. */


function CloseIcon() {
    return (
        <svg viewBox={'0 0 20 20'} fill={'none'} aria-hidden={'true'}>
            <path d={'M5 5l10 10M15 5L5 15'} stroke={'currentColor'} strokeWidth={'1.3'} strokeLinecap={'round'} />
        </svg>
    )
}


function ResearchDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
    const panelRef = React.useRef<HTMLDivElement | null>(null)
    const closeRef = React.useRef<HTMLButtonElement | null>(null)
    const [active, setActive] = React.useState<string>(RESEARCH[0].id)

    // Escape closes, and the page behind must not scroll while the panel is
    // open — on iOS especially, a scrollable body under a fixed panel is the
    // difference between a drawer and a broken page.
    React.useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onKey)
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        closeRef.current?.focus()
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prev
        }
    }, [open, onClose])

    // Highlights the table of contents entry for whatever is on screen.
    React.useEffect(() => {
        if (!open) return
        const root = panelRef.current
        if (!root) return
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
                if (visible) setActive(visible.target.id)
            },
            { root, rootMargin: '-10% 0px -70% 0px', threshold: 0 }
        )
        root.querySelectorAll('[data-rd-section]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [open])

    const goTo = (id: string) => {
        const el = panelRef.current?.querySelector(`#${CSS.escape(id)}`)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const totalStudies = RESEARCH.reduce((n, s) => n + s.studies, 0)

    return (
        <div className={'rd'} data-open={open ? 'true' : 'false'} aria-hidden={!open}>
            <button className={'rd-scrim'} tabIndex={-1} aria-label={'Close'} onClick={onClose} />

            <div
                className={'rd-panel'}
                role={'dialog'}
                aria-modal={'true'}
                aria-labelledby={'rd-title'}
                ref={panelRef}
            >
                <button className={'rd-close'} onClick={onClose} aria-label={'Close'} ref={closeRef}>
                    <CloseIcon />
                </button>

                <div className={'rd-inner'}>
                    <nav className={'rd-toc'} aria-label={'Ingredients'}>
                        <p className={'rd-toc__label'}>Table of contents</p>
                        <ul>
                            {RESEARCH.map(s => (
                                <li key={s.id}>
                                    <button
                                        type={'button'}
                                        className={'rd-toc__link'}
                                        aria-current={active === s.id ? 'true' : undefined}
                                        onClick={() => goTo(s.id)}
                                    >
                                        {s.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={'rd-body'}>
                        <p className={'rd-eyebrow'}>{totalStudies} studies · 8 ingredients</p>
                        <h2 className={'rd-title'} id={'rd-title'}>
                            The research behind every dose
                        </h2>
                        <p className={'rd-standfirst'}>
                            Every ingredient in ACE is here at the dose used in its published
                            human research. These are those papers. Each one links to its record.
                        </p>

                        {RESEARCH.map(s => (
                            <section className={'rd-section'} id={s.id} data-rd-section={'true'} key={s.id}>
                                <h3 className={'rd-name'}>{s.name}</h3>
                                <p className={'rd-headline'}>{s.headline}</p>

                                <div className={'rd-meta'}>
                                    <span className={'rd-meta__dose'}>{s.dose}</span>
                                    <span className={'rd-meta__stat'}><b>{s.studies}</b> studies</span>
                                    <span className={'rd-meta__stat'}><b>{s.years}</b> years</span>
                                </div>

                                <ul className={'rd-cites'}>
                                    {s.citations.map(c => (
                                        <li key={c.url}>
                                            <a
                                                className={'rd-cite'}
                                                href={c.url}
                                                target={'_blank'}
                                                rel={'noopener noreferrer'}
                                                title={c.title}
                                            >
                                                {c.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}

                        <p className={'rd-foot'}>
                            These are studies on the individual ingredients, not on this product.
                            Counts and year spans describe the papers listed here. These
                            statements have not been evaluated by the Food and Drug
                            Administration. This product is not intended to diagnose, treat, cure
                            or prevent any disease.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ResearchDrawer
