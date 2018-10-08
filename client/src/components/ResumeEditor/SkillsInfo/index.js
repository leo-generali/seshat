import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
import SkillsInfoContainer from '../../../containers/SkillsInfo';

// Resume Editor Components
import Input from '../../Input';
// import Button from '../../Button';
// import ButtonWrapper from '../../ButtonWrapper';

// Styles
import styles from './styles.module.scss';

const ResumeEditorSkillsInfo = () => {
  return (
    <Subscribe to={[SkillsInfoContainer]}>
      {(skillsInfo) => (
        <Fragment>
          {skillsInfo.state.skills.map((skill, skillIndex) => (
            <form key={skillIndex}>
              <Input
                label={'Category'}
                key={skillIndex}
                value={skill.name}
                type="text"
                onChange={(event) =>
                  skillsInfo.handleChangeSkillName(event, skillIndex)
                }
              />
              {skill.keywords.map((keyword, keywordIndex) => (
                <Input
                  sub={true}
                  key={keywordIndex}
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
          {/* <ButtonWrapper>
            <Button onClick={skillsInfo.addSkillSection}>Add Group</Button>
            <Button onClick={skillsInfo.addSkillSection}>Add Group</Button>
          </ButtonWrapper> */}
        </Fragment>
      )}
    </Subscribe>
  );
};

export default ResumeEditorSkillsInfo;
