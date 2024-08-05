import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './styles/global.css';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
