import React, { useMemo } from 'react';
import { LayoutContext } from './shared';
import { jsx, css, CSSObject } from '@emotion/core';

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

function getOverflowStyle(overflow: Exclude<RowProps<any>['overflow'], undefined>): CSSObject {
  switch (overflow) {
    case 'hidden':
      return {
        overflow: 'hidden',
      };
    case 'scroll':
      return {
        overflow: 'auto',
      };
    case 'shrink':
      return {
        flexWrap: 'nowrap',
      };
    case 'wrap':
      return {
        flexWrap: 'wrap',
      };
  }
}
export function Row<T extends keyof React.ReactHTML>(props: RowProps<T>): JSX.Element {
  const { as = 'div', children, grid, gap = '1rem', overflow = 'wrap', childMinWidth } = props;

  const style = {
    display: 'flex',
    columnGap: gap,
    alignItems: 'start',
    ...getOverflowStyle(overflow),
  };

  return React.createElement(
    LayoutContext.Provider,
    { value: { rowGap: gap, childMinWidth } },
    jsx(as, { css: css(style) }, children)
  );
}
