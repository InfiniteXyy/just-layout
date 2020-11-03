import React from 'react';

type LayoutContext = {
  rowGap?: string | number;
};

export const LayoutContext = React.createContext<LayoutContext>({});
