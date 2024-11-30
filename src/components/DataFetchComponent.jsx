import React, { useState, useEffect } from 'react';

const DataFetchComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result.slice(0, 5));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div style={{ color: 'blue' }}>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2>Fetched Posts</h2>
      {data.map(post => (
        <div key={post.id} style={{ 
          border: '1px solid gray', 
          margin: '10px 0', 
          padding: '10px' 
        }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetchComponent;