import React, { useState, useEffect } from 'react';

const LocalStorageComponent = () => {
  const [username, setUsername] = useState(() => {
    // Initialize from localStorage or use default
    return localStorage.getItem('username') || '';
  });

  // Sync with localStorage whenever username changes
  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  }, [username]);

  return (
    <div style={{
      maxWidth: '300px',
      margin: 'auto',
      padding: '20px',
      textAlign: 'center'
    }}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px'
        }}
      />
      <p>Stored Username: {username || 'No username'}</p>
    </div>
  );
};

export default LocalStorageComponent;