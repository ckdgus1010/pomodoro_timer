import { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { loadTheme, saveTheme } from "../utils/darkModeUtils";

type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const isDarkMode = loadTheme();
    const [darkMode, setDarkMode] = useState(isDarkMode);
    const toggleDarkMode = () =>
        setDarkMode((current) => {
            saveTheme(!current);
            return !current;
        });

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <StyledThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("Error ::: There is no context.");
    return context;
};
