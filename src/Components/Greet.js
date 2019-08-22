import React from 'react';

// function Greet() {
//     return <h1>Hello!!</h1>
// }
const Greet = props => {
  const {name, color} = props
  return (
    <div>
      <h1>Test {name} color = {color}</h1>
    </div>
  )
}

export default Greet