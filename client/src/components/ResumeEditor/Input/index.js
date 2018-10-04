import React from 'react';
import styles from './styles.module.scss';
import Icon from '../../Icon';

const ResumeEditorInput = ({
  name,
  onChange,
  value,
  type,
  isEditing,
  removeSingleSkill,
  category
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={type}
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
};

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

export default ResumeEditorInput;
