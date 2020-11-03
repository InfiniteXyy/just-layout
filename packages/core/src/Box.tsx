import React, { useMemo } from 'react';

type BoxProps<T extends keyof React.ReactHTML> = {
  spacer?: boolean; // Will try to fill the container
  sideBar?: boolean; // Will get 100% width in small screen
  minWidth?: number | string;
  minHeight?: number | string;
  border?: boolean | string;
  padding?: number | string;
  invert?: boolean; // invert color
  height?: number | string;
  width?: number | string; // if is set "auto", keep ratio by height
  aspectRatio?: string;

  // default as "div"
  as?: T;
  children?: React.ReactNode;
  elementProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
};

export function Box<T extends keyof React.ReactHTML>(props: BoxProps<T>): JSX.Element {
  const { as = 'div', children, spacer } = props;

  const style = useMemo(() => {
    if (spacer)
      return {
        flexGrow: 1,
      };
    return {};
  }, [spacer]);
  return React.createElement(as, { style }, children);
}
