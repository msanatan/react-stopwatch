import React, { Component } from 'react';
import { Form, ControlLabel, Button, ButtonGroup } from 'react-bootstrap';
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
          <ButtonGroup justified>
            <ButtonGroup className='Timer-button-group'>
              <Button bsStyle='primary' bsSize='large' block className='Timer-button'>Start</Button>
            </ButtonGroup>
            <ButtonGroup className='Timer-button-group'>
              <Button bsSize='large' block className='Timer-button'>Reset</Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </div>
    );
  }

  leadingZero(num) {
    return num < 10 ? '0' + num : num;
  }
}

export default Timer;

