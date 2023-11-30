import React, { useState } from 'react';
import axios from 'axios';

const LoginSignup = () => {
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleModeChange = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/${mode}`, {
        username,
        password,
      });
  
      if (response) {
        if (response.data) {
          console.log(response.data);
        } else {
          console.error('Response data is undefined:', response);
        }
      } else {
        console.error('Response is undefined.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  };
  
  

  return (
    <div className="login-signup-container">
      <h1>{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={handleModeChange}>
        {mode === 'login' ? 'Switch to Sign Up' : 'Switch to Login'}
      </p>
    </div>
  );
};

export default LoginSignup;