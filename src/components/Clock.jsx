import React, { Component } from "react";
import PropTypes from 'prop-types'

const SECOND_PER_HOUR = 3600;
const MILLISECOND_PER_SECOND = 1000;

export default class Clock extends Component {
  static propTypes = {
    props: PropTypes.shape({
      utc: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    this.state = {
      time: this.displayTime(props.utc),
    };
  }

  displayTime(utc) {
    let date = new Date(new Date().getTime() + (utc * SECOND_PER_HOUR * MILLISECOND_PER_SECOND));
    let hours = (date.getUTCHours() < 10) ? '0' + date.getUTCHours() : date.getUTCHours();
    let minutes = (date.getUTCMinutes() < 10) ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
    let seconds = (date.getUTCSeconds() < 10) ? '0' + date.getUTCSeconds() : date.getUTCSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  tick() {
    this.setState({time: this.displayTime(this.props.utc)});
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__city-name">{this.props.city}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}
