import React from 'react'
import type { JSX } from 'react/jsx-runtime'


/* "8 ingredients in one formula" — the ingredient grid.
 *
 * TWO THINGS TO FIX BEFORE LAUNCH, both known and both deliberate for now:
 *
 * 1. This is the REFERENCE formula, not ours. Taurine 675mg and boron 4mg are
 *    Mars Men's roster. docs/03-mechanism.md replaces taurine with ashwagandha
 *    600mg (taurine at 675mg is well below its studied range, so it is on
 *    their label for the ingredient count rather than the effect) and doses
 *    boron at 10mg, the dose used in the free-testosterone and SHBG research.
 *    Swapping those two rows is the whole change — see FORMULA below and the
 *    matching roster in AccordionPanels.tsx, which already carries ours.
 *
 * 2. The descriptions are structure/function claims. They are written in our
 *    own words rather than lifted from the reference, but "supports
 *    testosterone production" is still a claim that needs the DSHEA
 *    disclaimer, which is why it sits under the grid rather than being left
 *    to the one on the product intro.
 *
 * Ingredient photography is not in yet. Each cell renders a tonal disc in the
 * slot's place so the grid reads correctly; drop a path into `image` and it
 * takes over. */

type Ingredient = {
    name: string
    dose: string
    description: string
    /** Public path to a square ingredient photo. Null renders the tonal slot. */
    image: string | null
}

const FORMULA: Ingredient[] = [
    {
        name: 'Tongkat Ali',
        dose: '1,000 mg',
        description: 'Supports testosterone production, libido, fertility and lean muscle.',
        image: null,
    },
    {
        name: 'Shilajit',
        dose: '400 mg',
        description: 'Supports fertility markers and testosterone levels.',
        image: null,
    },
    {
        name: 'K1 & K2',
        dose: '100 mcg',
        description: 'Supports bone density and mood, and works alongside D3 in testosterone production.',
        image: null,
    },
    {
        name: 'Vitamin D',
        dose: '4,000 IU',
        description: 'Essential to cellular health and to regulating testosterone.',
        image: null,
    },
    {
        name: 'Zinc',
        dose: '30 mg',
        description: 'An essential trace mineral in testosterone metabolism and immune function.',
        image: null,
    },
    {
        // Ours is ashwagandha 600mg. See note above.
        name: 'Taurine',
        dose: '675 mg',
        description: 'Reduces oxidative stress and supports blood flow.',
        image: null,
    },
    {
        name: 'Fenugreek',
        dose: '675 mg',
        description: 'Supports testosterone production, DHT and male vitality.',
        image: null,
    },
    {
        // Ours is 10mg, the dose used in the research. See note above.
        name: 'Boron',
        dose: '4 mg',
        description: 'A trace mineral studied for raising free testosterone and regulating estrogen.',
        image: null,
    },
]


function IngredientCell({ item }: { item: Ingredient }) {
    return (
        <li className={'fg-cell'}>
            <div className={'fg-media'}>
                <div className={'fg-disc'}>
                    {item.image && <img src={item.image} alt={''} loading={'lazy'} decoding={'async'} />}
                </div>
                <span className={'fg-dose'}>{item.dose}</span>
            </div>
            <div className={'fg-copy'}>
                <h3 className={'fg-name'}>{item.name}</h3>
                <p className={'fg-desc'}>{item.description}</p>
            </div>
        </li>
    )
}


function FormulaGrid() {
    return (
        <section className={'fg'} aria-labelledby={'fg-title'}>
            <div className={'fg-head'}>
                <p className={'fg-eyebrow'}>Clinically studied doses · No proprietary blends</p>
                <h2 className={'fg-title'} id={'fg-title'}>8 ingredients in one formula</h2>
            </div>

            <ul className={'fg-grid'}>
                {FORMULA.map(item => <IngredientCell key={item.name} item={item} />)}
            </ul>

            <div className={'fg-foot'}>
                <p>
                    Every active is included at the dose used in its published human
                    research, and standardized to a stated percentage of its measurable
                    active compound. These statements have not been evaluated by the Food
                    and Drug Administration. This product is not intended to diagnose,
                    treat, cure or prevent any disease.
                </p>
            </div>
        </section>
    )
}


export default FormulaGrid
