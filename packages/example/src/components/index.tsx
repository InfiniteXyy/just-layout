/* @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { Box } from 'just-layout';

const Image = styled.div`
  height: 120px;
  min-width: 200px;
  margin-bottom: 8px;
  background-color: #9b9b9b;
`;

const Li = styled.li`
  list-style: none;
  padding: 10px 16px;
  border: 2px solid #4a4a4a;
  margin-bottom: 8px;
`;

const Divider = styled.div`
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px dashed #9b9b9b;
`;

const Section: React.FC<{ title: string }> = (props) => {
  const { children, title } = props;
  return (
    <div>
      <h3
        css={css`
          text-align: center;
        `}
      >
        {title}
      </h3>
      <div>{children}</div>
      <Divider />
    </div>
  );
};

function Text() {
  return (
    <div>
      Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  );
}

const ProductItem = () => (
  <Box spacer>
    <div css={css({ border: '2px solid #4a4a4a', marginBottom: 10, padding: 10 })}>Product</div>
  </Box>
);

const Input = styled.input`
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
`;

const RefreshIcon = () => (
  <svg focusable="false" width="1em" height="1em" viewBox="0 0 24 24">
    <path
      d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export { Image, Li, Section, ProductItem, Text, Input, Button, RefreshIcon };
