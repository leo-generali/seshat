import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
import SkillsInfoContainer from '../../../containers/SkillsInfo';

// Resume Editor Components
import Input from '../../Form/Input';
import Button from '../../Button';
import ButtonWrapper from '../../ButtonWrapper';

// Styles
import styleInput from '../../../styles/Form/input.module.scss';
import styles from './styles.module.scss';

const ResumeEditorSkillsInfo = () => {
  return (
    <Subscribe to={[SkillsInfoContainer]}>
      {(skillsInfo) => (
        <Fragment>
          {skillsInfo.state.skills.map((skill, skillIndex) => (
            <form key={skillIndex}>
              <span className={styles.title}>{skill.name}</span>
              {skill.keywords.map((keyword, keywordIndex) => (
                <Input
                  key={keywordIndex}
                  className={styleInput.input}
                  value={keyword}
                  type="text"
                  onChange={(event) =>
                    skillsInfo.handleChange(event, skillIndex, keywordIndex)
                  }
                />
              ))}
              <button
                className={styles.addSkillSectionButton}
                name={skill.name}
                onClick={(event) => skillsInfo.addSkill(event, skillIndex)}
              >
                Add Skill
              </button>
            </form>
          ))}
          <ButtonWrapper>
            <Button onClick={skillsInfo.addSkillSection}>Add Group</Button>
            <Button onClick={skillsInfo.addSkillSection}>Add Group</Button>
          </ButtonWrapper>
        </Fragment>
      )}
    </Subscribe>
  );
};

export default ResumeEditorSkillsInfo;
