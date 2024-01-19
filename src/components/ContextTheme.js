import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ContextTheme = ({ children}) => {
    const [darkMode, setDarkTheme] = useState(false);

    function themeHandler() {
        setDarkTheme((prev) => !prev);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, themeHandler}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const GetThemeValues = () => useContext(ThemeContext);