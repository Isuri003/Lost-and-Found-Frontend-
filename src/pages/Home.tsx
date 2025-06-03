import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="overlay text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4">Welcome to Lost & Found</h1>
        <p className="lead">Report lost items or claim found ones instantly.</p>
        <p>Use the navigation above to manage your items.</p>
      </div>
    </div>
  );
};

export default Home;
