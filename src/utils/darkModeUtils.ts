const KEY_THEME = "theme";
const DARK_MODE = "dark_mode";

export function saveTheme(isDarkMode: boolean) {
    if (isDarkMode) {
        localStorage.setItem(KEY_THEME, JSON.stringify(DARK_MODE));
    } else {
        localStorage.removeItem(KEY_THEME);
    }
}

export function loadTheme(): boolean {
    const data = localStorage.getItem(KEY_THEME);

    if (data) {
        return JSON.parse(data) === DARK_MODE;
    } else {
        return false;
    }
}
