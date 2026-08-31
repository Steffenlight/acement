import React from 'react'
import type { JSX } from 'react/jsx-runtime'


/* Panel content for the product accordion.
 *
 * The capture shipped the accordion's buttons but none of its panels, so this
 * is written rather than recovered. The formula below is the real roster from
 * docs/03-mechanism.md — it is not placeholder.
 *
 * Claim discipline, per docs/10-proof-and-credibility.md: ingredient-level
 * studied doses only, phrased as "formulated with clinically-studied
 * ingredients at their studied doses". No product-level efficacy claim, and
 * nothing that reads as "clinically proven ACE MEN".
 *
 * NOTE — the first item's label, "Clinically proven benefits", came with the
 * captured markup and is Timeline's, whose claim rests on their own RCT. We
 * have no product trial, and docs/09 lists sloppy "clinical proven" phrasing
 * as a landmine. The panel copy stays at ingredient level, but the heading
 * itself should be renamed before launch. */

const FORMULA: Array<{ name: string; dose: string; note: string }> = [
    { name: 'Tongkat ali', dose: '1,000mg', note: 'Standardized, eurycomanone % stated on label' },
    { name: 'Fenugreek', dose: '675mg', note: 'Standardized, saponin % stated' },
    { name: 'Ashwagandha', dose: '600mg', note: 'Standardized' },
    { name: 'Shilajit', dose: '400mg', note: 'Standardized to fulvic acid' },
    { name: 'Zinc', dose: '30mg', note: 'Bisglycinate, elemental' },
    { name: 'Boron', dose: '10mg', note: 'The dose used in the free-testosterone research' },
    { name: 'Vitamin D3', dose: '4,000 IU', note: '' },
    { name: 'Vitamin K1/K2', dose: '100mcg', note: '' },
]


function BenefitsPanel() {
    return (
        <>
            <p>
                ACE works on testosterone four ways: supporting what the body produces,
                freeing what is already bound, protecting it from conversion, and
                supporting the systems that let you use it.
            </p>
            <p>
                Every ingredient is included at the dose used in its published human
                research, not at the dose that fits a label. Eight actives, roughly 2.9g
                per serving, each standardized to a stated percentage of its measurable
                active compound.
            </p>
            <p className={"ac-panel__note"}>
                Formulated with clinically-studied ingredients at their studied doses.
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat, cure or
                prevent any disease.
            </p>
        </>
    )
}


function IngredientsPanel() {
    return (
        <>
            <ul className={"ac-formula"}>
                {FORMULA.map(row => (
                    <li className={"ac-formula__row"} key={row.name}>
                        <span className={"ac-formula__name"}>{row.name}</span>
                        <span className={"ac-formula__dose"}>{row.dose}</span>
                        {row.note && <span className={"ac-formula__note"}>{row.note}</span>}
                    </li>
                ))}
            </ul>
            <p className={"ac-panel__note"}>
                No proprietary blends. Every batch is third-party tested and its
                certificate of analysis published.
            </p>
        </>
    )
}


function HowToUsePanel() {
    return (
        <>
            <p>
                Five capsules daily, with food. One box holds 150 capsules, a 30-day
                supply.
            </p>
            <p>
                Take them at whatever time of day you will actually remember. Tongkat
                ali and shilajit act slowly and show up on bloodwork rather than in how
                you feel; ashwagandha is the one most people notice first, usually
                through sleep. Give it a full cycle before judging it.
            </p>
            <p className={"ac-panel__note"}>
                Not for use by anyone under 18, or by women who are pregnant or nursing.
                Speak to your doctor before starting if you take prescription
                medication or have a medical condition.
            </p>
        </>
    )
}


export const PANELS: Record<string, () => JSX.Element> = {
    'Clinically proven benefits': BenefitsPanel,
    'Key ingredients': IngredientsPanel,
    'How to use': HowToUsePanel,
}

export default PANELS
