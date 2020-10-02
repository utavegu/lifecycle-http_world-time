import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddClocksForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    city: '',
    utc: '',
  };

  constructor(props) {
    super(props);
    this.handleAdd = props.onAdd;
  }
  
  handleChange = ({target}) => {
    this.setState(prevForm => ({...prevForm, [target.name]: target.value}));
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.handleAdd(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.city} type="text" id="city" name="city" required />
        <input onChange={this.handleChange} value={this.state.utc} type="text" id="utc" name="utc" required />
        <button type="submit">Добавить</button>
      </form>
    )
  }
}
