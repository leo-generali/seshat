import React, { Component } from 'react';

// Resume Sections
// import ResumeEditorBasicInfo from '../ResumeEditorBasicInfo';
// import ResumeEditorSkillsInfo from '../ResumeEditorSkillsInfo';

// Sidebar
import { Accordion, AccordionItem } from '../Accordion';
// import Icon from '../Icon';

import styles from './styles.module.scss';

class ResumeEditorSidebar extends Component {
  render() {
    const hidden = { marginLeft: this.props.sidebarHidden ? '-24rem' : '0' };

    return (
      <div className={styles.sidebar} style={hidden}>
        <Accordion>
          <AccordionItem defaultOpen={true} name="Basic" caption="Basic Info">
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
          </AccordionItem>
          <AccordionItem defaultOpen={false} name="Skills" caption="Skills">
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default ResumeEditorSidebar;
