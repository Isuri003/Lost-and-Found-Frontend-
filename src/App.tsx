// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // optional now
import Register from './pages/Register'; // optional now
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import ItemsList from './pages/ItemsList';
import AddItem from './pages/AddItem';
import SearchItems from './pages/SearchItems';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
       <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
<Route path="/items" element={<ProtectedRoute><ItemsList /></ProtectedRoute>} />
<Route path="/items/add" element={<ProtectedRoute><AddItem /></ProtectedRoute>} />
<Route path="/items/search" element={<ProtectedRoute><SearchItems /></ProtectedRoute>} />
<Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
