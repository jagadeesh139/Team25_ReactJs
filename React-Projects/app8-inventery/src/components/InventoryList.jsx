import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, updateQuantity } from '../features/inventory/inventorySlice';

const ProductList = ({ onEdit }) => {
  const products = useSelector((state) => state.inventory.products);
  const lowStockProducts = useSelector((state) => state.inventory.products.filter((product) => product.quantity <= product.reorderLevel));
  const dispatch = useDispatch();

  // Function to calculate total price for each product
  const calculateTotalPrice = (product) => {
    return product.quantity * product.price;
  };

  return (
    <div className="product-list">
      <h3>Low Stock Products</h3>
      {lowStockProducts.length > 0 ? (
        lowStockProducts.map((product) => (
          <div key={product.id} className="product low-stock">
            <p><strong>{product.name}</strong> - {product.quantity} left</p>
            <p>Price: ${product.price} | Total Price: ${calculateTotalPrice(product)}</p>
            <button onClick={() => onEdit(product)}>✏️ Edit</button>
            <button onClick={() => dispatch(removeProduct(product.name))}>🗑️ Remove</button>
          </div>
        ))
      ) : (
        <p>No low stock products!</p>
      )}

      <h3>All Products</h3>
      {products.map((product) => (
        <div key={product.id} className="product">
          <p><strong>{product.name}</strong> - {product.quantity} in stock</p>
          <p>Price: ${product.price} | Total Price: ${calculateTotalPrice(product)}</p>
          <button onClick={() => onEdit(product)}>✏️ Edit</button>
          <button onClick={() => dispatch(removeProduct(product.name))}>🗑️ Remove</button>
          <div>
            <button onClick={() => dispatch(updateQuantity({ productName: product.name, quantity: 1 }))}>Increase</button>
            <button onClick={() => dispatch(updateQuantity({ productName: product.name, quantity: -1 }))}>Decrease</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;