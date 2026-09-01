import React from 'react'
import type { JSX } from 'react/jsx-runtime'


/* ACE vs TRT vs generic boosters.
 *
 * Replaces the captured Urolithin-A-against-other-supplements table, which
 * compared a molecule we do not sell against categories nobody shopping for
 * testosterone support is weighing up.
 *
 * Rows and language are the reference's: short, concrete, and mostly not
 * ticks. The strongest thing about that table is that it does not try to win
 * every row — TRT gets a tick for clinical doses, and "N/A" rather than a
 * cross where the row does not apply to it. A table where one column wins
 * eight out of eight reads as marketing; one that concedes reads as a
 * comparison. Two deliberate keeps from that:
 *
 *  - TRT scores an honest tick on clinical doses.
 *  - The third column is mostly question marks, which is the actual answer
 *    for unlabelled proprietary blends. It is also the only claim here that
 *    is about the category rather than about a named competitor.
 *
 * "Reversability" in the reference is a typo; spelled correctly here.
 *
 * Every ACE value is checkable against docs/03-mechanism.md: one serving a
 * day, full studied doses, third-party tested per batch, no hormone
 * replacement, so nothing is shut down and nothing needs tapering. */

type Cell =
    | { kind: 'yes' }
    | { kind: 'no' }
    | { kind: 'unknown' }
    | { kind: 'text'; text: string }

type Row = { label: string; ace: Cell; trt: Cell; generic: Cell }

const t = (text: string): Cell => ({ kind: 'text', text })
const YES: Cell = { kind: 'yes' }
const NO: Cell = { kind: 'no' }
const ASK: Cell = { kind: 'unknown' }

const COLUMNS = ['ACE', 'TRT', 'Generic boosters']

const ROWS: Row[] = [
    { label: 'Approach', ace: t('Natural support'), trt: t('Synthetic replacement'), generic: t('Natural support') },
    { label: 'Convenience', ace: t('Once a day'), trt: t('Needles'), generic: ASK },
    { label: 'Side effects', ace: t('Minimal'), trt: t('Shrinkage, acne'), generic: ASK },
    { label: 'Natural production', ace: t('Supports'), trt: t('Shuts it down'), generic: ASK },
    { label: 'Monitoring', ace: t('Optional testing'), trt: t('Requires bloodwork'), generic: NO },
    { label: 'Clinical doses', ace: YES, trt: YES, generic: NO },
    { label: 'Reversibility', ace: YES, trt: t('Lifelong commitment'), generic: ASK },
    { label: 'Third-party tested', ace: YES, trt: t('N/A'), generic: ASK },
]


function Mark({ cell }: { cell: Cell }) {
    if (cell.kind === 'text') return <span className={'ct-text'}>{cell.text}</span>

    const glyph =
        cell.kind === 'yes' ? <path d={'M4.5 8.5l2.5 2.5 4.5-5'} />
            : cell.kind === 'no' ? <path d={'M5.5 5.5l5 5M10.5 5.5l-5 5'} />
                : null

    return (
        <span className={'ct-mark'} data-kind={cell.kind}>
            {glyph ? (
                <svg viewBox={'0 0 16 16'} fill={'none'} stroke={'currentColor'} strokeWidth={'1.6'}
                    strokeLinecap={'round'} strokeLinejoin={'round'} aria-hidden={'true'}>
                    {glyph}
                </svg>
            ) : (
                <span aria-hidden={'true'}>?</span>
            )}
            <span className={'ct-sr'}>
                {cell.kind === 'yes' ? 'Yes' : cell.kind === 'no' ? 'No' : 'Unclear'}
            </span>
        </span>
    )
}


function CompareTable() {
    return (
        <section className={'ct'} aria-labelledby={'ct-title'}>
            <div className={'ct-head'}>
                <p className={'ct-eyebrow'}>Compare us to</p>
                <h2 className={'ct-title'} id={'ct-title'}>TRT and everything else on the shelf</h2>
            </div>

            <div className={'ct-wrap'}>
                <table className={'ct-table'}>
                    <thead>
                        <tr>
                            <th scope={'col'}><span className={'ct-sr'}>Feature</span></th>
                            {COLUMNS.map((c, i) => (
                                <th scope={'col'} key={c} data-ours={i === 0 ? 'true' : undefined}>
                                    {c}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {ROWS.map(row => (
                            <tr key={row.label}>
                                <th scope={'row'}>{row.label}</th>
                                <td data-ours={'true'} data-label={COLUMNS[0]}><Mark cell={row.ace} /></td>
                                <td data-label={COLUMNS[1]}><Mark cell={row.trt} /></td>
                                <td data-label={COLUMNS[2]}><Mark cell={row.generic} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className={'ct-foot'}>
                TRT is testosterone replacement therapy, prescribed and supervised by a
                doctor. ACE is a supplement, not a treatment, and not a substitute for
                one. &ldquo;Generic boosters&rdquo; describes products sold without stated
                doses or standardization, which is most of the category.
            </p>
        </section>
    )
}


export default CompareTable
