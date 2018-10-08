import React, { Component, Fragment } from 'react';

import { Subscribe } from 'unstated';
import BasicInfoContainer from '../containers/BasicInfo';

import Wrapper from '../components/ResumeEditor/Wrapper';
import Sidebar from '../components/ResumeEditor/Sidebar';

// Debugging
import Debug from '../components/Debug';

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      sidebarHidden: false
    };

    this._handleSidebar = this._handleSidebar.bind(this);
  }

  _handleSidebar = () => {
    const sidebarHidden = !this.state.sidebarHidden;
    this.setState({ sidebarHidden });
  };

  render() {
    return (
      <Subscribe to={[BasicInfoContainer]}>
        {(resume) => (
          <Fragment>
            <Wrapper
              loadInitialStateBasicInfo={resume.loadInitialStateBasicInfo}
              {...this.props}
            >
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <Debug />
              </div>
            </Wrapper>
          </Fragment>
        )}
      </Subscribe>
    );
  }
}

export default Resume;
