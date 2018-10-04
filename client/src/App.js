import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import { Home, Resume } from './pages';

class App extends Component {
  componentDidMount() {
    window
      .fetch('/api/basic_infos')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Router>
        <Home path="/" />
        <Resume path="resume" />
      </Router>
    );
  }
}

export default App;
