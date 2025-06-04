import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
    login(response.data.token);
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="form-control mb-2"
               onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
        <input type="password" placeholder="Password" className="form-control mb-2"
               onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
