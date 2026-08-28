import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'



    
// Component

        function ArticleLink({ title }: { title: string }) {
            return (
                <Link to={"/blog"} className={"chakra-linkbox__overlay css-1hnz6hu"}>
                    <h2 className={"chakra-text css-1vawacw"}>
                        {title}
                    </h2>
                </Link>
            )
        }
    

export default ArticleLink
