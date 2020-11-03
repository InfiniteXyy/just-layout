import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Row } from 'just-layout';
import styled from '@emotion/styled';

const Container = styled.div`
  ul {
    margin-block-start: 0;
    padding-inline-start: 0;
  }
`;
const Li = styled.li`
  list-style: none;
  padding: 10px 16px;
  border: 2px solid #4a4a4a;
  margin-bottom: 8px;
`;

const Image = styled.div`
  height: 120px;
  min-width: 200px;
  margin-bottom: 8px;
  background-color: #9b9b9b;
`;

function App() {
  return (
    <Container>
      <Row gap="8px" as="ul">
        <Li>Layout</Li>
        <Li>CSS</Li>
        <Li>JavaScript</Li>
      </Row>
      <Row>
        <Image />
        <Box spacer />
        <Row as="ul">
          <Li>Layout</Li>
          <Li>CSS</Li>
          <Li>JavaScript</Li>
        </Row>
      </Row>
      <Row>
        <Box spacer />
        <h1>center</h1>
        <Box spacer />
      </Row>
      <Row>
        <Image />
        <Box spacer minWidth="20em">
          <p>blah...</p>
        </Box>
      </Row>
      <Row>
        <Box sideBar>
          <Image />
        </Box>
        <Box spacer minWidth="20em">
          <p>blah...</p>
        </Box>
      </Row>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
