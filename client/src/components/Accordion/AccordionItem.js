import React, { Component } from 'react';
import Collapse from 'react-collapse';

import styles from './styles.module.scss';
import Icon from '../Icon';
import AccordionIcon from './Icon';

class AccordionItem extends Component {
  render() {
    const {
      isExpanded,
      caption,
      onToggle,
      name,
      children,
      color,
      type
    } = this.props;
    return (
      <div>
        <button
          className={isExpanded ? styles.buttonActive : styles.button}
          onClick={() => onToggle(name)}
        >
          <AccordionIcon color={color} type={type} />
          {caption}
          <Icon
            styleName={isExpanded ? styles.iconActive : styles.icon}
            type="downArrow"
            color="#afb1be"
            size="15px"
          />
        </button>
        <Collapse isOpened={isExpanded}>{children}</Collapse>
      </div>
    );
  }
}

export default AccordionItem;
