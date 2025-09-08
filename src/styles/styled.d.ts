import type { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        bgColor: string;
        text: {
            title: string;
            normal: string;
            inactive: string;
        };
        button: {
            normal: {
                bg: string;
                border: string;
                text: string;
            };
            hover: {
                bg: string;
                border: string;
            };
            active: {
                bg: string;
                border: string;
            };
        };
        accentButton: {
            normal: {
                bg: string;
                border: string;
                text: string;
            };
            hover: {
                bg: string;
                border: string;
            };
            active: {
                bg: string;
                border: string;
            };
        }
        card: {
            shadow: string;
        }
    }
}
