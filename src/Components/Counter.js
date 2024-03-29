import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  //always use setState. NEVER modify the state directly
  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {console.log('Value', this.state.count)})
    // console.log(this.state.count)

    this.setState((prevSt, props) => ({
      count: prevSt.count + 1
    }), () => {console.log(this.state.count)})
    console.log(this.state.count)
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  
  
  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
