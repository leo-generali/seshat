import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Home, Resume } from './pages';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Resume path="resume" />
        <Resume path="resume/:resumeId" />
      </Router>
    );
  }
}

export default Routes;
