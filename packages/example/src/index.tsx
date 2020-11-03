import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Row } from 'just-layout';

function App() {
  return (
    <div>
      <Row gap="2em">
        <div>Layout</div>
        <div>CSS</div>
        <div>JavaScript</div>
      </Row>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
