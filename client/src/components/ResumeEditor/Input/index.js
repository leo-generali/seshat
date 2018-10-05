import React, { Component } from 'react';
import styles from './styles.module.scss';
import Icon from '../../Icon';

class ResumeEditorInput extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

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
        <input
          className={styles.input}
          name={name}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          ref={this.inputRef}
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

// export default ResumeEditorInput;

// const ResumeEditorInput = ({
//   name,
//   onChange,
//   value,
//   type,
//   isEditing,
//   removeSingleSkill,
//   category,
//   placeholder
// }) => {
//   return (

//   );
// };

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
