import React, { createContext, useState, useEffect, useContext } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>('');

  const getSystemTheme = (): string => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  useEffect(() => {
    const rootElement = document.body;
    if (theme === 'dark') {
      rootElement.classList.add('dark');
      rootElement.classList.remove('light');
    } else if (theme === 'light') {
      rootElement.classList.add('light');
      rootElement.classList.remove('dark');
    } else {
      rootElement.classList.remove('light', 'dark');
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem('charmingdcTheme');
    setTheme(savedTheme || getSystemTheme());
  }, []);

  const toggleTheme = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('charmingdcTheme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};