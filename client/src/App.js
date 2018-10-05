import React, { Component } from 'react';
import { Provider } from 'unstated';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Provider>
        <Routes />
      </Provider>
    );
  }
}

export default App;
