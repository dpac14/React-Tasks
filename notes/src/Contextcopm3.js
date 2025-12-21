import React from 'react';
import { UserContext } from './App';

function Contextcopm3() {
  return (
    <div>
      <UserContext.Consumer>
{name=>{
    return <h1>Hello {name} </h1>
}}
      </UserContext.Consumer>
    </div>
  );
}

export default Contextcopm3;
