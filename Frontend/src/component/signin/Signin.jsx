import React, { useState } from "react";
import "./Signin.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      console.log("Login successful:", res.data);
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response) {
        const message = error.response.data.message;

        if (message.includes("User not found")) {
          toast.error("Email not registered.");
        } else if (message.includes("Invalid credentials")) {
          toast.error("Incorrect password.");
        } else {
          toast.error(message || "Login failed");
        }
      } else {
        toast.error("Network error or server not responding");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleLogin}>
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
    </>
  );
}

export default Signin;
