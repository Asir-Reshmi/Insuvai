
// import '../App.css';
// // import RegistrationForm from './register';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; 
// function LoginForm({ onSubmit,onRegisterClick, showRegisterLink = true }) { 

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false); 

//   const handleChange = (event) => {
//     const { name, value,checked } = event.target;
//     if (name === 'username') {
//       setUsername(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }else if (name === 'rememberMe') {
//       setRememberMe(checked); 
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); 
//     onSubmit(username, password,rememberMe);
//   };

//   return (
   
//     <form onSubmit={handleSubmit}>
     
//       <h1>WELCOME BACK!!</h1>
//       <p>We are happy to see you again.</p>
        
//       <label htmlFor="username">Your Email:</label>
//       <input
//         type="text"
//         id="username"
//         name="username" 
//         value={username}
//         onChange={handleChange}
//       />
//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         name="password" 
//         value={password}
//         onChange={handleChange}
//       />
//      <div className="checkbox">
//         <label for="rememberMe">
//           <input
//             type="checkbox"
//             id="rememberMe"
//             name="rememberMe" 
//             checked={rememberMe} 
//             onChange={handleChange}
//           />
//           Remember me
//         </label>
//         </div>
//         <br></br>
//       <button type="submit">LOGIN TO YOUR ACCOUNT </button>
//       {showRegisterLink && ( 
//         <p className="register-link">
//           Don't have an account?{' '}
//           <Link to="/register">Register</Link>
//           {/* <a href=" RegistrationForm" onClick={onRegisterClick}>
//             Register
//           </a> */}
//         </p>
//       )}
      
//     </form>
//   );
// }

// export default LoginForm;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// // import styled from 'styled-components';

// const LoginForm = ({ onSubmit, onRegisterClick, showRegisterLink = true }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleChange = (event) => {
//     const { name, value, checked } = event.target;
//     if (name === 'username') {
//       setUsername(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     } else if (name === 'rememberMe') {
//       setRememberMe(checked);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(username, password, rememberMe);
//   };

//   return (
//     <LoginFormContainer onSubmit={handleSubmit}>
//       <h1>WELCOME BACK!!</h1>
//       <p>We are happy to see you again.</p>

//       <LoginFormLabel htmlFor="username">Your Email:</LoginFormLabel>
//       <LoginFormInput
//         type="text"
//         id="username"
//         name="username"
//         value={username}
//         onChange={handleChange}
//       />

//       <LoginFormLabel htmlFor="password">Password:</LoginFormLabel>
//       <LoginFormInput
//         type="password"
//         id="password"
//         name="password"
//         value={password}
//         onChange={handleChange}
//       />

//       <LoginFormCheckbox>
//         <LoginFormCheckboxInput
//           type="checkbox"
//           id="rememberMe"
//           name="rememberMe"
//           checked={rememberMe}
//           onChange={handleChange}
//         />
//         <label htmlFor="rememberMe">Remember me</label>
//       </LoginFormCheckbox>

//       <br />
//       <LoginFormButton type="submit">LOGIN TO YOUR ACCOUNT</LoginFormButton>

//       {showRegisterLink && (
//         <RegisterLink>
//           Don't have an account?{' '}
//           <Link to="/register">Register</Link>
//           {/* <a href=" RegistrationForm" onClick={onRegisterClick}>
//             Register
//           </a> */}
//         </RegisterLink>
//       )}
//     </LoginFormContainer>
//   );
// };

// export default LoginForm;

// const LoginFormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   border-radius: 5px;
 
//   background-color: #f0f0f0;
//   width: 300px; /* Adjust width as needed */
//   margin: 0 auto; /* Center the form horizontally */
// `;

// const LoginFormLabel = styled.label`
//   display: block;
//   margin-bottom: 10px;
//   font-weight: bold;
// `;

// const LoginFormInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 3px;
//   margin-bottom: 15px;
// `;

// const LoginFormCheckbox = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const LoginFormCheckboxInput = styled.input`
//   margin-right: 5px;
// `;

// const LoginFormButton = styled.button`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #3e8e41;
//   }
// `;

// const RegisterLink = styled.p`
//   margin-top: 15px;
//   text-align: center;
// `;





import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'rememberMe') {
      setRememberMe(checked);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!username || !password) {
      alert('Please enter your username and password.');
      return;
    }

    onSubmit(username, password, rememberMe);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <LoginFormHeader>
        <h1>WELCOME BACK!!</h1>
        <p>We are happy to see you again.</p>
      </LoginFormHeader>

      <LoginFormInputContainer>
        <LoginFormLabel htmlFor="username">Your Email:</LoginFormLabel>
        <LoginFormInput
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />

        <LoginFormLabel htmlFor="password">Password:</LoginFormLabel>
        <LoginFormInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </LoginFormInputContainer>

      <LoginFormCheckboxContainer>
        <LoginFormCheckboxInput
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={rememberMe}
          onChange={handleChange}
        />
        <LoginFormLabel htmlFor="rememberMe">Remember me</LoginFormLabel>
      </LoginFormCheckboxContainer>

      {/* <LoginFormForgotPasswordLink onClick={onForgotPasswordClick}>
        Forgot Password?
      </LoginFormForgotPasswordLink> */}

      <LoginFormButton type="submit">LOGIN TO YOUR ACCOUNT</LoginFormButton>

      <LoginFormRegisterLink>
        Don't have an account? <a href="/register">Register</a>
      </LoginFormRegisterLink>
    </LoginFormContainer>
  );
};

export default LoginForm;

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px;
  border-radius: 5px;
  background-color: #f0f0f0;
  width: 300px; 

  margin: 0 auto; /* Center the form horizontally */
`;

const LoginFormHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const LoginFormInputContainer = styled.div`
  /* Group input elements for spacing */
  margin-bottom: 15px;
`;

const LoginFormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const LoginFormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 5px;
`;

const LoginFormCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const LoginFormCheckboxInput = styled.input`
  margin-right: 5px;
`;

const LoginFormButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  // &:hover {
  //   background-color: #3e8e41;
  // }

const LoginFormRegisterLink = styled.p`
  // text-align: center;

  const LoginFormRegisterLink = styled.p`
  text-align: center; // Add semicolon here
`;

