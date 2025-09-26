import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demo
    const student = { email: "student@skct.edu.in", password: "12345" };
    const faculty = { email: "faculty@skct.edu.in", password: "54321" };

    if (email === student.email && password === student.password) {
      navigate("/student", { state: { user: { email, role: "student" } } });
    } else if (email === faculty.email && password === faculty.password) {
      navigate("/faculty", { state: { user: { email, role: "faculty" } } });
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>ProctorIQ</h1>
        <p>Sign in to access your dashboard and manage exams efficiently.</p>
      </div>
      <div className="login-right">
        <div className="login-card">
          <h2 className="login-heading">Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
            {error && <p className="login-error">{error}</p>}
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="login-register-text">
            New user? <Link to="/register" className="login-link">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
