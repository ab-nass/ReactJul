import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1); 
  };
  const dec = () => {
    setCount(count - 1); 
  };

  return (
    <div>
      <h1>Count: {count}</h1> 
      <button onClick={inc}>Increment Count</button>
      <button onClick={dec}> Decrement count</button>
      <button onClick={() => setCount(0)}>Reset</button>

    </div>
  );
};

export default Count;
