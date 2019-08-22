import React, { Component } from 'react';
import './App.css';
import { Greet } from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Batman" color="Black">
          <p>This is child props</p>
        </Greet>
        <Greet name="Superman" color="Red">
          <button>Click</button>
        </Greet>
        <Greet/>
        <Welcome name="Tony Stark" hero="Iron Man"/>
        <Welcome name="Peter Parker" hero="Spider Man"/>
        <Welcome/>
        <Hello/>
      </div>
    );
  }
}

export default App;
