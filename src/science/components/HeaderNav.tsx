import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import HeaderNavItem from './HeaderNavItem.tsx'
import Header from './Header.tsx'


        type HeaderNavData = {
            itemDataIds: string[];
        }
    
// Component

        function HeaderNav({ dataId }: { dataId: string }) {
            const { itemDataIds }: HeaderNavData = getHeaderNavData(dataId);
            return (
                <div className={"chakra-stack css-1buq1sq"}>
                    {itemDataIds.map((itemDataId) => (
                        <HeaderNavItem key={itemDataId} dataId={itemDataId} />
                    ))}
                </div>
            );
        }
    


        function getHeaderNavData(id: string): HeaderNavData {
            const stringId = String(id);

            const data: Record<string, HeaderNavData> = {
                "0": {
                    itemDataIds: ["0", "3", "6", "9"]
                },
                "1": {
                    itemDataIds: ["1", "4", "7", "10", "12"]
                },
                "2": {
                    itemDataIds: ["2", "5", "8", "11", "13", "14", "15"]
                }
            };

            return data[stringId] ?? { itemDataIds: [] };
        }
    

export default HeaderNav
