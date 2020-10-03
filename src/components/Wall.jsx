import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Clock from './Clock';
import {nanoid} from "nanoid"

export default class Wall extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="wall">
        {this.props.data.map((currentClock, currentID) =>
        <div className="wall__item" key={nanoid()}>
          <Clock 
            utc={currentClock.utc} 
            city={currentClock.city}
            key={nanoid()}
          />
          <button className="wall__remove-button" onClick={() => this.props.onRemove(currentID)}>Снять эти часы со стены</button>
        </div>
        )}
      </div>
    )
  }
}
