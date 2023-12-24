import React, {Dispatch, SetStateAction, useEffect} from 'react'
import {ThemeType} from "./Theme.model";
import {themeObject} from "./themeConfig";



interface IThemeContext {
    themeType: ThemeType;
    theme: string,
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = React.createContext<IThemeContext>({
    themeType: 'light',
    theme: 'string',
} as IThemeContext)

export  const ThemeProvider: React.FC<{theme:"dark"|"light";children:React.ReactNode}> = ({theme = "light", children}) => {

    const [currentTheme, setCurrentTheme] = React.useState<ThemeType>(theme)

    useEffect(() => {
        setCurrentTheme(theme)
    }, [theme])
    return (
        <ThemeContext.Provider
            value={{
                themeType: currentTheme,
                theme: themeObject[currentTheme]||"light",
                setCurrentTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => React.useContext(ThemeContext)

