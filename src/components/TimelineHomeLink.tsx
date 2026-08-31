import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'

import AceMenWordmark from './icons/AceMenWordmark.tsx'


/* Header home link. Still named TimelineHomeLink because the captured markup
 * and its css-8b2aw2 grid placement are wired to that name throughout; only
 * the mark inside it changed. */
function TimelineHomeLink() {
    return <Link to="/" className={"chakra-link css-8b2aw2"} title={"Home"}>
    	<AceMenWordmark />
    </Link>
}


export default TimelineHomeLink
