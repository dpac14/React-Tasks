import React from 'react';

function Hook2() {
    const[ count,setCount]=React.useState(0);
  return (
    <div>
        <h1 align='center'>{count}</h1>
      <button onClick={()=>setCount(0)}>Rest </button>
      <button onClick={()=>setCount(count+1)}>Increment by 1 </button>
      <button onClick={()=>setCount(count-1)}>Decrement by 1 </button>
      <button onClick={()=>setCount(count+5)}>Increment by 5 </button>
      <button onClick={()=>setCount(count-5)}>Decrement by 5 </button>
    </div>
  );
}

export default Hook2;
