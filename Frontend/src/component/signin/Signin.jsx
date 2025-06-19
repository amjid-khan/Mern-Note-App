import React, { useState } from "react";
import "./Signin.css";
import {NavLink} from "react-router-dom"
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Add API call or auth logic here
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignin}>
        <h2>Welcome Back</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <p>
          Don’t have an account? <NavLink to="/">Sign Up</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Signin;
