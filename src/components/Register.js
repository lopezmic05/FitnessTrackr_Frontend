import React, { useState } from "react";
import { registerUser } from "../api";
import './register.css'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    if(username === '' || password === '') {
      setError(true);
    } else {
      const success = await registerUser(username, password);
      if (success.message == "you're signed up!") {
        setSubmitted(true);
        setError(false);
      }
    }
  };

  const successMessage = () => {
    return (
      <div 
      className="success"
      style={{
        display: submitted ? '' : 'none',
      }}>
        <h1> Welcome {username}! You've been successfully registered!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return(
      <div
      style={{
        display: error ? '' : 'none',
      }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return(
    <div id="register">
      <div>
        <h1 id="register-header">User Registration</h1>
      </div>
      <div>
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <label>Username</label>
        <input onChange={handleUsername} id='register-input'
        value={username} type="username" placeholder="Create username..." />

        <label>Password</label>
        <input onChange={handlePassword} id='register-input'
        value={password} type="password" placeholder="Create password..." />
        
        <button onClick={handleSubmit} className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );

};

export default Register;
