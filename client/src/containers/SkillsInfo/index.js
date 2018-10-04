import { Container } from 'unstated';
import update from 'immutability-helper';

class SkillsInfoContainer extends Container {
  state = {
    categories: ['Front-end', 'Frameworks', 'Tools'],
    // prettier-ignore
    skills: {
      'Front-end': ['JavaScript', 'CSS3', 'HTML5'],
      'Frameworks': ['React', 'Knockout.js', 'jQuery'],
      'Tools': ['Git', 'Github/BitBucket (Version Control)', 'NPM']
    },
    currentlyEditing: ''
  };

  handleChange = ({ event, category, index }) => {
    const skills = update(this.state.skills, {
      [category]: { [index]: { $set: event.target.value } }
    });

    this.setState({ skills });
  };

  addSkillSection = (event) => {
    event.preventDefault();
    const test = { 'Back-end': ['Node', 'Rails'] };
    const categories = update(this.state.categories, { $push: ['Back-end'] });
    const skills = update(this.state.skills, { $merge: test });

    this.setState({ categories, skills });
  };

  addSkill = (event) => {
    event.preventDefault();
    const category = event.target.name;
    const skills = update(this.state.skills, { [category]: { $push: [''] } });

    this.setState({ skills });
  };

  finishEditingSkillSection = (event) => {
    event.preventDefault();
    const currentlyEditing = '';
    this.setState({ currentlyEditing });
  };

  beginEditingSkillSection = (event) => {
    event.preventDefault();
    const currentlyEditing = event.target.name;
    this.setState({ currentlyEditing });
  };

  editSkillName = (event) => {
    const index = this.state.categories.indexOf(event.target.name);
    const categories = [...this.state.categories];
    categories[index] = event.target.value;

    const skills = this._renameProperty(
      event.target.name,
      event.target.value,
      this.state.skills
    );

    this.setState({ categories, skills, currentlyEditing: event.target.value });
  };

  removeSkillsSection = (event) => {
    event.preventDefault();
    const categories = this._filterCategories(event.target.name);
    const skills = this._filterSkills(categories);
    this.setState({ categories, skills });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const currentlyEditing = '';
      this.setState({ currentlyEditing });
    }
  };

  removeSingleSkill = (event, skill, category) => {
    event.preventDefault();
    const elementIndexToRemove = this.state.skills[category].indexOf(skill);
    const skills = this._removeSingleSkill(elementIndexToRemove, category);
    this.setState({ skills });
  };

  _removeSingleSkill = (elementIndexToRemove, category) => {
    const slicedSkillList = [
      ...this.state.skills[category].slice(0, elementIndexToRemove),
      ...this.state.skills[category].slice(elementIndexToRemove + 1)
    ];

    const skills = update(this.state.skills, {
      [category]: { $set: slicedSkillList }
    });

    return skills;
  };

  _renameProperty = (
    oldProperty,
    newProperty,
    { [oldProperty]: old, ...otherProperties }
  ) => ({
    [newProperty]: old,
    ...otherProperties
  });

  _filterCategories = (target) => {
    const categories = this.state.categories.filter(
      (category) => category !== target
    );

    return categories;
  };

  _filterSkills = (categories) => {
    const skills = categories.reduce((object, key) => {
      return {
        ...object,
        [key]: this.state.skills[key]
      };
    }, {});

    return skills;
  };
}

export default SkillsInfoContainer;
