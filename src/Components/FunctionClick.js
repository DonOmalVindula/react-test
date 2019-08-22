import React from 'react'

function FunctionClick() {

  function clickHandler() {
    console.log("Button Clicked")
  }
  
  return (
    //dont use paranthesis for the clickHandler() it will make only a function call and not the function
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
