import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import HeaderSubnavItem from './HeaderSubnavItem.tsx'


        type HeaderSubnavData = {
            itemIds: string[];
        }
    
// Component

        function HeaderSubnav({ dataId }: { dataId: string }) {
            const { itemIds }: HeaderSubnavData = getHeaderSubnavData(dataId);

            return (
                <div className={"chakra-stack css-1buq1sq"}>
                    {itemIds.map((itemId) => (
                        <HeaderSubnavItem key={itemId} dataId={itemId} />
                    ))}
                </div>
            );
        }
    


        function getHeaderSubnavData(id: string): HeaderSubnavData {
            const stringId = String(id);

            const data: Record<string, HeaderSubnavData> = {
                "0": {
                    itemIds: ["0", "3", "6", "9"]
                },
                "1": {
                    itemIds: ["1", "4", "7", "10", "12"]
                },
                "2": {
                    itemIds: ["2", "5", "8", "11", "13", "14", "15"]
                }
            };

            return data[stringId] ?? { itemIds: [] };
        }
    

export default HeaderSubnav
