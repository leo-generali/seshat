import React, { Component, Fragment } from 'react';
import { Router } from '@reach/router';
import { Home, Resume } from './pages';

import { Subscribe } from 'unstated';
import BasicInfoContainer from './containers/BasicInfo';

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
