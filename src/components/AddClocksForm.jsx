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
      <form className="add-clock-form" onSubmit={this.handleSubmit}>
        <p className="add-clock-form__item">
          <label htmlFor="city">Название</label>
          <input onChange={this.handleChange} value={this.state.city} type="text" id="city" name="city" required />
        </p>
        <p className="add-clock-form__item">
          <label htmlFor="utc">Временная зона</label>
          <input onChange={this.handleChange} value={this.state.utc} type="text" id="utc" name="utc" pattern="(\+?(1[0-2]|\d))|(^\+\d)|(-?(1[0-2]|\d))" required />
        </p>
        <button className="add-clock-form__button" type="submit">Добавить</button>
      </form>
    )
  }
}
