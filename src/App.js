import React, { Component } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Timer from './Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='.App'>
        <Timer />
      </div>
    );
  }
}

export default App;
