import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Pagination from './Pagination.tsx'


    
// Component

        function PaginationButton({
            page,
            isActive = false
        }: {
            page: number;
            isActive?: boolean;
        }) {
            return (
                <button className={isActive ? "chakra-text css-1jupeeb" : "chakra-text css-1s8lalf"}>
                    {page}
                </button>
            )
        }
    

export default PaginationButton
