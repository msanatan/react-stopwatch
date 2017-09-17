import React, { Component } from 'react';
import { Form, ControlLabel, Button, ButtonGroup } from 'react-bootstrap';
import './Stopwatch.css';

const Separator = () => {
  return <ControlLabel className='Stopwatch-number'>:</ControlLabel>;
}

class Stopwatch extends Component {
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
      <div className='Stopwatch'>
        <div className='Stopwatch-display'>
          <Form inline className='Stopwatch-display-form'>
            <ControlLabel className='Stopwatch-number'>{this.leadingZero(this.state.hours)}</ControlLabel>
            <Separator />
            <ControlLabel className='Stopwatch-number'>{this.leadingZero(this.state.minutes)}</ControlLabel>
            <Separator />
            <ControlLabel className='Stopwatch-number'>{this.leadingZero(this.state.seconds)}</ControlLabel>
          </Form>
        </div>
        <div className='Stopwatch-buttons'>
          <ButtonGroup justified>
            <ButtonGroup className='Stopwatch-button-group'>
              <Button bsStyle='info' bsSize='large' block className='Stopwatch-button'>Start</Button>
            </ButtonGroup>
            <ButtonGroup className='Stopwatch-button-group'>
              <Button bsSize='large' block className='Stopwatch-button'>Reset</Button>
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

export default Stopwatch;

