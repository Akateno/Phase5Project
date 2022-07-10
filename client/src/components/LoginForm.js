import React, { useState } from "react";



function Login({ onLogin,setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user))
        

       
      }
    });
  }

  return (
    
    <div className="loginForm">
       <div class="ui attached message">
        <div class="content">
       
        <div class="header">Welcome Back!</div>
           <p>Sign In to your account</p>
        </div>
      </div>
      <form class="ui form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button class="ui blue button" type="submit">Login</button>
      </form>
      <div class="ui warning bottom attached message"><i aria-hidden="true" class="help icon"></i>New User? <button class="ui blue button" onClick={() => setShowLogin(false)}>Signup</button> instead.</div>

    </div>
  );
}

export default Login;