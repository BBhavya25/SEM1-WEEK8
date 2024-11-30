import React, { useState, useEffect } from 'react';

const MultiEffectComponent = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect for fetching user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  // Effect for updating document title
  useEffect(() => {
    document.title = userData 
      ? `${userData.name || username}'s Profile` 
      : 'User Profile';
  }, [userData, username]);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{
      backgroundColor: '#e9ecef',
      padding: '20px',
      borderRadius: '5px'
    }}>
      {userData && (
        <>
          <img 
            src={userData.avatar_url} 
            alt={username} 
            style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%' 
            }} 
          />
          <h2>{userData.name}</h2>
          <p>Followers: {userData.followers}</p>
        </>
      )}
    </div>
  );
};

export default MultiEffectComponent;