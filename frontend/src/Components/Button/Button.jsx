import React from 'react';
import './Button.scss'; // Ensure you're importing the SCSS file

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
  return (
    <button
      className='button' // Use the SCSS class
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}

export default Button;
