import React from 'react';

type RowProps = {
  gap?: string | number; // default is 1rem
  childMinWidth?: number; // Will display items vertically if cannot satisfy
  grid?: boolean; // Work with childMinWidth, will display like grid
  overflow?: 'shrink' | 'wrap' | 'hidden' | 'scroll'; // default is wrap
  inline?: boolean; // work as inline component
  children?: React.ReactNode;
};
export function Row(props: RowProps): JSX.Element {
  const { children } = props;
  return <div>{children}</div>;
}
