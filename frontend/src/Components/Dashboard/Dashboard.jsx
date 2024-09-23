import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';

const Dashboard = () => {
  const [active, setActive] = useState(1);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('authToken');

    if (token) {
      axios
        .get('http://localhost:3000/api/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setUsername(response.data.username);
        })
        .catch((error) => {
          console.error('Error fetching dashboard data:', error);
        });
    } else {
      console.log('No token found');
    }
  }, []);

  return (
    <div>
      <Navigation active={active} setActive={setActive} username={username} />
    </div>
  );
};

export default Dashboard;
