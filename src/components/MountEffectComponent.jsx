import React, { useState, useEffect } from 'react';

const MountEffectComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Component mounted');
    setMessage('Component has mounted successfully!');
  }, []);

  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '5px'
    }}>
      <h2>Mount Effect Demo</h2>
      <p>{message}</p>
    </div>
  );
};

export default MountEffectComponent;