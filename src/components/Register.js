import React from "react";
import { registerUser } from "../api";

const Register = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    registerUser(username, password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Sign up for an account.</h1>
        <label>Username</label>
        <input id='username' placeholder='create username...'></input>
        <label>Password</label>
        <input id='password' placeholder='create password...'></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
