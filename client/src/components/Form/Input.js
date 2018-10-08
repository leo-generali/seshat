import React, { Component } from 'react';

class Input extends Component {
  shouldComponentUpdate(prevProps) {
    const didUpdate = prevProps.value === this.props.value;
    return !didUpdate;
  }

  render() {
    return <input {...this.props} />;
  }
}

export default Input;
