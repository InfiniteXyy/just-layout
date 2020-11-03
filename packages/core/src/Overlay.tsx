import React from 'react';

type OverlayProps = {
  base?: boolean; // if set base, then will render to the full view port
  confined?: "both" | "width" | "height" // default is both
}
export function Overlay(props: OverlayProps): JSX.Element {
  return <div>1</div>;
}
