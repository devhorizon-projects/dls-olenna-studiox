import React from 'react';
import { useTheme } from './ThemeProvider';
import { cn } from '../utils/cn';

export interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
  variant?: 'icon' | 'pill' | 'button';
  style?: React.CSSProperties;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  size = 'md',
  variant = 'icon',
  style
}) => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const isSmall = size === 'sm';
  const iconSize = isSmall ? 15 : 18;

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border transition-all duration-200 cursor-pointer',
          isDark
            ? 'bg-[#2A1E27] border-[#C4A181] text-[#DFC7B0] hover:text-[#FFFAF7]'
            : 'bg-[#FAF5F2] border-[rgba(73,53,65,0.15)] text-[#493541] hover:text-[#261C22]',
          isSmall ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-xs font-medium',
          className
        )}
        style={{
          fontFamily: 'var(--olenna-typography-fontFamily-sans, inherit)',
          letterSpacing: '0.04em',
          ...style
        }}
      >
        <span style={{ color: isDark ? '#C4A181' : '#6D4C5E' }}>
          {isDark ? sunIcon : moonIcon}
        </span>
        <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'inline-flex items-center justify-center rounded-md border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A181]',
        isDark
          ? 'bg-[#2A1E27] border-[#4A3543] text-[#DFC7B0] hover:bg-[#382633] hover:text-[#FFFAF7]'
          : 'bg-white/10 border-white/20 text-[#FFFAF7] hover:bg-white/20',
        isSmall ? 'p-1.5' : 'p-2',
        className
      )}
      style={style}
    >
      {isDark ? sunIcon : moonIcon}
    </button>
  );
};
