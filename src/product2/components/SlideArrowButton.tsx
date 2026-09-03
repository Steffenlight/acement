import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_right_thin from './icons/Arrow_right_thin.tsx'
import Left_pointing_arrow from './icons/Left_pointing_arrow.tsx'
import Arrow_right_thin1 from './icons/Arrow_right_thin1.tsx'
import Arrow_left_bold from './icons/Arrow_left_bold.tsx'
import Arrow_right_thin3 from './icons/Arrow_right_thin3.tsx'


        type SlideArrowButtonData = {
            className: string;
            icon: React.ReactNode;
            disabled: boolean;
            wrapped: boolean;
        };
    
// Component

        function SlideArrowButton({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                className,
                icon,
                disabled,
                wrapped
            }: SlideArrowButtonData = getSlideArrowButtonData(dataId);

            return (
                <button
                    {...(disabled ? { disabled: "" as any } : {})}
                    type={"button"}
                    className={className}
                >
                    <ArrowContent wrapped={wrapped}>{icon}</ArrowContent>
                </button>
            );
        }
    

// Subcomponents

        function ArrowContent({
            wrapped,
            children
        }: {
            wrapped: boolean;
            children: React.ReactNode;
        }) {
            return wrapped ? (
                <span className={"children"}>
                    {children}
                </span>
            ) : (
                <>{children}</>
            );
        }
    


        function getSlideArrowButtonData(id: string): SlideArrowButtonData {
            const stringId = String(id);

            const data: Record<string, SlideArrowButtonData> = {
                "0": {
                    className: "chakra-button css-j246yl",
                    icon: <Left_pointing_arrow />,
                    disabled: true,
                    wrapped: false
                },
                "1": {
                    className: "chakra-button css-1et49st",
                    icon: <Arrow_right_thin1 />,
                    disabled: false,
                    wrapped: false
                },
                "2": {
                    className: "chakra-button css-acfg8x",
                    icon: <Arrow_left_bold />,
                    disabled: true,
                    wrapped: true
                },
                "3": {
                    className: "chakra-button css-dijeb2",
                    icon: <Arrow_right_thin3 />,
                    disabled: true,
                    wrapped: true
                }
            };

            return data[stringId] ?? data["0"];
        }
    

export default SlideArrowButton
