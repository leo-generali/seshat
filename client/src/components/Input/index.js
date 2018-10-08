import React, { Component } from 'react';
import styles from './styles.module.scss';

class Input extends Component {
  shouldComponentUpdate(prevProps) {
    const didUpdate = prevProps.value === this.props.value;
    return !didUpdate;
  }

  render() {
    const { sub, label } = this.props;

    return (
      <div className={sub ? styles.subWrapper : styles.wrapper}>
        {sub && (
          <div className={styles.sub}>
            <span>•</span>
          </div>
        )}
        <div style={{ width: '100%' }}>
          {!!label && (
            <label className={sub ? styles.subLabel : styles.label}>
              {label}
            </label>
          )}
          <input
            className={sub ? styles.subInput : styles.input}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

export default Input;
