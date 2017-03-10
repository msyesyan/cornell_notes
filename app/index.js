import React from 'react';
import { render } from 'react-dom';

const name = 'worlds';

const App = (props) => {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

function renderComponent(RootComponent) {
  render(
    <RootComponent name={name}/>,
    document.getElementById('app')
  );
}

if (module.hot) {
  module.hot.accept();
  renderComponent(App);
}
