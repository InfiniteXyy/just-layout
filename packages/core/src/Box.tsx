import React, { useContext, useMemo } from 'react';
import { LayoutContext } from './shared';
import { jsx, css } from '@emotion/core';

type BoxProps<T extends keyof React.ReactHTML> = {
  spacer?: boolean; // Will try to fill the container
  sidebar?: boolean; // Will get 100% width in small screen
  minWidth?: string;
  minHeight?: string;
  border?: boolean | string;
  padding?: string;
  invert?: boolean; // invert color
  height?: string;
  width?: string; // if is set "auto", keep ratio by height
  aspectRatio?: string;

  // default as "div"
  as?: T;
  children?: React.ReactNode;
};

export function Box<T extends keyof React.ReactHTML>(props: BoxProps<T>): JSX.Element {
  const { as = 'div', children, spacer, minWidth, sidebar, border, padding } = props;

  const { rowGap, childMinWidth } = useContext(LayoutContext);

  const style = {
    flexGrow: spacer ? 9999 : sidebar ? 1 : undefined,
    flexBasis: childMinWidth ?? 0,
    flexShrink: 0,
    marginLeft: children ? undefined : '-' + rowGap,
    minWidth,
    border: border ? '2px solid #4a4a4a' : undefined,
    padding,
  };

  return jsx(as, { css: css(style) }, children);
}
