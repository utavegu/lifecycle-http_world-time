import React, { Component } from 'react'
import AddClocksForm from './AddClocksForm'
import ClockModel from '../models/ClockModel'
import Wall from './Wall'

export default class WorldTimeCB extends Component {

  state = {
    clocks: [
      new ClockModel("Москва", 3),
      new ClockModel("Екатеринбург", 5),
      new ClockModel("Торонто", -4),
      new ClockModel("Амстердам", 2),
      new ClockModel("Токио", 9),
      new ClockModel("Аляска", -8),
    ]
  };

  handleAdd = (data) => {
    this.setState(prevState => [...prevState.clocks, new ClockModel(data.city, data.utc)])
  }

  handleRemove = id => {
    this.setState(prevState => prevState.clocks.filter((currentItem, currentId) => currentId !== id));
  }

  render() {
    return (
      <React.Fragment>
        <AddClocksForm onAdd={this.handleAdd} />
        <Wall data={this.state.clocks} onRemove={this.handleRemove} />
      </React.Fragment>
    )
  }
}
