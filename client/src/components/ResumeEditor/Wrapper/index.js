import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Wrapper extends Component {
  componentDidMount() {
    const { resumeId, loadInitialStateBasicInfo } = this.props;

    if (!!resumeId) {
      console.log("on page that's linked to a resume! 🎉");
      axios.get(`/api/resumes/${resumeId}`).then((res) => {
        const { data } = res;
        loadInitialStateBasicInfo(data);
      });
    }
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default Wrapper;
