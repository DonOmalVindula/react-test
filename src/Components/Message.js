import React, { Component } from 'react';

class Message extends Component {

  constructor() {
    super()
    this.state = {
      text: 'button not clicked'
    }
  }

  changeMessage() {
    this.setState({
      text: 'button clicked!!'
    })
  }

  render() {
    return(
      <div>
        <h1>
          {this.state.text}
        </h1>
        <button onClick={() => this.changeMessage()}>Click Here</button>
      </div> 
    )
  }
}

export default Message