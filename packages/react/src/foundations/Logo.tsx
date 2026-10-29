import React from 'react';
import { cn } from '../utils/cn';

export interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'wordmark' | 'emblem' | 'studiox';
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
  alt = 'Olenna StudioX — Luxury Beauty, Fashion & Lifestyle',
  as = 'image',
  style
}) => {
  // Dimensions matching authentic Olenna StudioX master artwork
  const dimensions = {
    horizontal: {
      sm: { width: 140, height: 31, className: 'h-7 w-auto' },
      md: { width: 180, height: 40, className: 'h-9 sm:h-10 w-auto' },
      lg: { width: 220, height: 48, className: 'h-11 sm:h-12 w-auto' }
    },
    studiox: {
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
      sm: { width: 120, height: 40, className: 'h-8 w-auto' },
      md: { width: 155, height: 52, className: 'h-10 w-auto' },
      lg: { width: 190, height: 64, className: 'h-12 w-auto' }
    },
    emblem: {
      sm: { width: 36, height: 31, className: 'h-7 w-auto' },
      md: { width: 48, height: 42, className: 'h-9 w-auto' },
      lg: { width: 60, height: 52, className: 'h-12 w-auto' }
    }
  };

  const isDark = theme === 'dark';

  const assetSources = {
    horizontal: isDark ? '/images/logo/olenna-horizontal-dark.webp' : '/images/logo/olenna-horizontal.webp',
    studiox: isDark ? '/images/logo/olenna-studiox-horizontal-dark.webp' : '/images/logo/olenna-studiox-horizontal.webp',
    stacked: isDark ? '/images/logo/olenna-logo-full-dark.webp' : '/images/logo/olenna-logo-full.webp',
    wordmark: isDark ? '/images/logo/olenna-horizontal-dark.webp' : '/images/logo/olenna-horizontal.webp',
    emblem: isDark ? '/images/logo/olenna-emblem.webp' : '/images/logo/olenna-emblem.webp'
  };

  const currentDim = dimensions[variant][size];
  const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const defaultSrc = `${normalizedBasePath}${assetSources[variant]}`;
  const effectiveSrc = customSrc !== undefined ? customSrc : defaultSrc;

  // Render SVG wrapper matching requested format
  const renderSvgContent = () => {
    const viewBoxes = {
      horizontal: '0 0 998 280',
      studiox: '0 0 998 280',
      stacked: '0 0 612 488',
      wordmark: '0 0 612 204',
      emblem: '0 0 325 282'
    };

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBoxes[variant]}
        role="img"
        aria-label={alt}
        width={currentDim.width}
        height={currentDim.height}
        className={cn(currentDim.className)}
        style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
      >
        <image
          href={effectiveSrc}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    );
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
            color: isDark ? 'rgba(255, 250, 247, 0.7)' : 'var(--olenna-color-brand-text-muted, #8E7A87)',
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
        aria-label="Olenna StudioX — Luxury Beauty, Fashion & Lifestyle"
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
