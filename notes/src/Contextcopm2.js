import React, { useContext } from 'react';
import { PSKContext, UserContext } from './App';

function Contextcopm2() {
    const user=useContext(UserContext)
    const user1=useContext(PSKContext)
  return (
    <div>
      {user}-{user1}
    </div>
  );
}

export default Contextcopm2;
