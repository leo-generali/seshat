import React, { Children, Component, cloneElement, Fragment } from 'react';
import styles from './styles.module.scss';

class Accordion extends Component {
  constructor(props) {
    super(props);
    let state = {
      openedHash: {}
    };

    Children.toArray(props.children).forEach((child) => {
      if (child) {
        state.openedHash[child.props.name] = !!child.props.defaultOpen;
      }
    });

    this.state = state;
  }

  onToggle = (name) => {
    const openedHash = { ...this.state.openedHash };

    // Object.keys(openedHash).forEach((child) => {
    //   openedHash[child] = false;
    // });

    // openedHash[name] = true;

    this.setState({ openedHash: { ...openedHash, [name]: !openedHash[name] } });
    // this.setState({ openedHash });
  };

  _expandAll = () => {
    const openedHash = { ...this.state.openedHash };
    Object.keys(openedHash).forEach((key) => (openedHash[key] = true));
    this.setState({ openedHash });
  };

  _collapseAll = () => {
    const openedHash = { ...this.state.openedHash };
    Object.keys(openedHash).forEach((key) => (openedHash[key] = false));
    this.setState({ openedHash });
  };

  componentWillReceiveProps(nextProps) {
    const openedHash = { ...this.state.openedHash };
    Children.toArray(nextProps.children)
      .filter((child) => child)
      .forEach((child) => {
        if (openedHash[child.props.name] == null) {
          openedHash[child.props.name] = !!child.props.defaultOpen;
        }
      });

    this.setState({ openedHash });
  }

  render() {
    const { openedHash } = this.state;
    const { children } = this.props;

    return (
      <Fragment>
        <button className={styles.expandButton} onClick={this._expandAll}>
          <span>Expand All</span>
        </button>
        <button className={styles.expandButton} onClick={this._collapseAll}>
          <span>Collapse All</span>
        </button>
        {Children.toArray(children)
          // .filter((c) => c.type !== 'div'
          .map((child) =>
            cloneElement(child, {
              isExpanded: openedHash[child.props.name],
              onToggle: this.onToggle
            })
          )}
      </Fragment>
    );
  }
}

export default Accordion;
