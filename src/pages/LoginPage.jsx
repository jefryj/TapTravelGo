import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle login logic here
    alert('Login submitted!');
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-logo">
          <span role="img" aria-label="plane" className="plane-icon">✈️</span>
          <span className="brand">TapTravelGo</span>
        </div>
        <h2 className="login-title">Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <div className="login-footer">
          <span>Don't have an account?</span>
          <a href="#" className="signup-link">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
