import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';  // Make sure the path to Navigation is correct
import styled from 'styled-components';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [active, setActive] = useState(1);  // Manage active menu state

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      axios
        .get('http://localhost:3000/api/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
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
    <DashboardStyled>
      {/* Left Navigation */}
      <div className="navigation">
        <Navigation active={active} setActive={setActive} />
      </div>

      {/* Main Dashboard Content */}
      <div className="content">
        <h1>Hi, {username}</h1>
        <p>Welcome to the dashboard page.</p>
      </div>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div`
  display: flex;
  height: 100vh;  /* Take full viewport height */

  .navigation {
    width: 374px; /* Fixed width for the navigation */
    background-color: rgba(252, 246, 249, 0.78); /* Same background as NavStyled */
    border-right: 3px solid #FFFFFF;
    border-radius: 32px 0 0 32px;
  }

  .content {
    flex: 1; /* Take up the remaining space */
    padding: 2rem;
    background-color: #f7f7f7;  /* Background color for dashboard content */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h1 {
    color: rgba(34, 34, 96, 1);
  }

  p {
    color: rgba(34, 34, 96, 0.6);
  }
`;

export default Dashboard;
