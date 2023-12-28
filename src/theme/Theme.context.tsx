import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { ThemeEnums } from '../Enums/typeEnums';

const themeObject = { light: 'light', dark: 'dark' };

interface IThemeContext {
  theme: ThemeEnums,
  setCurrentTheme: Dispatch<SetStateAction<ThemeEnums>>
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
} as IThemeContext);

export const ThemeProvider: React.FC<{ theme:ThemeEnums;children:React.ReactNode }> = ({ theme = 'light', children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeEnums>(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{
        theme: themeObject[currentTheme] || 'light',
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => React.useContext(ThemeContext);
