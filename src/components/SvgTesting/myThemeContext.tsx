import { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
    myThemeSize: number
}

interface IThemeProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

const ThemeContext = createContext({} as IThemeContext)

const MyThemeProvider = ({ children }: IThemeProviderProps) => {
    const [size, setSize] = useState(54);

    function resizeIcons() {
        const width = window.innerWidth;

        switch (true) {
            case width <= 600: {
                console.log("small")
                setSize(18)
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
        window.addEventListener("resize", resizeIcons)

        return () => {
            window.removeEventListener("resize", resizeIcons)
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ myThemeSize: size }}>
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