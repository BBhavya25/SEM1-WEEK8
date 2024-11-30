import React, { useState, useEffect } from 'react';

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px',
      backgroundColor: 'darkolivegreen',
      fontSize: '2rem'
    }}>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default ClockComponent;