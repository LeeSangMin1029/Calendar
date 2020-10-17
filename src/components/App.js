import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Template from './Template';
import Content from './Content';

import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

const App = () => {
  return (
    <Router>
      <Global />
      <Template>
        <Content />
      </Template>
    </Router>
  );
};

export default App;
