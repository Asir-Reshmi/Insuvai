
import '../App.css';
// import RegistrationForm from './register';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
function LoginForm({ onSubmit,onRegisterClick, showRegisterLink = true }) { 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); 

  const handleChange = (event) => {
    const { name, value,checked } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }else if (name === 'rememberMe') {
      setRememberMe(checked); 
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSubmit(username, password,rememberMe);
  };

  return (
   
    <form onSubmit={handleSubmit}>
      <h1>WELCOME BACK!!</h1>
      <p>We are happy to see you again.</p>
        
      <label htmlFor="username">Your Email:</label>
      <input
        type="text"
        id="username"
        name="username" 
        value={username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password" 
        value={password}
        onChange={handleChange}
      />
     <div className="checkbox">
        <label for="rememberMe">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe" 
            checked={rememberMe} 
            onChange={handleChange}
          />
          Remember me
        </label>
        </div>
        <br></br>
      <button type="submit">LOGIN TO YOUR ACCOUNT </button>
      {showRegisterLink && ( 
        <p className="register-link">
          Don't have an account?{' '}
          <Link to="/register">Register</Link>
          {/* <a href=" RegistrationForm" onClick={onRegisterClick}>
            Register
          </a> */}
        </p>
      )}
    </form>
  );
}

export default LoginForm;

