import React, { Component } from 'react';

import ResumeEditorSidebar from '../components/ResumeEditorSidebar';

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
      <ResumeEditorSidebar
      // sidebarHidden={this.state.sidebarHidden}
      // handleSidebar={this.handleSidebar}
      />
    );
  }
}

export default Resume;
