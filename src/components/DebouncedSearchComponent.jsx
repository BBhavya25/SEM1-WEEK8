import React, { useState, useEffect } from 'react';

const DebouncedSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        // Simulated search API call
        const mockSearch = [
          `Result for ${searchTerm} 1`,
          `Result for ${searchTerm} 2`,
          `Result for ${searchTerm} 3`
        ];
        setResults(mockSearch);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div style={{
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px'
    }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px'
        }}
      />
      <div>
        {results.map((result, index) => (
          <div 
            key={index} 
            style={{
              padding: '10px',
              borderBottom: '1px solid #eee'
            }}
          >
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebouncedSearchComponent;