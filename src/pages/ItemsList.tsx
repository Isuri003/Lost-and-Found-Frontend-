import React, { useEffect, useState } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  location: string;
  status: string;
}

const ItemsList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items') || '[]');
    setItems(savedItems);
  }, []);

  const saveItems = (updatedItems: Item[]) => {
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const handleDelete = (id: number) => {
    const updated = items.filter((item) => item.id !== id);
    saveItems(updated);
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (!editingItem) return;
    const { name, value } = e.target;
    setEditingItem({ ...editingItem, [name]: value });
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    const updated = items.map((item) =>
      item.id === editingItem.id ? editingItem : item
    );
    saveItems(updated);
    setEditingItem(null);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">All Items</h2>

      {/* Search and Filter */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <input
          type="text"
          placeholder="Search by name or description"
          className="form-control w-100 w-md-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-select w-100 w-md-25"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="LOST">Lost</option>
          <option value="FOUND">Found</option>
        </select>
      </div>

      {/* Edit Form */}
      {editingItem && (
        <form onSubmit={handleEditSubmit} className="shadow p-4 rounded bg-light mb-4">
          <h5 className="mb-3">Edit Item</h5>

          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={editingItem.name}
              onChange={handleEditChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={editingItem.description}
              onChange={handleEditChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={editingItem.location}
              onChange={handleEditChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              name="status"
              value={editingItem.status}
              onChange={handleEditChange}
            >
              <option value="LOST">LOST</option>
              <option value="FOUND">FOUND</option>
            </select>
          </div>

          <div className="text-end">
            <button type="button" className="btn btn-secondary me-2" onClick={() => setEditingItem(null)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success">Save Changes</button>
          </div>
        </form>
      )}

      {/* Items List */}
      {filteredItems.length === 0 ? (
        <p className="text-muted text-center">No items match your search or filter.</p>
      ) : (
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card border-0 shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><strong>Location:</strong> {item.location}</p>
                  <span className={`badge mb-2 ${item.status === 'LOST' ? 'bg-danger' : 'bg-success'}`}>
                    {item.status}
                  </span>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-sm btn-warning" onClick={() => handleEdit(item)}>
                      <i className="bi bi-pencil-square"></i> Edit
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsList;
