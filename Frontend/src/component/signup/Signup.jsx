import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import {NavLink} from "react-router-dom"
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
const handleuser = async (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setEmailError("Please enter a valid email address.");
    return;
  } else {
    setEmailError("");
  }

  if (password === "" || password.length <= 6) {
    alert("Choose a strong password");
    return; 
  }

  try {
    const res = await axios.post("http://localhost:8000/api/register", {
      name,
      email,
      password,
    });
    console.log("User registered:", res.data);
    alert("Registration successful!");
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Registration failed!");
  }
};


  return (
    <div className="signup-container">
      <form className="signup-form" method="post" onSubmit={handleuser}>
        <h2>Create Account</h2>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          name="email"
          required
        />
        {emailError && <span className="error-message">{emailError}</span>}

        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (emailError) setEmailError("");
          }}
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signup;
