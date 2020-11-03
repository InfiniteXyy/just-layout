import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Row } from 'just-layout';
import styled from '@emotion/styled';
import { Section, ProductItem, Li, Image, Text, Input, Button, RefreshIcon } from './components';

import './style.css';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
  /* display: flex;
  flex-direction: column-reverse; */
  > h2 {
    text-align: center;
  }
  > h4 {
    text-align: center;
  }
`;

function App() {
  return (
    <Container>
      <h2>The EveryLayout implementation</h2>
      <h4>
        <a target="_blank" href="https://zhuanlan.zhihu.com/p/162112448">
          inspired by 陶文(zhihu)
        </a>
      </h4>
      <Section title="List of Links">
        <Row gap="8px" as="ul">
          <Li>Layout</Li>
          <Li>CSS</Li>
          <Li>JavaScript</Li>
        </Row>
      </Section>
      <Section title="Dock to left & right">
        <Row>
          <Image />
          <Box spacer />
          <Row as="ul">
            <Li>Layout</Li>
            <Li>CSS</Li>
            <Li>JavaScript</Li>
          </Row>
        </Row>
      </Section>
      <Section title="Row Center">
        <Row>
          <Box spacer />
          <h3 style={{ border: '1px solid black', padding: 10 }}>center</h3>
          <Box spacer />
        </Row>
      </Section>
      <Section title="Media Object">
        <Row>
          <Image />
          <Box spacer minWidth="20em">
            <Text />
          </Box>
        </Row>
      </Section>
      <Section title="Sidebar Media Object">
        <Row>
          <Box sidebar>
            <Image />
          </Box>
          <Box spacer minWidth="20em">
            <Text />
          </Box>
        </Row>
      </Section>
      <Section title="@todo Product List">
        <Row childMinWidth="30px">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Row>
      </Section>
      <Section title="@todo Product Grid">
        <Row childMinWidth="30px" grid>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Row>
      </Section>
      <Section title="Inline Form">
        <Row gap="0">
          <Box spacer minWidth="200px">
            <Input />
          </Box>
          <Box sidebar>
            <Button>submit</Button>
          </Box>
        </Row>
      </Section>
      <Section title="Input Group">
        <Row gap="0" overflow="shrink">
          <Box spacer minWidth="200px">
            <Input />
          </Box>
          <Box sidebar>
            <Button>submit</Button>
          </Box>
        </Row>
      </Section>
      <Section title="Sausage Links">
        <Row as="ul" overflow="hidden">
          <Li>Vue.js</Li>
          <Li>React.js</Li>
          <Li>Angular</Li>
          <Li>Svelte</Li>
          <Li>Ember</Li>
          <Li>Elm</Li>
          <Li>Hamburger.js</Li>
        </Row>
      </Section>
      <Section title="Reel Images">
        <Row overflow="scroll">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </Row>
      </Section>
      <Section title="Label with a Visual Cue">
        <button>
          <Row inline gap="2px">
            <RefreshIcon /> refresh
          </Row>
        </button>
      </Section>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
