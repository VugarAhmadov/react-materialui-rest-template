/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { LANGUAGE_KEY } from 'utils/localStorage';

type SettingsContextProps = {
    language?: string;
    setLanguage: any;
    isDarkMode: boolean;
    theme?: string;
    toggleTheme: any;
};

const SettingsContext = createContext<SettingsContextProps>({
    isDarkMode: false,
    toggleTheme: () => {},
    setLanguage: () => {},
});
export const useSettings = (): SettingsContextProps => useContext<SettingsContextProps>(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useLocalStorage(LANGUAGE_KEY, 'az', { raw: true });
    const [theme, setTheme] = useLocalStorage('@Settings/theme', 'light', { raw: true });

    const isDarkMode = theme === 'dark';
    const toggleTheme = (): void => setTheme(isDarkMode ? 'light' : 'dark');

    return (
        <SettingsContext.Provider value={{ language, setLanguage, isDarkMode, theme, toggleTheme }}>
            {children}
        </SettingsContext.Provider>
    );
};
