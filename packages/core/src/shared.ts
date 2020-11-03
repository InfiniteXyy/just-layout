import React from 'react';

type LayoutContext = {
  rowGap?: string;
  childMinWidth?: string;
};

export const LayoutContext = React.createContext<LayoutContext>({});
