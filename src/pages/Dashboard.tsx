import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-primary">Dashboard</h1>
        <p className="lead text-secondary">Your control panel for lost and found items</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body text-center">
              <i className="bi bi-box-arrow-in-down fs-1 text-success mb-3"></i>
              <h5 className="card-title fw-bold">Report Lost Item</h5>
              <p className="card-text">Submit details of an item you've lost so others can help find it.</p>
              <a href="/items/add" className="btn btn-outline-success">Add Item</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body text-center">
              <i className="bi bi-search fs-1 text-primary mb-3"></i>
              <h5 className="card-title fw-bold">Search Items</h5>
              <p className="card-text">Look for items others have reported as found.</p>
              <a href="/items/search" className="btn btn-outline-primary">Search</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body text-center">
              <i className="bi bi-collection fs-1 text-warning mb-3"></i>
              <h5 className="card-title fw-bold">View All Items</h5>
              <p className="card-text">Browse through the list of all lost and found items.</p>
              <a href="/items" className="btn btn-outline-warning">View Items</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
