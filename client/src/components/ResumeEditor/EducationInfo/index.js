import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';

import EducationInfoContainer from '../../../containers/EducationInfo';

// Resume Editor Components
import Input from '../../Input';
import Button from '../../Button';
import ButtonWrapper from '../../ButtonWrapper';
import Seperator from '../../Seperator';

const ResumeEditorEducationInfo = () => {
  return (
    <Subscribe to={[EducationInfoContainer]}>
      {(educationInfo) => (
        <Fragment>
          {educationInfo.state.schools.map((school, index) => (
            <Fragment key={index}>
              {index === 0 ? null : <Seperator />}
              <form>
                <Input
                  label={'School'}
                  value={school.name}
                  placeholder="Franklin & Marshall College"
                  name="name"
                  onChange={(event) => educationInfo.onChange(event, index)}
                />
                <Input
                  label={'Location'}
                  sub={true}
                  value={school.location}
                  placeholder="Lancaster, PA"
                  name="location"
                  onChange={(event) => educationInfo.onChange(event, index)}
                />
                <Input
                  label={'Degree'}
                  sub={true}
                  value={school.degree}
                  placeholder="BA"
                  name="degree"
                  onChange={(event) => educationInfo.onChange(event, index)}
                />
                <Input
                  label={'Major'}
                  sub={true}
                  value={school.major}
                  placeholder="Computer Science"
                  name="major"
                  onChange={(event) => educationInfo.onChange(event, index)}
                />
                <Input
                  label={'GPA'}
                  sub={true}
                  value={school.gpa}
                  placeholder="3.5"
                  name="gpa"
                  onChange={(event) => educationInfo.onChange(event, index)}
                />
                <Input
                  label={'Start'}
                  sub={true}
                  value={school.start}
                  placeholder="Sep. 2011"
                  name="start"
                  onChange={(event) => educationInfo.onChange(event, index)}
                />
                <Input
                  label={'Finish'}
                  sub={true}
                  value={school.finish}
                  placeholder="May 2015"
                  name="finish"
                  onChange={(event) => educationInfo.onChange(event, index)}
                />
              </form>
            </Fragment>
          ))}
          <ButtonWrapper>
            <Button type={'positive'} onClick={educationInfo.addSchool}>
              Add School
            </Button>
            <Button type={'negative'} onClick={educationInfo.removeSchool}>
              Remove School
            </Button>
          </ButtonWrapper>
        </Fragment>
      )}
    </Subscribe>
  );
};

export default ResumeEditorEducationInfo;
