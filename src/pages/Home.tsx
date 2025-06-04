import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Lost & Found</h1>
      <p className="home-subtitle">Report lost items or claim found ones instantly.</p>
      <p className="home-subtitle">Use the navigation above to manage your items.</p>
    </div>
  );
};

export default Home;
