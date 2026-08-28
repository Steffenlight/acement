import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import SlideProgress from './SlideProgress.tsx'


// Component

        function HeroPagination() {
            return (
                <div className={"css-jzz4r9"}>
                    <div className={"heroCarousel_pagination css-1blkyjd"}>
                        <div className={"chakra-stack css-1q8uwok"}>
                            <PaginationItem contentClassName="css-h9pe8l" />
                            <PaginationItem contentClassName="css-gmy63v" />
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function PaginationItem({ contentClassName }: { contentClassName: string }) {
            return (
                <div className={"css-u8bymm"}>
                    <div className={contentClassName}>
                        <SlideProgress />
                    </div>
                </div>
            )
        }
    

export default HeroPagination
