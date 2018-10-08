import React, { Component } from 'react';

// Resume Sections
import BasicInfo from '../BasicInfo';
import SkillsInfo from '../SkillsInfo';
import EducationInfo from '../EducationInfo';

// Sidebar
import { Accordion, AccordionItem } from '../../Accordion';

import styles from './styles.module.scss';

class ResumeEditorSidebar extends Component {
  render() {
    const hidden = { marginLeft: this.props.sidebarHidden ? '-24rem' : '0' };

    return (
      <div className={styles.sidebar} style={hidden}>
        <Accordion>
          <AccordionItem
            defaultOpen={false}
            name="Basic"
            caption="Basic Info"
            color="#f6d253"
            type="homeFilled"
          >
            <BasicInfo />
          </AccordionItem>
          <AccordionItem
            defaultOpen={false}
            name="Skills"
            caption="Skills"
            color="#ba9de8"
            type="bookFilled"
          >
            <SkillsInfo />
          </AccordionItem>
          <AccordionItem
            defaultOpen={false}
            name="Education"
            caption="Education"
            color="#f36562"
            type="penFilled"
          >
            <EducationInfo />
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default ResumeEditorSidebar;
