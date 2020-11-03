import React, { useMemo } from 'react';
import { LayoutContext } from './shared';

type RowProps<T extends keyof React.ReactHTML> = {
  gap?: string; // default is 1rem
  childMinWidth?: string; // Will display items vertically if cannot satisfy
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
      alignItems: 'start',
    };
  }, [gap, overflow]);

  return React.createElement(
    LayoutContext.Provider,
    { value: { rowGap: gap } },
    React.createElement(as, { style }, children)
  );
}
