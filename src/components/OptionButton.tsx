import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function OptionButton({
            label,
            selected = false
        }: {
            label: string;
            selected?: boolean;
        }) {
            return (
                <button type={"button"} className={"css-8ieu31"}>
                    <div className={selected ? "css-1fv3hlz" : "css-4r0t4g"}>
                        <p className={selected ? "chakra-text css-11325k9" : "chakra-text css-l098fe"}>
                            {label}
                        </p>
                    </div>
                </button>
            )
        }
    

export default OptionButton
