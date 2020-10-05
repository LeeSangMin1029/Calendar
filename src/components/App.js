import React from 'react';
import TopFixedContent from './TopFixedContent';
import CalenderTemplate from './CalendarTemplate';
import BodyContent from './BodyContent';

const App = () => {
  return (
    <CalenderTemplate>
      <TopFixedContent />
      <BodyContent />
    </CalenderTemplate>
  );
};

export default App;
