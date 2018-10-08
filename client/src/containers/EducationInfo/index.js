import { Container } from 'unstated';
import update from 'immutability-helper';

class EducationInfoContainer extends Container {
  state = {
    schools: [
      {
        name: '',
        location: '',
        degree: '',
        major: '',
        gpa: '',
        start: '',
        finish: ''
      }
    ]
  };

  addSchool = (event) => {
    event.preventDefault();

    const school = {
      name: '',
      location: '',
      degree: '',
      major: '',
      gpa: '',
      start: '',
      finish: ''
    };

    const schools = update(this.state.schools, { $push: [school] });

    this.setState({ schools });
  };

  removeSchool = (event) => {
    event.preventDefault();
    const len = this.state.schools.length;
    const schools = this.state.schools.slice(0, len - 1);
    this.setState({ schools });
  };

  onChange = (event, index) => {
    const { name, value } = event.target;

    const schools = update(this.state.schools, {
      [index]: { [name]: { $set: value } }
    });

    this.setState({ schools });
  };
}

export default EducationInfoContainer;
