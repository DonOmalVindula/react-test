import React from 'react';

// function Greet() {
//     return <h1>Hello!!</h1>
// }
  export const Greet = (props) => {
    console.log(props.name)
    return (
      <div>
        <h1>Test {props.name} color = {props.color}</h1>
        {props.children}  
      </div>
    )
  }
//export default Greet