import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  location: string;
  status: string;
}

const SearchItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items') || '[]');
    setItems(savedItems);
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Search Items</h2>
      <input
        type="text"
        placeholder="Search by name or description"
        className="form-control mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredItems.length === 0 ? (
        <p className="text-center text-muted">No items found.</p>
      ) : (
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    <strong>Location:</strong> {item.location}
                  </p>
                  <span
                    className={`badge ${
                      item.status === 'LOST' ? 'bg-danger' : 'bg-success'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchItems;
