import React from 'react';

type RowProps = {
  gap?: number; // default is 1rem
  childMinWidth?: number; // Will display items vertically if cannot satisfy
  grid?: boolean; // Work with childMinWidth, will display like grid
  overflow?: "shrink" | "wrap" | "hidden" | "scroll" // default is wrap
  inline?: boolean; // work as inline component
}
export function Row(props: RowProps): JSX.Element {
  return <div>1</div>;
}
