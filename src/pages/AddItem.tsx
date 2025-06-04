import React, { useState, useEffect } from 'react';

const defaultItems = [
  {
    id: 1,
    name: 'Wallet',
    status: 'LOST',
    description: 'Black leather wallet with ID cards inside.',
    location: 'Library'
  },
  {
    id: 2,
    name: 'Keys',
    status: 'FOUND',
    description: 'A bunch of keys with a red keychain.',
    location: 'Cafeteria'
  },
  {
    id: 3,
    name: 'Backpack',
    status: 'LOST',
    description: 'Blue backpack with laptop and books.',
    location: 'Building no.1'
  },
  {
    id: 4,
    name: 'Phone',
    status: 'FOUND',
    description: 'iPhone with a cracked screen.',
    location: 'Classroom 205'
  },
  {
    id: 5,
    name: 'Watch',
    status: 'LOST',
    description: 'Silver wristwatch with black strap.',
    location: 'Gym'
  }
];

const AddItem = () => {
  const [items, setItems] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('LOST');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      try {
        const parsed = JSON.parse(savedItems);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed);
          return;
        }
      } catch (e) {
        console.error('Error parsing items:', e);
      }
    }
    
    setItems(defaultItems);
    localStorage.setItem('items', JSON.stringify(defaultItems));
  }, []);

  const handleAdd = () => {
    if (!name.trim()) return alert('Please enter item name');
    if (!description.trim()) return alert('Please enter description');
    if (!location.trim()) return alert('Please enter location');

    const newItem = {
      id: Date.now(),
      name,
      status,
      description,
      location
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));

    setName('');
    setStatus('LOST');
    setDescription('');
    setLocation('');
  };

  return (
    <div className="container mt-4">
      <h2>Lost and Found Items</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="form-control mb-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="LOST">Lost</option>
          <option value="FOUND">Found</option>
        </select>
        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Item
        </button>
      </div>

      <h3 className="mt-4">Items:</h3>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item">
              <strong>{item.name}</strong> — {item.status}<br />
              <em>{item.description}</em><br />
              <span>📍 {item.location}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddItem;
