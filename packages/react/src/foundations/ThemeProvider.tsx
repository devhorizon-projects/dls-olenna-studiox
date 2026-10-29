import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
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
 * Controls light and dark mode switching, persisting user preference to localStorage
 * and reflecting theme attributes on document.documentElement.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'olenna-theme',
  attribute = 'data-theme'
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    } catch {
      // Ignore localStorage access failures
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;

    const computeResolved = (): 'light' | 'dark' => {
      if (theme === 'system') {
        if (typeof window !== 'undefined' && window.matchMedia) {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
      }
      return theme;
    };

    const current = computeResolved();
    setResolvedTheme(current);
    root.setAttribute(attribute, current);

    if (current === 'dark') {
      root.classList.add('dark', 'olenna-theme-dark');
      root.classList.remove('olenna-theme-light');
    } else {
      root.classList.add('olenna-theme-light');
      root.classList.remove('dark', 'olenna-theme-dark');
    }

    if (theme === 'system' && typeof window !== 'undefined' && window.matchMedia) {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e: MediaQueryListEvent) => {
        const next = e.matches ? 'dark' : 'light';
        setResolvedTheme(next);
        root.setAttribute(attribute, next);
        if (next === 'dark') {
          root.classList.add('dark', 'olenna-theme-dark');
          root.classList.remove('olenna-theme-light');
        } else {
          root.classList.add('olenna-theme-light');
          root.classList.remove('dark', 'olenna-theme-dark');
        }
      };
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, [theme, attribute]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
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
