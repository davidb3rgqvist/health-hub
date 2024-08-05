import api from './api';

const register = async (username, email, password) => {
  const response = await api.post('auth/register/', {
    username,
    email,
    password,
  });
  return response.data;
};

const login = async (username, password) => {
  const response = await api.post('auth/login/', {
    username,
    password,
  });
  if (response.data.access) {
    localStorage.setItem('token', response.data.access);
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
  delete api.defaults.headers.common['Authorization'];
};

export default {
  register,
  login,
  logout,
};