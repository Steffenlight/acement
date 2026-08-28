import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'

import Timeline_text_illustration from './icons/Timeline_text_illustration.tsx'


// Component
function TimelineHomeLink() {
    return <Link to="/" className={"chakra-link css-8b2aw2"} title={"Home"}>
    	<Timeline_text_illustration />
    </Link>
}


export default TimelineHomeLink
