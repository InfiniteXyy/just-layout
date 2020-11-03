import React, { useContext, useMemo } from 'react';
import { LayoutContext } from './shared';

type BoxProps<T extends keyof React.ReactHTML> = {
  spacer?: boolean; // Will try to fill the container
  sideBar?: boolean; // Will get 100% width in small screen
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
  elementProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
};

export function Box<T extends keyof React.ReactHTML>(props: BoxProps<T>): JSX.Element {
  const { as = 'div', children, spacer, minWidth, sideBar } = props;

  const { rowGap } = useContext(LayoutContext);

  const style = useMemo(() => {
    return {
      flexGrow: spacer  ? 1 : undefined,
      marginLeft: children ? undefined : '-' + rowGap,
      minWidth,
    };
  }, [spacer, rowGap, children, minWidth]);

  return React.createElement(as, { style }, children);
}
