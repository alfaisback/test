import React, { useState } from 'react';

const AnotherComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 2);
  };

  return (
    <div>
      <h1>My Component 2</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Click for +2</button>
    </div>
  );
};

export default AnotherComponent;
