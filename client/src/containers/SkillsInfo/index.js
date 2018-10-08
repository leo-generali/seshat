import { Container } from 'unstated';
import update from 'immutability-helper';

class SkillsInfoContainer extends Container {
  state = {
    skills: [
      {
        name: '',
        keywords: ['']
      }
    ]
  };

  handleChange = (event, skillIndex, keywordIndex) => {
    const { value } = event.target;

    const skills = update(this.state.skills, {
      [skillIndex]: { keywords: { [keywordIndex]: { $set: value } } }
    });

    this.setState({ skills });
  };

  handleChangeSkillName = (event, skillIndex) => {
    const { value } = event.target;

    const skills = update(this.state.skills, {
      [skillIndex]: { name: { $set: value } }
    });

    this.setState({ skills });
  };

  addSkill = (event, skillIndex) => {
    event.preventDefault();

    const skills = update(this.state.skills, {
      [skillIndex]: { keywords: { $push: [''] } }
    });

    this.setState({ skills });
  };

  addSkillSection = (event) => {
    event.preventDefault();
    const skill = {
      name: 'New Skill',
      keywords: ['']
    };
    const skills = update(this.state.skills, { $push: [skill] });
    this.setState({ skills });
  };

  removeSkillsSection = (event) => {
    event.preventDefault();
    const categories = this._filterCategories(event.target.name);
    const skills = this._filterSkills(categories);
    this.setState({ categories, skills });
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
      ...this.state.skills.slice(0, elementIndexToRemove),
      ...this.state.skills.slice(elementIndexToRemove + 1)
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
