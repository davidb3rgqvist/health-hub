import React, { useState, useContext } from 'react';
import authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';
import Header from '../components/Header';
import './Auth.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(username, email, password);
      setMessage('Registration successful. Please log in.');
      login(username, password);
    } catch (error) {
      setMessage('Registration failed.');
    }
  };

  return (
    <div>
      <Header />
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-gradient">Register</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default RegisterPage;
