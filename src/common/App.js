import React from 'react';
import MediaQuery from 'react-responsive';

import AppWrapper from './AppWrapper'
import Desktop from '../desktop'
import Mobile from '../mobile'
import { BrowserRouter as Router } from 'react-router-dom';


const DEVICE_BREAKPOINT = 992;

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <MediaQuery maxWidth={DEVICE_BREAKPOINT - 1}>
          <Mobile />
        </MediaQuery>
        <MediaQuery minWidth={DEVICE_BREAKPOINT}>
          <Desktop />
        </MediaQuery>
      </Router>
    </AppWrapper>
  );
}

export default App;
