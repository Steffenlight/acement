import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Rating from './Rating.tsx'
import RatingFilter from './RatingFilter.tsx'


// Component

        function RatingFilterList() {
            return (
                <ul role={"list"} className={"css-11v8hgh"}>
                    <RatingFilterItem dataId="0" />
                    <RatingFilterItem dataId="1" />
                    <RatingFilterItem dataId="2" />
                    <RatingFilterItem dataId="3" />
                    <RatingFilterItem dataId="4" />
                </ul>
            )
        }
    

// Subcomponents

        function RatingFilterItem({ dataId }: { dataId: string }) {
            return (
                <li className={"css-0"}>
                    <RatingFilter dataId={dataId} />
                </li>
            )
        }
    

export default RatingFilterList
