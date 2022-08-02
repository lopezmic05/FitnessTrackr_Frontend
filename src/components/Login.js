import React, { useState } from "react";
import { loginUser } from '../api'



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
    <div>
      <h1>Please Login!</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        id='username'
        onChange={handleOnChange}
         placeholder='create username...'
         value={username}></input>
        <label>Password</label>
        <input id='password'
        onChange={handleOnChange}
         placeholder='create password...'
         value={password}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
