import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { themeObject } from './themeConfig';
import { ThemeEnums } from '../Enums/typeEnums';

interface IThemeContext {
  theme: ThemeEnums,
  setCurrentTheme: Dispatch<SetStateAction<ThemeEnums>>
}

export const ThemeContext = React.createContext<IThemeContext>({
  themeType: 'light',
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
        themeType: currentTheme,
        theme: themeObject[currentTheme] || 'light',
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => React.useContext(ThemeContext);
