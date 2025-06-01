
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateQuantity } from '../features/inventory/inventorySlice';

const ProductForm = ({ selectedProduct, clearSelection }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [supplier, setSupplier] = useState('');
  const [reorderLevel, setReorderLevel] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setCategory(selectedProduct.category);
      setQuantity(selectedProduct.quantity);
      setPrice(selectedProduct.price);
      setSupplier(selectedProduct.supplier);
      setReorderLevel(selectedProduct.reorderLevel);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !quantity || !price || !supplier) return;

    if (selectedProduct) {
      dispatch(updateQuantity({ productName: selectedProduct.name, quantity }));
      clearSelection();
    } else {
      dispatch(addProduct(name, category, quantity, price, supplier, reorderLevel));
    }

    setName('');
    setCategory('');
    setQuantity(0);
    setPrice(0); 
    setSupplier('');
    setReorderLevel(0);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
     <label htmlFor="Product">Product:</label>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label htmlFor="Quantity">Quantity:</label>
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <label htmlFor="Price">Price:</label>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <label htmlFor="Supplier">Supplier:</label>
      <input
        type="text"
        placeholder="Supplier"
        value={supplier}
        onChange={(e) => setSupplier(e.target.value)}
      />
      <label htmlFor="Reorder">Reorder Level:</label>
      <input
        type="number"
        placeholder="Reorder Level"
        value={reorderLevel}
        onChange={(e) => setReorderLevel(Number(e.target.value))}
      />
      <button type="submit">{selectedProduct ? 'Update Product' : 'Add Product'}</button>
      {selectedProduct && (
        <button type="button" onClick={clearSelection} className="cancel">
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default ProductForm;
