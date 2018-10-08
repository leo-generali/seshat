import React from 'react';
import styles from './styles.module.scss';

const ButtonWrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default ButtonWrapper;
