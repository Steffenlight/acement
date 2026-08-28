import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type DateTimeData = {
            dateTime: string;
            label: string;
        }
    
// Component

        function DateTime({ dataId }: { dataId: string }) {
            const { dateTime, label }: DateTimeData = getDateTimeData(dataId);
            return (
                <time dateTime={dateTime}>
                    {label}
                </time>
            );
        }
    


        function getDateTimeData(id: string): DateTimeData {
            const stringId = String(id);
            const data: Record<string, DateTimeData> = {
                "0": {
                    dateTime: "2026-08-13",
                    label: "Aug 13, 2026"
                },
                "1": {
                    dateTime: "2026-07-29",
                    label: "Jul 29, 2026"
                },
                "2": {
                    dateTime: "2026-07-10",
                    label: "Jul 10, 2026"
                }
            };
            return data[stringId] ?? {
                dateTime: "",
                label: ""
            };
        }
    

export default DateTime
