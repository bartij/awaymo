import React from 'react';
import MediaQuery from 'react-responsive';

import AppWrapper from './AppWrapper'
import Desktop from '../desktop/Main'
import { BrowserRouter as Router } from 'react-router-dom';


const DEVICE_BREAKPOINT = 992;

const App = () => {
  return (
    <AppWrapper>
      <Router history>
      <MediaQuery maxWidth={DEVICE_BREAKPOINT - 1}>
        mobile
      </MediaQuery>
      <MediaQuery minWidth={DEVICE_BREAKPOINT}>
        <Desktop />
      </MediaQuery>
      </Router>
    </AppWrapper>
  );
}

export default App;
