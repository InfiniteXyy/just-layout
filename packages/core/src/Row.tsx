import React, { useMemo } from 'react';

type RowProps<T extends keyof React.ReactHTML> = {
  gap?: string | number; // default is 1rem
  childMinWidth?: number; // Will display items vertically if cannot satisfy
  grid?: boolean; // Work with childMinWidth, will display like grid
  overflow?: 'shrink' | 'wrap' | 'hidden' | 'scroll'; // default is wrap
  inline?: boolean; // work as inline component

  // default as "div"
  as?: T;
  children?: React.ReactNode;
  elementProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
};

export function Row<T extends keyof React.ReactHTML>(props: RowProps<T>): JSX.Element {
  const { as = 'div', children, grid, gap = '1rem', overflow = 'wrap' } = props;

  const style = useMemo(() => {
    return {
      display: 'flex',
      columnGap: gap,
      flexWrap: overflow === 'wrap' ? 'wrap' : undefined,
      alignItems: 'start'
    };
  }, [gap, overflow]);

  return React.createElement(as, { style }, children);
}
