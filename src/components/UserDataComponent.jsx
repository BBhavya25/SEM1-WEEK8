import React, { useState, useEffect } from 'react';

const UserDataComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        setUserData(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '20px',
      maxWidth: '300px',
      margin: 'auto'
    }}>
      {userData ? (
        <>
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </>
      ) : (
        <p>No user selected</p>
      )}
    </div>
  );
};

export default UserDataComponent;