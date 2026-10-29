import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'light';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
}

/**
 * ThemeProvider for Olenna StudioX DLS
 * Note: Dark mode is globally disabled across the design system.
 * In both dark and light modes, light mode components and tokens are exclusively used.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'olenna-theme',
  attribute = 'data-theme'
}) => {
  const [theme, setThemeState] = useState<Theme>('light');
  const resolvedTheme: 'light' = 'light';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute(attribute, 'light');
    root.classList.remove('dark', 'olenna-theme-dark');
    root.classList.add('olenna-theme-light');

    try {
      localStorage.setItem(storageKey, 'light');
    } catch {
      // Ignore localStorage access failures
    }
  }, [attribute, storageKey]);

  const setTheme = (_nextTheme: Theme) => {
    // Dark mode is disabled; always enforce light
    setThemeState('light');
    try {
      localStorage.setItem(storageKey, 'light');
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    // Dark mode is disabled; always remain in light
    setThemeState('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: 'light',
      resolvedTheme: 'light',
      setTheme: () => {},
      toggleTheme: () => {}
    };
  }
  return context;
}

