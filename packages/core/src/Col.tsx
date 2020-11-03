import React from 'react';

type ColProps = {
  gap?: string; // default is 1rem
  overflow?: 'shrink' | 'wrap' | 'hidden' | 'scroll'; // default is hidden
};

export function Col(props: ColProps): JSX.Element {
  return <div>1</div>;
}
