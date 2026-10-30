import React from 'react';

export interface CollectionGridProps {
  columns?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({
  columns = 4,
  children,
  className,
  style
}) => {
  return (
    <div
      className={`olenna-collection-grid ${className || ''}`.trim()}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(var(--olenna-grid-min-width, ${columns === 4 ? '240px' : '300px'}), 1fr))`,
        gap: 'var(--olenna-grid-gap, 1.5rem)',
        width: '100%',
        ...style
      }}
    >
      {children}
    </div>
  );
};
