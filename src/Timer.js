import React, { Component } from 'react';
import { Form, ControlLabel } from 'react-bootstrap';

const Separator = () => {
  return <ControlLabel>:</ControlLabel>;
}

class Timer extends Component {
  render() {
    return (
      <Form inline>
        <ControlLabel>00</ControlLabel>
        <Separator />
        <ControlLabel>00</ControlLabel>
        <Separator />
        <ControlLabel>00</ControlLabel>
      </Form>
    );
  }
}

export default Timer;

