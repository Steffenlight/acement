import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function ArticleLink({ title }: { title: string }) {
            return (
                <a className={"chakra-linkbox__overlay css-1hnz6hu"}>
                    <h2 className={"chakra-text css-1vawacw"}>
                        {title}
                    </h2>
                </a>
            )
        }
    

export default ArticleLink
