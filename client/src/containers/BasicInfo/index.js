import { Container } from 'unstated';

class BasicInfoContainer extends Container {
  state = {
    firstName: 'Leo',
    lastName: 'Generali',
    emailAddress: '',
    linkedIn: '',
    phoneNumber: '',
    github: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

export default BasicInfoContainer;
