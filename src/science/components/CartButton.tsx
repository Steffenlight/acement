import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Folder_with_tab from './icons/Folder_with_tab.tsx'


// Component

        function CartButton({ count }: { count: number }) {
            return (
                <button type={"button"} className={"chakra-button css-dc77fb"}>
                    <div className={"css-0"}>
                        <span className={"css-naczm1"}>
                            {count}
                        </span>
                        <Folder_with_tab />
                    </div>
                </button>
            )
        }
    

export default CartButton
