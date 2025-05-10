import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectProductsByCategory } from '../features/inventory/inventorySlice';

const ProductSearch = ({ setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const dispatch = useDispatch();

  const handleSearch = () => {
    // You can filter by category or name here
    if (categoryFilter) {
      setFilteredProducts(selectProductsByCategory({ category: categoryFilter }));
    } else {
      setFilteredProducts((prevState) =>
        prevState.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by product name"
      />
      <button onClick={handleSearch}>Search</button>

      <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Appliances">Appliances</option>
        <option value="Furniture">Furniture</option>
        <option value="Clothing">Clothing</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default ProductSearch;