import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
import BasicInfoContainer from '../../../containers/BasicInfo';

// Resume Editor Components
import Input from '../Input';

const ResumeEditorBasicInfo = () => {
  return (
    <Subscribe to={[BasicInfoContainer]}>
      {(basicInfo) => (
        <Fragment>
          {Object.keys(basicInfo.state).map((input, index) => (
            <Input
              key={index}
              name={input}
              onChange={basicInfo.handleChange}
              value={basicInfo.state[input]}
              type="text"
            />
          ))}
        </Fragment>
      )}
    </Subscribe>
  );
};

export default ResumeEditorBasicInfo;

// Ignore below - saving for potential later use
//
//   <Input
//             name="firstName"
//             onChange={basicInfo.handleChange}
//             value={basicInfo.state.firstName}
//             type="text"
//           />
//           <Input
//             name="lastName"
//             onChange={basicInfo.handleChange}
//             value={basicInfo.state.lastName}
//             type="text"
//           />
//           <Input
//             name="emailAddress"
//             onChange={basicInfo.handleChange}
//             value={basicInfo.state.emailAddress}
//             type="email"
//           />
//           <Input
//             name="linkedIn"
//             onChange={basicInfo.handleChange}
//             value={basicInfo.state.linkedIn}
//             type="text"
//           />
//           <Input
//             name="phoneNumber"
//             onChange={basicInfo.handleChange}
//             value={basicInfo.state.phoneNumber}
//             type="tel"
//           />
//           <Input
//             name="github"
//             onChange={basicInfo.handleChange}
//             value={basicInfo.state.github}
//             type="text"
//           />
//           <Input
//             name="website"
//             onChange={basicInfo.handleChange}
//             value={basicInfo.state.github}
//             type="text"
//           />
