import React, { Component, Fragment } from 'react';

import { Subscribe } from 'unstated';
import BasicInfoContainer from '../containers/BasicInfo';

import Wrapper from '../components/ResumeEditor/Wrapper';
import Sidebar from '../components/ResumeEditor/Sidebar';

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
              <Sidebar />
            </Wrapper>
          </Fragment>
        )}
      </Subscribe>
    );
  }
}

export default Resume;
