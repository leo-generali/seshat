import React, { Component } from 'react';

// Resume Sections
import BasicInfo from '../BasicInfo';
import SkillsInfo from '../SkillsInfo';

// Sidebar
import { Accordion, AccordionItem } from '../../Accordion';
// import Icon from '../Icon';

import styles from './styles.module.scss';

class ResumeEditorSidebar extends Component {
  render() {
    const hidden = { marginLeft: this.props.sidebarHidden ? '-24rem' : '0' };

    return (
      <div className={styles.sidebar} style={hidden}>
        <Accordion>
          <AccordionItem defaultOpen={true} name="Basic" caption="Basic Info">
            <BasicInfo />
          </AccordionItem>
          <AccordionItem defaultOpen={false} name="Skills" caption="Skills">
            <SkillsInfo />
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default ResumeEditorSidebar;