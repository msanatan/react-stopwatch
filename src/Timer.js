import React, { Component } from 'react';
import { Form, FormControl } from 'react-bootstrap';

class Timer extends Component {
  render() {
    return (
      <Form inline>
        <FormControl
          placeholder="00">
        </FormControl>
        <span>:</span>
        <FormControl
          placeholder="00">
        </FormControl>
        <span>:</span>
        <FormControl
          placeholder="00">
        </FormControl>
      </Form>
    );
  }
}

export default Timer;

