import React, { useState } from 'react';
import './Register.css';
import '../../App.scss';
import Axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import logo from '../../LoginAssets/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 

  //onclick let us get the data
  const createUser = (e) => {
    e.preventDefault();

   

    
    Axios.post('http://localhost:3000/api/signup', {
      username: username,
      email: email,
      password: password,
    })
      .then((response) => {
        console.log(response.data);

        navigate('/login');
      })
      .catch((error) => {
        console.error('There was an error register the user!', error);
      });
  };
  return (
    <div className='registerPage flex'>
      <div className='container flex'>
        <div className='videoDiv'>
          <div className='textDiv'>
            <h2 className='title'>Personal Finance Manager</h2>
            <p>Become your own manager with Us</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Already have an account?</span>
            <Link to={'/login'}>
              <button className='btn'>Log in</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='Logo image' />
            <h3>Let Us Know You!</h3>
          </div>

          <form action='' className='form grid'>
            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Enter your Username'
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
             
            </div>

            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
                <MdMarkEmailRead className='icon' />

                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  onChange={(event) => {
                    setEmail(event.target.value);
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
                    setPassword(event.target.value);
                  }}
                />
                <div className='eye-icon' onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
             
            </div>

            <button type='submit' className='btn flex' onClick={createUser}>
              <span>Register</span>
              {/* <CiRegister className='icon' /> */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
