import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Side_view_rolled_tire from './icons/Side_view_rolled_tire.tsx'
import Car_wheel_tire from './icons/Car_wheel_tire.tsx'


    
// Component

        function TireView({
            variant
        }: {
            variant: "side" | "wheel";
        }) {
            return (
                <div className={"css-1r7k4bm"}>
                    {variant === "side" ? <Side_view_rolled_tire /> : <Car_wheel_tire />}
                </div>
            )
        }
    

export default TireView
