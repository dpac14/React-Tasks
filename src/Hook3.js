import React, { useState } from 'react';

function Hook3() {
    const[text,setText]=useState({firstname:'',lastname:''})
  return (
    <div>
        <center>
      <input type='text'  value={text.firstname} onChange={e=>setText({...text, firstname: e.target.value})}/>
      <input type='text' value={text.lastname} onChange={e=>setText({...text, lastname: e.target.value})}/>
      <h1>{text.firstname}{text.lastname}</h1>
      </center>
    </div>
  );
}

export default Hook3;
