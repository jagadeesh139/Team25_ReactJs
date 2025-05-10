import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/cartSlice';

const ProductForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: '',
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(updateProduct({ id: editData.id, updates: form }));
      setEditData(null);
    } else {
      dispatch(addProduct(form));
    }
    setForm({ name: '', price: '', stock: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editData ? 'Update' : 'Add'} Product
      </button>
    </form>
  );
};

export default ProductForm;