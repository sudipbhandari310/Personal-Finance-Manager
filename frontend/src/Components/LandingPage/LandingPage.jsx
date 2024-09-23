import React from 'react';
import { Link } from 'react-router-dom';
import '../../Components/LandingPage/Landingpage.scss';
import logo from '../../LoginAssets/logo.png';

const LandingPage = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <h1 className='title'>Personal Finance Manager</h1>
        </div>
        <ul className='nav-links'>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>

      <div className='landing-container'>
        <div className='hero'>
          <h1>Track what you're spending your money on.</h1>
          <h2>Become your own manager with us.</h2>
          <div className='cta-buttons'>
            <Link to='/register' className='btn-primary'>
              Get Started
            </Link>
            <Link to='/login' className='btn-secondary'>
              Already Registered?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
