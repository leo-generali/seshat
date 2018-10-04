import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
import SkillsInfoContainer from '../../../containers/SkillsInfo';

// Resume Editor Components
import Input from '../Input';
import ButtonWrapper from './ButtonWrapper';

import styles from './styles.module.scss';

const ResumeEditorSkillsInfo = () => {
  return (
    <Subscribe to={[SkillsInfoContainer]}>
      {(skillsInfo) => (
        <Fragment>
          {!!skillsInfo.state.categories &&
            skillsInfo.state.categories.map((category, index) => {
              return (
                <form key={index} id={category}>
                  <div className={styles.inputWrapper}>
                    <div
                      className={
                        skillsInfo.state.currentlyEditing === category
                          ? styles.titleWrapperEditing
                          : styles.titleWrapper
                      }
                    >
                      {skillsInfo.state.currentlyEditing === category ? (
                        <input
                          autoFocus
                          className={styles.categoryEdit}
                          onChange={skillsInfo.editSkillName}
                          onKeyPress={skillsInfo.handleKeyPress}
                          value={category}
                          name={skillsInfo.state.currentlyEditing}
                          type="text"
                        />
                      ) : (
                        <span className={styles.title}>{category}</span>
                      )}
                    </div>
                    <ButtonWrapper
                      category={category}
                      removeSkillsSection={skillsInfo.removeSkillsSection}
                      currentlyEditing={skillsInfo.state.currentlyEditing}
                      finishEditingSkillSection={
                        skillsInfo.finishEditingSkillSection
                      }
                      beginEditingSkillSection={
                        skillsInfo.beginEditingSkillSection
                      }
                      addSkill={skillsInfo.addSkill}
                    />
                  </div>
                  {skillsInfo.state.skills[category].map((skill, index) => (
                    <Input
                      key={index}
                      name={`${category}-${index}`}
                      category={category}
                      onChange={(event) =>
                        skillsInfo.handleChange({
                          event,
                          category,
                          index
                        })
                      }
                      removeSingleSkill={skillsInfo.removeSingleSkill}
                      value={skill}
                      type="text"
                      isEditing={skillsInfo.state.currentlyEditing === category}
                    />
                  ))}
                </form>
              );
            })}
          <button
            className={styles.addSkillSectionButton}
            onClick={skillsInfo.addSkillSection}
          >
            Add Group
          </button>
        </Fragment>
      )}
    </Subscribe>
  );
};

export default ResumeEditorSkillsInfo;
