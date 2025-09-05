import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    bgColor: "#f8f9fa",
    text: {
        title: "#343a40",
        normal: "#868e96",
        inactive: "#adb5bd",
    },
    button: {
        normal: {
            bg: "#f1f3f5",
            border: "#ced4da",
            text: "#212529",
        },
        hover: {
            bg: "#e9ecef",
            border: "#adb5bd",
        },
        active: {
            bg: "#dee2e6",
            border: "#868e96",
        },
    },
    accentButton: {
        normal: {
            bg: "#343a42",
            border: "#495057",
            text: "#f8f9fa",
        },
        hover: {
            bg: "#3c4149",
            border: "#6c757d",
        },
        active: {
            bg: "#343a42",
            border: "#343a40",
        },
    },
    card: {
        shadow: "0 6px 16px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255, 255, 255, 0.6) inset"
    }
};

export const darkTheme: DefaultTheme = {
    bgColor: "#212529",
    text: {
        title: "#f8f9fa",
        normal: "#adb5bd",
        inactive: "#868e96",
    },
    button: {
        normal: {
            bg: "#343a42",
            border: "#495057",
            text: "#f8f9fa",
        },
        hover: {
            bg: "#3c4149",
            border: "#6c757d",
        },
        active: {
            bg: "#343a42",
            border: "#343a40",
        },
    },
    accentButton: {
        normal: {
            bg: "#f1f3f5",
            border: "#ced4da",
            text: "#212529",
        },
        hover: {
            bg: "#e9ecef",
            border: "#adb5bd",
        },
        active: {
            bg: "#dee2e6",
            border: "#868e96",
        },
    },
    card: {
        shadow: "0 2px 6px rgba(255 ,255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.08), 0 1px 0 rgba(255, 255, 255, 0.06) inset"
    }
};
