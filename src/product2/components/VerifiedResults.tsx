import React from 'react'


/* Verified results band. Styling and the reasoning behind the treatment live
 * in ../stylesheets/verified-results.css.
 *
 * PLACEHOLDER DATA — every lab value, name, age and location below is invented
 * so the layout can be built and reviewed. None of it may ship.
 *
 * Before this section goes live, each entry needs, per docs/10-proof-and-
 * credibility.md:
 *
 *   - a real participant, with signed consent covering both the photographs
 *     and the disclosure of their lab values
 *   - week 0 and week 12 serum panels from a third-party CLIA lab, drawn
 *     fasted before 9am on both occasions
 *   - a redacted copy of each report behind `labReport`, or the link removed
 *   - every completing participant represented, including non-responders
 *
 * The photographs are real and the numbers are not, which is the one
 * combination that must never reach production: it reads as a verified result
 * and it is not one. Ship this section only once the panels exist. */

type Subject = {
    id: string
    name: string
    age: number
    place: string
    /** Public path to the week-0 frame, e.g. /images/results/marcus-week0.webp */
    before: string
    /** Public path to the week-12 frame. */
    after: string
    /** Optional object-position per frame, when the two shots were taken at
     *  different distances and the bodies do not line up at the default. */
    beforePos?: string
    afterPos?: string
    /** Total testosterone, ng/dL. */
    total: { from: number; to: number }
    /** Free testosterone, pg/mL. The half of the claim total T cannot show. */
    free: { from: number; to: number }
    /** Redacted lab report. Null hides the link rather than linking to nothing. */
    labReport: string | null
}

const SUBJECTS: Subject[] = [
    {
        id: 'subject-01',
        name: 'Marcus H',
        age: 41,
        place: 'Austin, TX',
        before: '/images/results/subject-01-week0.webp',
        after: '/images/results/subject-01-week12.webp',
        total: { from: 412, to: 638 },
        free: { from: 8.1, to: 13.4 },
        labReport: null,
    },
    {
        id: 'subject-02',
        name: 'Elias V',
        age: 52,
        place: 'Denver, CO',
        before: '/images/results/subject-02-week0.webp',
        after: '/images/results/subject-02-week12.webp',
        total: { from: 362, to: 610 },
        free: { from: 6.4, to: 12.9 },
        labReport: null,
    },
    {
        id: 'subject-03',
        name: 'Tobias R',
        age: 29,
        place: 'Oslo, NO',
        before: '/images/results/subject-03-week0.webp',
        after: '/images/results/subject-03-week12.webp',
        total: { from: 448, to: 596 },
        free: { from: 7.7, to: 11.9 },
        labReport: null,
    },
    {
        id: 'subject-04',
        name: 'Preston K',
        age: 58,
        place: 'Tampa, FL',
        before: '/images/results/subject-04-week0.webp',
        after: '/images/results/subject-04-week12.webp',
        total: { from: 505, to: 721 },
        free: { from: 10.2, to: 15.8 },
        labReport: null,
    },
]


function ResultCard({ subject }: { subject: Subject }) {
    const { name, age, place, before, after, beforePos, afterPos, total, free, labReport } = subject

    return (
        <article className={'vr-card'}>
            <div className={'vr-pair'}>
                <div
                    className={'vr-frame'}
                    data-point={'before'}
                    style={beforePos ? ({ '--vr-pos': beforePos } as React.CSSProperties) : undefined}
                >
                    <img src={before} alt={`${name} at week 0`} loading={'lazy'} decoding={'async'} />
                    <span className={'vr-tag'}>Week 0</span>
                </div>
                <div
                    className={'vr-frame'}
                    data-point={'after'}
                    style={afterPos ? ({ '--vr-pos': afterPos } as React.CSSProperties) : undefined}
                >
                    <img src={after} alt={`${name} at week 12`} loading={'lazy'} decoding={'async'} />
                    <span className={'vr-tag'}>Week 12</span>
                </div>
            </div>

            <div className={'vr-data'}>
                <p className={'vr-who'}>{name} · {age} · {place}</p>

                <p className={'vr-metric'}>Total testosterone</p>
                <p className={'vr-readout'}>
                    <span className={'vr-from'}>{total.from}</span>
                    <span className={'vr-arrow'} aria-hidden={'true'}></span>
                    <span className={'vr-to'}>{total.to}</span>
                    <span className={'vr-unit'}>ng/dL</span>
                </p>

                <p className={'vr-sub'}>
                    <span>Free testosterone</span>
                    <span><b>{free.from} → {free.to}</b> pg/mL</span>
                </p>

                {labReport && (
                    <a className={'vr-lab'} href={labReport}>View lab report</a>
                )}
            </div>
        </article>
    )
}


function VerifiedResults() {
    return (
        <section className={'vr'} aria-labelledby={'vr-title'}>
            <div className={'vr-head'}>
                <div>
                    <p className={'vr-eyebrow'}>Verified bloodwork · 12 weeks</p>
                    <h2 className={'vr-title'} id={'vr-title'}>Same lab. Same hour. Twelve weeks apart.</h2>
                </div>
                <p className={'vr-standfirst'}>
                    Every panel below was drawn fasted, before 9am, at a third-party CLIA lab.
                    Photographs taken the morning of the draw.
                </p>
            </div>

            <div className={'vr-track'} role={'region'} aria-label={'Participant results'} tabIndex={0}>
                {SUBJECTS.map(subject => <ResultCard key={subject.id} subject={subject} />)}
            </div>

            <div className={'vr-foot'}>
                <p>
                    Individual results, reported as observed. Serum panels drawn fasted before 9am
                    at a third-party CLIA lab at week 0 and week 12, alongside each participant's
                    existing training and diet. Open-label and company-funded, with no control
                    group. Every participant who completed the protocol is shown, including those
                    whose numbers did not move.
                </p>
            </div>
        </section>
    )
}


export default VerifiedResults
