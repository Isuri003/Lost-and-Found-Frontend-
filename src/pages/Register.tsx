// src/pages/Register.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/auth/register', form);
    alert('Registered successfully!');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="form-control mb-2"
               onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input type="password" placeholder="Password" className="form-control mb-2"
               onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
