import React from 'react';
import Icon from '../../Icon';

// Styles
import styles from './styles.module.scss';

const AccordionIcon = ({ color, type, hovering }) => {
  const style = { backgroundColor: color };

  return (
    <div className={hovering ? styles.iconHovering : styles.icon} style={style}>
      <Icon type={type} color="#fff" size="18" />
    </div>
  );
};

export default AccordionIcon;
