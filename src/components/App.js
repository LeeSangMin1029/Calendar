import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Template from './Template';
import Content from './Content';

const App = () => {
  return (
    <Router>
      <Template>
        <Content />
      </Template>
    </Router>
  );
};

export default App;
