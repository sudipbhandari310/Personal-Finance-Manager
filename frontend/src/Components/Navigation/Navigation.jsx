import React from 'react';
import avatar from '../../images/avatar.png';
import { NavLink } from 'react-router-dom';
import { signout } from '../../assets/Icons';
import { menuItems } from '../../menuItems';
import '../Navigation/Navigation.scss';

function Navigation({ active, setActive, username }) {
  return (
    <div className='navigation'>
      <div className='user-con'>
        <img src={avatar} alt='avatar' />
        <div className='text'>
          <h2>{username || 'User'}</h2>
          <p>Manager</p>
        </div>
      </div>
      <ul className='menu-items'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            <NavLink
              to={item.link}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setActive(item.id)}
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='bottom-nav'>
        <li>{signout} Sign Out</li>
      </div>
    </div>
  );
}

export default Navigation;
