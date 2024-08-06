import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const checkLoggedInUser = async () => {
      try {
        const { data } = await axios.get('/dj-rest-auth/user/');
        setCurrentUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    checkLoggedInUser();
  }, []);

  const login = async (username, password) => {
    try {
      const { data } = await axios.post('/dj-rest-auth/login/', { username, password });
      setCurrentUser(data.user);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('/dj-rest-auth/logout/');
      setCurrentUser(null);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
