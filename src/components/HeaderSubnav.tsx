import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import HeaderSubnavLink from './HeaderSubnavLink.tsx'


        type HeaderSubnavData = {
            linkDataIds: string[];
        }
    
// Component

        function HeaderSubnav({ dataId }: { dataId: string }) {
            const { linkDataIds }: HeaderSubnavData = getHeaderSubnavData(dataId);

            return (
                <div className={"chakra-stack css-1buq1sq"}>
                    {linkDataIds.map((linkDataId) => (
                        <HeaderSubnavLink key={linkDataId} dataId={linkDataId} />
                    ))}
                </div>
            );
        }
    


        function getHeaderSubnavData(id: string): HeaderSubnavData {
            const stringId = String(id);

            const data: Record<string, HeaderSubnavData> = {
                "0": {
                    linkDataIds: ["0", "3", "6", "9"]
                },
                "1": {
                    linkDataIds: ["1", "4", "7", "10", "12"]
                },
                "2": {
                    linkDataIds: ["2", "5", "8", "11", "13", "14", "15"]
                }
            };

            return data[stringId] ?? {
                linkDataIds: []
            };
        }
    

export default HeaderSubnav
