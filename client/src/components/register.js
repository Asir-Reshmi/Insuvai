import React, { useState } from 'react';

function RegistrationForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation (replace with more robust validation)
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Call the onSubmit prop function and pass registration data
    onSubmit(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
     
        <h1>REGISTER ACCOUNT</h1>
        
      {/* <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={handleChange}
        required
      /> */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit"> CREATE YOUR ACCOUNT</button>
      
    </form>
  );
}

export default RegistrationForm;
