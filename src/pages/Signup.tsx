import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/auth/signup', { name, email, password });
      navigate('/login');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">Signup</button>
      </form>
    </div>
  );
}

export default Signup;

