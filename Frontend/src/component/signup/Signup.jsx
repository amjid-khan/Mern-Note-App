import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { NavLink , useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()
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
      toast.error("Choose a strong password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      setName("")
      setEmail("")
      setPassword("")
      console.log("User registered:", res.data);
      toast.success("Registration successful!");
      navigate("/home")
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response) {
            console.error("Full error response:", error.response);
        if (
          error.response.status === 409 ||
          error.response.data?.message?.includes("email")
        ) {
          toast.error("This email is already registered.");
        } else {
          toast.error(error.response.data?.message || "Registration failed!");
        }
      } else {
        toast.error("Network error or server not responding.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="signup-wrapper">
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
        </div>
    </>
  );
};

export default Signup;
