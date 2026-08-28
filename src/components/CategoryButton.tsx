import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function CategoryButton({
            buttonClassName,
            label,
            paragraphLabel = false
        }: {
            buttonClassName: string;
            label: string;
            paragraphLabel?: boolean;
        }) {
            return (
                <button type={"button"} className={buttonClassName}>
                    <span className={"children"}>
                        {paragraphLabel ? (
                            <p className={"chakra-text css-18ogj9d"}>
                                {label}
                            </p>
                        ) : (
                            label
                        )}
                    </span>
                </button>
            )
        }
    

export default CategoryButton
