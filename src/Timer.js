import React, { Component } from 'react';
import { Form, ControlLabel } from 'react-bootstrap';
import './Timer.css';

const Separator = () => {
  return <ControlLabel className='Timer-number'>:</ControlLabel>;
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  render() {
    return (
      <div className='Timer'>
        <div className='Timer-display'>
          <Form inline className='Timer-display-form'>
              <ControlLabel className='Timer-number'>{this.leadingZero(this.state.hours)}</ControlLabel>
              <Separator />
              <ControlLabel className='Timer-number'>{this.leadingZero(this.state.minutes)}</ControlLabel>
              <Separator />
              <ControlLabel className='Timer-number'>{this.leadingZero(this.state.seconds)}</ControlLabel>
          </Form>
        </div>
        <div className='Timer-buttons'>
        </div>
      </div>
    );
  }

  leadingZero(num) {
    return num < 10 ? '0' + num : num;
  }
}

export default Timer;

