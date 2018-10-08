import React from 'react';
import { Subscribe } from 'unstated';
import BasicInfoContainer from '../../containers/BasicInfo';
import SkillsInfoContainer from '../../containers/SkillsInfo';
import EducationInfoContainer from '../../containers/EducationInfo';

const Debug = () => {
  return (
    <Subscribe
      to={[BasicInfoContainer, SkillsInfoContainer, EducationInfoContainer]}
    >
      {(basic, skill, education) => (
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            marginLeft: '20px'
          }}
        >
          Debug
          <pre>{JSON.stringify(basic, null, 2)}</pre>
          <pre>{JSON.stringify(skill, null, 2)}</pre>
          <pre>{JSON.stringify(education, null, 2)}</pre>
        </div>
      )}
    </Subscribe>
  );
};

export default Debug;
