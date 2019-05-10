import React from 'react';
import MediaQuery from 'react-responsive';

import AppWrapper from './AppWrapper'

const DEVICE_BREAKPOINT = 992;

const App = () => {
  return (
    <AppWrapper>
      <MediaQuery maxWidth={DEVICE_BREAKPOINT - 1}>
        mobile
      </MediaQuery>
      <MediaQuery minWidth={DEVICE_BREAKPOINT}>
        desktop
      </MediaQuery>
    </AppWrapper>
  );
}

export default App;
