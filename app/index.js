import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './containers/App.js';

import './stylesheets/panel.scss';

if (module.hot) {
  module.hot.accept();
  render(
    <App />,
    document.getElementById('app')
  )
}
