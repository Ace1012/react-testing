import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useUpdateWindowDimensions from "./hooks/useUpdateWindowDimensions";

interface IThemeContext {
    myThemeSize: number;
    showDescription: boolean;
}

interface IThemeProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

const ThemeContext = createContext({} as IThemeContext)

const MyThemeProvider = ({ children }: IThemeProviderProps) => {
    const [size, setSize] = useState(54);
    const showDescription = useMemo(() => size > 36, [size])
    const { width } = useUpdateWindowDimensions();

    function resizeIcons(width: number) {

        switch (true) {
            case width <= 600: {
                console.log("small")
                setSize(18);
            }
                break;
            case width <= 900: {
                console.log("medium")
                setSize(36)
            }
                break;
            case width <= 1200: {
                console.log("large")
                setSize(54)
            }
                break;
        }

    }

    useEffect(() => {
        resizeIcons(width)
    }, [width]);

    return (
        <ThemeContext.Provider value={{ myThemeSize: size, showDescription }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useMyTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider!!!")
    }

    return context;
}

export { MyThemeProvider, useMyTheme }