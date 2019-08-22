import React from 'react';

const Hello = () => {
  // return(
  //   <div>
  //     <h1>Hello from js</h1>
  //   </div>
  // );

  return React.createElement('div', 
  {id : 'name', className: 'new'}, 
  React.createElement('h1', null, 'test jsx'));
}

export default Hello;