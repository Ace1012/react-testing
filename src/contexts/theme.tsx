import { createContext, useContext, useEffect, useState } from "react";
import { IPreset, randomizePreset } from "../components/redditThread/utilities";
import { ThemeProperties } from "../components/redditThread/interfaces";

interface IThemeProviderProps {
    children: React.ReactNode | React.ReactNode[];
}

interface IThemeContext {
    preset: IPreset;
    isDark: boolean;
    togglePreset(preset?: IPreset): void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const DARK_MODE: IPreset = {
    primary: "#242424",
    secondary: "#767676",
    tertiary: "#dd7b2b"
}

const LIGHT_MODE: IPreset = {
    primary: "#cccccc",
    secondary: "#767676",
    tertiary: "#bc8f8f"
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
    const [preset, setPreset] = useState<IPreset>(LIGHT_MODE);
    const [isDark, setIsDark] = useState(false);

    function togglePreset(preset?: IPreset) {
        preset
            ? setPreset(preset)
            : isDark
                ? setPreset(LIGHT_MODE)
                : setPreset(DARK_MODE)
        setIsDark(prev => !prev)
    }

    function setCSSPreset(preset: IPreset) {
        const root = document.querySelector(":root") as HTMLElement;

        root.style.setProperty(ThemeProperties.PRIMARY, preset.primary);
        root.style.setProperty(ThemeProperties.SECONDARY, preset.secondary);
        root.style.setProperty(ThemeProperties.TERTIARY, preset.tertiary);
    }

    useEffect(() => {
        console.log("Mounted ThemeProvider");
    }, []);

    useEffect(() => {
        setCSSPreset(preset)
        console.log(preset)
    }, [preset]);

    return (
        <ThemeContext.Provider value={{ preset, isDark, togglePreset }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("Must use useTheme be within a ThemeProvider!")
    }

    return context;
}

export { ThemeProvider, useTheme }