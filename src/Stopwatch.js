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
      startTime: null,
      tick: null,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  getTimeSinceStart(startTime) {
    const now = Date.now();
    const difference = now - this.state.startTime;
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  startCounter = () => {
    clearInterval(this.state.tick);
    this.setState({
      startTime: Date.now(),
      tick: setInterval(() => this.getTimeSinceStart(this.props.startTime), 1000)
    });
  }

  stopCounter = () => {
    clearInterval(this.state.tick);
    this.setState({
      tick: null
    });
  }

  resetCounter = () => {
    clearInterval(this.state.tick);
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      tick: null
    });
  }

  resumeCounter = () => {
    clearInterval(this.state.tick);
    this.setState({
      tick: setInterval(() => this.getTimeSinceStart(this.props.startTime), 1000)
    });
  }

  render() {
    let buttons = null;
    let started = this.state.hours > 0 || this.state.minutes > 0 || this.state.seconds > 0;
    if (!this.state.tick && !started) {
      buttons = (
          <ButtonGroup justified>
            <ButtonGroup className='Stopwatch-button-group'>
              <Button bsStyle='info' bsSize='large' block
                className='Stopwatch-button'
                onClick={this.startCounter}>Start</Button>
            </ButtonGroup>
          </ButtonGroup>
        );
    } else if (!this.state.tick && started) {
      buttons = (
          <ButtonGroup justified>
            <ButtonGroup className='Stopwatch-button-group'>
              <Button bsStyle='info' bsSize='large' block
                className='Stopwatch-button'
                onClick={this.resumeCounter}>Resume</Button>
            </ButtonGroup>
            <ButtonGroup className='Stopwatch-button-group'>
                <Button bsSize='large' block
                  className='Stopwatch-button'
                  onClick={this.resetCounter}>Reset</Button>
              </ButtonGroup>
          </ButtonGroup>
        );
    } else {
        buttons = (
          <ButtonGroup justified>
            <ButtonGroup className='Stopwatch-button-group'>
              <Button bsStyle='danger' bsSize='large' block
                className='Stopwatch-button'
                onClick={this.stopCounter}>Stop</Button>
            </ButtonGroup>
            <ButtonGroup className='Stopwatch-button-group'>
                <Button bsSize='large' block
                  className='Stopwatch-button'
                  onClick={this.resetCounter}>Reset</Button>
              </ButtonGroup>
          </ButtonGroup>
        );
    }
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
            {buttons}
        </div>
      </div>
    );
  }

  leadingZero(num) {
    return num < 10 ? '0' + num : num;
  }
}

export default Stopwatch;

