import React, { useState } from "react";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <div class="ui attached message">
        <div class="content">
        <p>Fill out the form below to sign-up for a new account</p>
        <div class="header">Welcome to BookShare!</div>
          
        </div>
      </div>
      <form class="ui form attached fluid segment" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
            <label htmlFor="password">Password Confirmation</label>
            <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
            />
            <button class="ui blue button" type="submit">Sign Up</button>
          </form>
          <div class="ui warning bottom attached message"><i aria-hidden="true" class="help icon"></i>Already signed up? <a href="#">Login here</a> instead.</div>
    </div>
  );
}

export default SignUp;