import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


// Component

        function PressItems() {
            return (
                <div className={"rfm-initial-child-container"}>
                    <PressItem index={1} imageId="18" />
                    <PressItem index={2} imageId="19" />
                    <PressItem index={3} imageId="20" />
                    <PressItem index={4} imageId="21" />
                    <PressItem index={5} imageId="22" />
                    <PressItem index={6} imageId="18" />
                    <PressItem index={7} imageId="19" />
                    <PressItem index={8} imageId="20" />
                    <PressItem index={9} imageId="21" />
                    <PressItem index={10} imageId="22" />
                </div>
            )
        }
    

// Subcomponents

        function PressItem({
            index,
            imageId
        }: {
            index: number;
            imageId: string;
        }) {
            return (
                <div
                    className={"rfm-child"}
                    style={{"--transform":"none"}}
                >
                    <div className={`press-item-${index} css-129zvt1`}>
                        <Img id={imageId} />
                    </div>
                </div>
            )
        }
    

export default PressItems
