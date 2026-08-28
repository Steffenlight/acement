import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function Rating({ rating }: { rating: string }) {
            return (
                <div className={"css-moleqs"}>
                    <p className={"chakra-text css-1kcmo00"}>
                        <span className={"chakra-text css-1qzbgoi"}>
                            {rating}
                        </span>
                        <span className={"chakra-text css-glai8a"}>
                            / 5
                        </span>
                    </p>
                </div>
            )
        }
    

export default Rating
