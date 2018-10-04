import React from 'react';
import styles from './wrapper.module.scss';

const ButtonWrapper = ({
  category,
  removeSkillsSection,
  currentlyEditing,
  finishEditingSkillSection,
  beginEditingSkillSection,
  addSkill
}) => (
  <div className={styles.skillButtonWrapper}>
    <button
      name={category}
      className={styles.deleteButton}
      onClick={removeSkillsSection}
    >
      Del
    </button>
    <button
      name={category}
      className={styles.addSkillButton}
      onClick={addSkill}
    >
      Add Skill
    </button>
    {currentlyEditing === category ? (
      <button
        name={category}
        className={styles.doneButton}
        onClick={finishEditingSkillSection}
      >
        Done
      </button>
    ) : (
      <button
        name={category}
        className={styles.editButton}
        onClick={beginEditingSkillSection}
      >
        Edit
      </button>
    )}
  </div>
);

export default ButtonWrapper;
