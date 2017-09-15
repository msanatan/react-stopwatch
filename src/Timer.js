import React, { Component } from 'react';
import { Form, ControlLabel } from 'react-bootstrap';
import './Timer.css';

const Separator = () => {
  return <ControlLabel className='Timer-number'>:</ControlLabel>;
}

class Timer extends Component {
  render() {
    return (
      <div className='Timer'>
        <div className='Timer-display'>
          <Form inline className='Timer-display-form'>
              <ControlLabel className='Timer-number'>00</ControlLabel>
              <Separator />
              <ControlLabel className='Timer-number'>00</ControlLabel>
              <Separator />
              <ControlLabel className='Timer-number'>00</ControlLabel>
          </Form>
        </div>
        <div className='Timer-buttons'>
        </div>
      </div>
    );
  }
}

export default Timer;

