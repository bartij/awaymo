import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes,
  faUserCircle,
  faPlane,
  faCreditCard,
  faLifeRing,
  faPhone,
  faSignOutAlt,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)

ReactDOM.render(<App />, document.getElementById('root'));
