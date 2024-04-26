import React, { useState } from 'react';
import '../styles/register.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Add form validation and submission logic here:
    // - Check if email is valid format
    // - Check if password and confirm password match
    // - Submit form data (e.g., using fetch API or a form library)

    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>REGISTER ACCOUNT</h2>

      <label htmlFor="email">YOUR EMAIL</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="password">YOUR PASSWORD</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <label htmlFor="confirmPassword">REPEAT PASSWORD</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        required
      />

      <button type="submit">CREATE YOUR ACCOUNT</button>

      <p>
        You'll receive a confirmation email in your inbox with a link so you can
        activate your account. If you have any problems, contact us.
      </p>
    </form>
  );
}

export default RegisterForm;
