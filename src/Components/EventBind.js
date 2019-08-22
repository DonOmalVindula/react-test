import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }

    //this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye'
  //   })
  //   console.log(this)
  // }

  clickHandler = () => {
    this.setState({
      message: 'Goodbye'
    })
  }
  
  render() {
    return (
      //arrow functions are more efficient 
      //than using bind() with the clickHandler
      //we can bind() the clickhandler in the constructor as well
      //or we can use an arrow function outside the render() function represented above
      //there are 4 approaches altogether
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click Event</button>
      </div>
    )
  }
}

export default EventBind
