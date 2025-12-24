import React, { useMemo, useState } from 'react';

function Usermemo() {
  const [count, setCount] = useState(0);
  const increment = (() => {
    setCount(count + 1)
  })
  const EvenOdd = useMemo(() => {
    var i = 0;
    while (i < 2000) {
      return count % 2 === 0;
      i++;
    }
  }, [count])


  return (
    <div>
      <button onClick={increment}>Counter</button>
      <h1>{count}:- {EvenOdd ? "Even " : "Odd "}</h1>
    </div>
  );
}

export default Usermemo;
