import React, { Component } from 'react';
import './App.css';
import Greet  from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent/>
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <Greet name="Batman" color="Black">
          <p>This is child props</p>
        </Greet>
        <Greet name="Superman" color="Red">
          <button>Click</button>
        </Greet>
        <Greet/> */}
        {/* <Welcome name="Tony Stark" hero="Iron Man"/>
        <Welcome name="Peter Parker" hero="Spider Man"/>
        <Welcome/> */}
        {/* <Message/>
        <Counter/> */}
      </div>
    );
  }
}

export default App;
