import React, { useState } from 'react';
import Axios from 'axios';
import './Login.css';
import '../../App.scss';
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const loginUser = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/api/login', {
      email: loginEmail,
      password: loginPassword,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('authToken', response.data.token);
        console.log('Login successful, redirecting to dashboard');
        navigate('/dashboard');
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          // Display validation errors here
          console.log('Validation errors:', error.response.data.errors);
        } else {
          console.log('Login failed:', error.message);
        }
      });
  };

  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className='videoDiv'>
          <video src={video} muted autoPlay loop></video>

          <div className='textDiv'>
            <h2 className='title'>Personal Finance Manager</h2>
            <p>Become your own manager with Us</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Don't have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='Logo image' />
            <h3>Welcome Back!</h3>
          </div>

          <form action='' className='form grid'>
            {/* <span className='showMessage'>Login Status will go here</span> */}
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  placeholder='Enter your password'
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
                <div className='eye-icon' onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <CiLogin className='icon' />
            </button>

            <span className='forgetPassword '>
              Forgot your Password? <a href='/'>Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
