import React, { useState } from "react";
import { loginUser } from '../api'

import "./login.css"



const Login = (props) => {
    const [ username, setUsername ] = useState( '' )
    const [ password, setPassword ] = useState( '' )

    const handleOnChange = (event) =>{
        const changed = event.target.id
        if(changed === 'username'){
            setUsername(event.target.value)
        }
        else{
            setPassword(event.target.value)
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        const result = await loginUser(username, password)
        localStorage.setItem("token",result.token)
    }

  return (
    <div id="login">
      <h1 id="login-header">Please Login!</h1>
      <form onSubmit={handleSubmit} id="login-form">
        <label id="user">Username</label>
        <input 
        type='text'
        id='username'
        onChange={handleOnChange}
         placeholder='create username...'
         value={username}></input>
        <label id="password">Password</label>
        <input 
        type='password'
        id='password'
        onChange={handleOnChange}
         placeholder='create password...'
         value={password}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;