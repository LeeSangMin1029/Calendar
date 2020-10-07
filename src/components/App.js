import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopFixedContent from './TopFixedContent';
import CalenderTemplate from './CalendarTemplate';
import BodyContent from './BodyContent';

const App = () => {
  return (
    <Router>
      <CalenderTemplate>
        <TopFixedContent />
        <BodyContent />
      </CalenderTemplate>
    </Router>
  );
};

export default App;
