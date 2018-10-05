import { Container } from 'unstated';

class BasicInfoContainer extends Container {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    linkedIn: '',
    phoneNumber: '',
    github: '',
    website: ''
  };

  loadInitialStateBasicInfo = ({ basic_info }) => {
    this.setState({
      firstName: basic_info.first_name,
      lastName: basic_info.last_name,
      emailAddress: basic_info.email,
      linkedIn: basic_info.linkedin,
      phoneNumber: basic_info.tel,
      github: basic_info.github,
      website: basic_info.website
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
}

export default BasicInfoContainer;
