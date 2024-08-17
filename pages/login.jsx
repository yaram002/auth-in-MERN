import React, { useState } from 'react';
import axios from 'axios';
import CollapsibleExample from '../pages/navebar.jsx';

import Alert from 'react-bootstrap/Alert';
// import { useHistory } from 'react-router-dom';
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../css/log.css'
function Login() {
  
  const [email, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  let [resp,setresp]=useState('');

async function handleSubmit(e) {
  e.preventDefault();

  try {
    let response=await axios.post('http://localhost:3001/login',
      {email,pass},
      {
        withCredentials: true

    });
    if (response.data.success) {
     // Redirect to the dashboard or any other page
    } else {
      setresp('Invalid credentials');
    }
 
    console.log(response)

   
  } catch (error) {
    console.log(error);
  }

}
const alertVariant = resp === 'ok' ? 'success' : 'danger';
  return (
    <>
    
    
    <CollapsibleExample/>

  
<h1></h1>
    <div className="login-container">
  
  
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          name="Email"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="pass"
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
 
        <button type="submit">Login</button>
      </form>
     
    </div>
    </>
  );
}

export default Login;
