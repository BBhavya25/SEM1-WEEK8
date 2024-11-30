import React, { useState, useEffect } from 'react';

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');

  useEffect(() => {
    // Note: Replace with actual WebSocket URL
    const socket = new WebSocket('wss://echo.websocket.org');

    socket.onopen = () => {
      setConnectionStatus('Connected');
      socket.send('Hello, WebSocket!');
    };

    socket.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };

    socket.onclose = () => {
      setConnectionStatus('Disconnected');
    };

    // Cleanup WebSocket on unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div style={{
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ddd'
    }}>
      <h2>WebSocket Status: {connectionStatus}</h2>
      <div style={{
        maxHeight: '200px',
        overflowY: 'auto',
        border: '1px solid #eee',
        padding: '10px'
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '5px' }}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebSocketComponent;