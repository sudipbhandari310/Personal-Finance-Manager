import React, { useState } from 'react';
import './App.css';

function App() {
  const [textData, setTextData] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/extracttext', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const result = await response.json();
      setTextData(result.text || 'No text extracted.');
    } catch (error) {
      console.error('Error:', error);
      setTextData('Error extracting text.');
    }
  };

  return (
    <div>
      <h3>Personal finance manager</h3>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <label htmlFor='file'>Upload Image File:</label>
        <input type='file' name='file' accept='image/*' required />
        <button type='submit'>Extract Text From Image</button>
      </form>
      <textarea cols='30' rows='30' readOnly value={textData}></textarea>
    </div>
  );
}

export default App;
