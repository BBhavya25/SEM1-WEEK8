import React, { useState, useEffect } from 'react';

const DependencyEffectComponent = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Name changed to: ${name} or count updated to: ${count}`);
  }, [name, count]);

  return (
    <div style={{
      padding: '20px',
      border: '1px solid blue',
      textAlign: 'center'
    }}>
      <h2>Name: {name}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default DependencyEffectComponent;