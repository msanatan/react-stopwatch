import React, { Component } from 'react';
import Timer from './Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App-Container'>
        <div className='App'>
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
