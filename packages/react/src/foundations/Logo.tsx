import React from 'react';
import { cn } from '../utils/cn';

export interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'wordmark' | 'emblem';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
  priority?: boolean;
  href?: string;
  basePath?: string;
  src?: string;
  alt?: string;
  as?: 'image' | 'svg';
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  withTagline = false,
  priority = false,
  href,
  basePath = '',
  src: customSrc,
  alt = 'Olenna Luxury Beauty, Fashion & Lifestyle',
  as = 'image',
  style
}) => {
  // Dimension definitions matching Olenna Web exactly
  const dimensions = {
    horizontal: {
      sm: { width: 140, height: 31, className: 'h-7 w-auto' },
      md: { width: 180, height: 40, className: 'h-9 sm:h-10 w-auto' },
      lg: { width: 220, height: 48, className: 'h-11 sm:h-12 w-auto' }
    },
    stacked: {
      sm: { width: 110, height: 89, className: 'w-24 h-auto' },
      md: { width: 150, height: 121, className: 'w-32 sm:w-36 h-auto' },
      lg: { width: 190, height: 153, className: 'w-40 sm:w-48 h-auto' }
    },
    wordmark: {
      sm: { width: 120, height: 36, className: 'h-7 w-auto' },
      md: { width: 155, height: 47, className: 'h-8 sm:h-9 w-auto' },
      lg: { width: 190, height: 57, className: 'h-10 sm:h-11 w-auto' }
    },
    emblem: {
      sm: { width: 32, height: 29, className: 'h-7 w-auto' },
      md: { width: 44, height: 39, className: 'h-9 w-auto' },
      lg: { width: 56, height: 50, className: 'h-12 w-auto' }
    }
  };

  const assetSources = {
    horizontal: '/images/logo/olenna-horizontal.webp',
    stacked: '/images/logo/olenna-logo-full.webp',
    wordmark: '/images/logo/olenna-wordmark.webp',
    emblem: '/images/logo/olenna-emblem.webp'
  };

  const currentDim = dimensions[variant][size];
  const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const defaultSrc = `${normalizedBasePath}${assetSources[variant]}`;
  const effectiveSrc = customSrc !== undefined ? customSrc : defaultSrc;

  // Helper to render inline vector SVG graphics
  const renderSvgContent = () => {
    const isDark = theme === 'dark';

    switch (variant) {
      case 'horizontal':
        return isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420 90"
            fill="none"
            role="img"
            aria-label={alt}
            width={currentDim.width}
            height={currentDim.height}
            className={cn(currentDim.className)}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          >
            <g transform="translate(10, 8) scale(0.46)">
              <circle cx="80" cy="80" r="74" stroke="#C4A181" strokeWidth="2" strokeOpacity="0.8" strokeDasharray="2 3" />
              <path d="M80 18 C115 18 140 46 140 80 C140 114 115 142 80 142 C45 142 20 114 20 80 C20 46 45 18 80 18 Z" stroke="#DFC7B0" strokeWidth="3" fill="none" />
              <path d="M80 32 C104 32 120 54 120 80 C120 106 104 128 80 128 C56 128 40 106 40 80 C40 54 56 32 80 32 Z M80 44 C66 44 56 60 56 80 C56 100 66 116 80 116 C94 116 104 100 104 80 C104 60 94 44 80 44 Z" fill="#DFC7B0" />
              <path d="M80 50 C83 62 92 70 100 72 C90 76 84 86 80 94 C76 86 70 76 60 72 C68 70 77 62 80 50 Z" fill="#F5E3EA" />
            </g>
            <text x="100" y="55" fontFamily="'Playfair Display', Georgia, serif" fontSize="44" fontWeight="600" letterSpacing="4" fill="#FFFAF7">
              OLENNA
            </text>
            <text x="102" y="74" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="9" fontWeight="400" letterSpacing="2.5" fill="#DFC7B0">
              EVERYDAY ELEGANCE · CURATED
            </text>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420 90"
            fill="none"
            role="img"
            aria-label={alt}
            width={currentDim.width}
            height={currentDim.height}
            className={cn(currentDim.className)}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          >
            <defs>
              <linearGradient id="olenna-horiz-plum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6D4C5E" />
                <stop offset="100%" stopColor="#493541" />
              </linearGradient>
            </defs>
            <g transform="translate(10, 8) scale(0.46)">
              <circle cx="80" cy="80" r="74" stroke="#C4A181" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="2 3" />
              <path d="M80 18 C115 18 140 46 140 80 C140 114 115 142 80 142 C45 142 20 114 20 80 C20 46 45 18 80 18 Z" stroke="url(#olenna-horiz-plum)" strokeWidth="3" fill="none" />
              <path d="M80 32 C104 32 120 54 120 80 C120 106 104 128 80 128 C56 128 40 106 40 80 C40 54 56 32 80 32 Z M80 44 C66 44 56 60 56 80 C56 100 66 116 80 116 C94 116 104 100 104 80 C104 60 94 44 80 44 Z" fill="url(#olenna-horiz-plum)" />
              <path d="M80 50 C83 62 92 70 100 72 C90 76 84 86 80 94 C76 86 70 76 60 72 C68 70 77 62 80 50 Z" fill="#C4A181" />
            </g>
            <text x="100" y="55" fontFamily="'Playfair Display', Georgia, serif" fontSize="44" fontWeight="600" letterSpacing="4" fill="#493541">
              OLENNA
            </text>
            <text x="102" y="74" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="9" fontWeight="400" letterSpacing="2.5" fill="#8E7A87">
              EVERYDAY ELEGANCE · CURATED
            </text>
          </svg>
        );

      case 'stacked':
        return isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 240"
            fill="none"
            role="img"
            aria-label={alt}
            width={currentDim.width}
            height={currentDim.height}
            className={cn(currentDim.className)}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          >
            <g transform="translate(60, 20) scale(0.75)">
              <circle cx="80" cy="80" r="74" stroke="#C4A181" strokeWidth="2" strokeOpacity="0.8" strokeDasharray="2 3" />
              <path d="M80 18 C115 18 140 46 140 80 C140 114 115 142 80 142 C45 142 20 114 20 80 C20 46 45 18 80 18 Z" stroke="#DFC7B0" strokeWidth="3" fill="none" />
              <path d="M80 32 C104 32 120 54 120 80 C120 106 104 128 80 128 C56 128 40 106 40 80 C40 54 56 32 80 32 Z M80 44 C66 44 56 60 56 80 C56 100 66 116 80 116 C94 116 104 100 104 80 C104 60 94 44 80 44 Z" fill="#DFC7B0" />
              <path d="M80 50 C83 62 92 70 100 72 C90 76 84 86 80 94 C76 86 70 76 60 72 C68 70 77 62 80 50 Z" fill="#F5E3EA" />
            </g>
            <text x="120" y="176" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="34" fontWeight="600" letterSpacing="4" fill="#FFFAF7">
              OLENNA
            </text>
            <line x1="70" y1="190" x2="170" y2="190" stroke="#DFC7B0" strokeWidth="1.5" strokeOpacity="0.9" />
            <text x="120" y="208" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="8.5" fontWeight="400" letterSpacing="2" fill="#DFC7B0">
              STUDIOX
            </text>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 240"
            fill="none"
            role="img"
            aria-label={alt}
            width={currentDim.width}
            height={currentDim.height}
            className={cn(currentDim.className)}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          >
            <defs>
              <linearGradient id="olenna-full-plum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6D4C5E" />
                <stop offset="100%" stopColor="#493541" />
              </linearGradient>
            </defs>
            <g transform="translate(60, 20) scale(0.75)">
              <circle cx="80" cy="80" r="74" stroke="#C4A181" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="2 3" />
              <path d="M80 18 C115 18 140 46 140 80 C140 114 115 142 80 142 C45 142 20 114 20 80 C20 46 45 18 80 18 Z" stroke="url(#olenna-full-plum)" strokeWidth="3" fill="none" />
              <path d="M80 32 C104 32 120 54 120 80 C120 106 104 128 80 128 C56 128 40 106 40 80 C40 54 56 32 80 32 Z M80 44 C66 44 56 60 56 80 C56 100 66 116 80 116 C94 116 104 100 104 80 C104 60 94 44 80 44 Z" fill="url(#olenna-full-plum)" />
              <path d="M80 50 C83 62 92 70 100 72 C90 76 84 86 80 94 C76 86 70 76 60 72 C68 70 77 62 80 50 Z" fill="#C4A181" />
            </g>
            <text x="120" y="176" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="34" fontWeight="600" letterSpacing="4" fill="#493541">
              OLENNA
            </text>
            <line x1="70" y1="190" x2="170" y2="190" stroke="#C4A181" strokeWidth="1.5" strokeOpacity="0.8" />
            <text x="120" y="208" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="8.5" fontWeight="400" letterSpacing="2" fill="#8E7A87">
              STUDIOX
            </text>
          </svg>
        );

      case 'wordmark':
        return isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 80"
            fill="none"
            role="img"
            aria-label={alt}
            width={currentDim.width}
            height={currentDim.height}
            className={cn(currentDim.className)}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          >
            <text x="160" y="54" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="48" fontWeight="600" letterSpacing="4" fill="#FFFAF7">
              OLENNA
            </text>
            <line x1="80" y1="68" x2="240" y2="68" stroke="#DFC7B0" strokeWidth="1.5" strokeOpacity="0.9" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 80"
            fill="none"
            role="img"
            aria-label={alt}
            width={currentDim.width}
            height={currentDim.height}
            className={cn(currentDim.className)}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          >
            <text x="160" y="54" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="48" fontWeight="600" letterSpacing="4" fill="#493541">
              OLENNA
            </text>
            <line x1="80" y1="68" x2="240" y2="68" stroke="#C4A181" strokeWidth="1.5" strokeOpacity="0.8" />
          </svg>
        );

      case 'emblem':
        return isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 160"
            fill="none"
            role="img"
            aria-label={alt}
            width={currentDim.width}
            height={currentDim.height}
            className={cn(currentDim.className)}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          >
            <defs>
              <linearGradient id="olenna-champagne-light" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFAF7" />
                <stop offset="50%" stopColor="#DFC7B0" />
                <stop offset="100%" stopColor="#C4A181" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="74" stroke="#C4A181" strokeWidth="2" strokeOpacity="0.8" strokeDasharray="2 3" />
            <path d="M80 18 C115 18 140 46 140 80 C140 114 115 142 80 142 C45 142 20 114 20 80 C20 46 45 18 80 18 Z" stroke="url(#olenna-champagne-light)" strokeWidth="3" fill="none" />
            <path d="M80 32 C104 32 120 54 120 80 C120 106 104 128 80 128 C56 128 40 106 40 80 C40 54 56 32 80 32 Z M80 44 C66 44 56 60 56 80 C56 100 66 116 80 116 C94 116 104 100 104 80 C104 60 94 44 80 44 Z" fill="url(#olenna-champagne-light)" />
            <path d="M80 50 C83 62 92 70 100 72 C90 76 84 86 80 94 C76 86 70 76 60 72 C68 70 77 62 80 50 Z" fill="#F5E3EA" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 160"
            fill="none"
            role="img"
            aria-label={alt}
            width={currentDim.width}
            height={currentDim.height}
            className={cn(currentDim.className)}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          >
            <defs>
              <linearGradient id="olenna-emblem-plum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6D4C5E" />
                <stop offset="60%" stopColor="#493541" />
                <stop offset="100%" stopColor="#33232D" />
              </linearGradient>
              <linearGradient id="olenna-emblem-champagne" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFC7B0" />
                <stop offset="100%" stopColor="#C4A181" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="74" stroke="url(#olenna-emblem-champagne)" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="2 3" />
            <path d="M80 18 C115 18 140 46 140 80 C140 114 115 142 80 142 C45 142 20 114 20 80 C20 46 45 18 80 18 Z" stroke="url(#olenna-emblem-plum)" strokeWidth="3" fill="none" />
            <path d="M80 32 C104 32 120 54 120 80 C120 106 104 128 80 128 C56 128 40 106 40 80 C40 54 56 32 80 32 Z M80 44 C66 44 56 60 56 80 C56 100 66 116 80 116 C94 116 104 100 104 80 C104 60 94 44 80 44 Z" fill="url(#olenna-emblem-plum)" />
            <path d="M80 50 C83 62 92 70 100 72 C90 76 84 86 80 94 C76 86 70 76 60 72 C68 70 77 62 80 50 Z" fill="url(#olenna-emblem-champagne)" />
          </svg>
        );

      default:
        return null;
    }
  };

  const imageElement = as === 'svg' ? (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: 'fit-content'
      }}
    >
      {renderSvgContent()}
    </div>
  ) : (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: 'fit-content'
      }}
    >
      <img
        src={effectiveSrc}
        alt={alt}
        width={currentDim.width}
        height={currentDim.height}
        loading={priority ? 'eager' : 'lazy'}
        style={{
          objectFit: 'contain',
          maxWidth: '100%',
          height: 'auto',
          aspectRatio: `${currentDim.width} / ${currentDim.height}`,
          display: 'block'
        }}
        className={cn(
          'object-contain transition-transform duration-200 group-hover:scale-[1.01]',
          currentDim.className
        )}
      />
    </div>
  );

  const content = (
    <>
      {imageElement}
      {withTagline && (
        <span
          className="text-[10px] sm:text-xs text-brand-text-muted tracking-wider mt-1.5 font-light"
          style={{
            fontSize: '0.75rem',
            color: theme === 'dark' ? 'rgba(255, 250, 247, 0.7)' : 'var(--olenna-color-brand-text-muted, #8E7A87)',
            letterSpacing: '0.05em',
            marginTop: '0.375rem',
            fontWeight: 300,
            display: 'block'
          }}
        >
          Everyday elegance, thoughtfully curated.
        </span>
      )}
    </>
  );

  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textDecoration: 'none',
    outline: 'none',
    ...style
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          'olenna-logo-link group inline-flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-plum-900 rounded-sm transition-opacity hover:opacity-95',
          className
        )}
        style={containerStyle}
        aria-label="Olenna — Everyday Elegance, Thoughtfully Curated"
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cn('olenna-logo-container inline-flex flex-col items-start', className)} style={containerStyle}>
      {content}
    </div>
  );
};
