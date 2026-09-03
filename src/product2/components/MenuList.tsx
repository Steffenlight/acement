import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import MenuItem from './MenuItem.tsx'


        type MenuListData = {
            id: string;
            items: Array<{
                id: string;
                label: string;
            }>;
        };
    
// Component

        function MenuList({ dataId }: { dataId: string }) {
            const { id, items }: MenuListData = getMenuListData(dataId);

            return (
                <div
                    tabIndex={"-1"}
                    role={"menu"}
                    id={id}
                    style={{
                        transformOrigin: "var(--popper-transform-origin)",
                        opacity: "0",
                        visibility: "hidden",
                        transform: "scale(0.8)"
                    }}
                    className={"chakra-menu__menu-list css-27fczc"}
                >
                    {items.map((item) => (
                        <MenuItem key={item.id} id={item.id} label={item.label} />
                    ))}
                </div>
            );
        }
    


        function getMenuListData(id: string): MenuListData {
            const dataId = String(id);

            if (dataId === "0") {
                return {
                    id: "menu-list-_R_kplaiqmbqm6H1_",
                    items: [
                        {
                            id: "menu-list-_R_kplaiqmbqm6H1_-menuitem-_R_1lakplaiqmbqm6_",
                            label: "All"
                        },
                        {
                            id: "menu-list-_R_kplaiqmbqm6H1_-menuitem-_R_2lakplaiqmbqm6_",
                            label: "1 star"
                        },
                        {
                            id: "menu-list-_R_kplaiqmbqm6H1_-menuitem-_R_3lakplaiqmbqm6_",
                            label: "2 stars"
                        },
                        {
                            id: "menu-list-_R_kplaiqmbqm6H1_-menuitem-_R_4lakplaiqmbqm6_",
                            label: "3 stars"
                        },
                        {
                            id: "menu-list-_R_kplaiqmbqm6H1_-menuitem-_R_5lakplaiqmbqm6_",
                            label: "4 stars"
                        },
                        {
                            id: "menu-list-_R_kplaiqmbqm6H1_-menuitem-_R_6lakplaiqmbqm6_",
                            label: "5 stars"
                        }
                    ]
                };
            }

            return {
                id: "menu-list-_R_splaiqmbqm6H1_",
                items: [
                    {
                        id: "menu-list-_R_splaiqmbqm6H1_-menuitem-_R_1lasplaiqmbqm6_",
                        label: "All"
                    },
                    {
                        id: "menu-list-_R_splaiqmbqm6H1_-menuitem-_R_2lasplaiqmbqm6_",
                        label: "Under 30"
                    },
                    {
                        id: "menu-list-_R_splaiqmbqm6H1_-menuitem-_R_3lasplaiqmbqm6_",
                        label: "30-39"
                    },
                    {
                        id: "menu-list-_R_splaiqmbqm6H1_-menuitem-_R_4lasplaiqmbqm6_",
                        label: "40-49"
                    },
                    {
                        id: "menu-list-_R_splaiqmbqm6H1_-menuitem-_R_5lasplaiqmbqm6_",
                        label: "50-59"
                    },
                    {
                        id: "menu-list-_R_splaiqmbqm6H1_-menuitem-_R_6lasplaiqmbqm6_",
                        label: "60-69"
                    },
                    {
                        id: "menu-list-_R_splaiqmbqm6H1_-menuitem-_R_7lasplaiqmbqm6_",
                        label: "Over 70"
                    }
                ]
            };
        }
    

export default MenuList
