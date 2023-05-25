import React, { useState } from 'react';
import AnotherComponent from './AnotherComponent';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>My Component</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Click For +1</button>
      <AnotherComponent />
    </div>
  );
};

export default MyComponent;
