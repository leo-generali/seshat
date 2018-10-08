import React, { Component } from 'react';
import Input from '../../Form/Input';

import styles from './styles.module.scss';
import Icon from '../../Icon';

class SkillsFormGroup extends Component {
  render() {
    const {
      name,
      onChange,
      value,
      type,
      isEditing,
      removeSingleSkill,
      category,
      placeholder
    } = this.props;

    return (
      <div className={styles.container}>
        <Input
          className={styles.input}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          place={placeholder}
        />
        {isEditing && (
          <DeleteIcon
            skill={value}
            category={category}
            removeSingleSkill={removeSingleSkill}
          />
        )}
      </div>
    );
  }
}

const DeleteIcon = ({ skill, category, removeSingleSkill }) => {
  return (
    <button
      className={styles.deleteButton}
      onClick={(event) => removeSingleSkill(event, skill, category)}
    >
      <Icon type="xCircle" />
    </button>
  );
};

export default SkillsFormGroup;
