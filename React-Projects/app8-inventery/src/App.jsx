
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { selectLowStockProducts, selectTotalInventoryValue } from './features/inventory/inventorySlice';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useSelector((state) => state.inventory.products);
  const totalInventoryValue = useSelector(selectTotalInventoryValue);
  const lowStockProducts = useSelector(selectLowStockProducts);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const clearSelectedProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <h1>Inventory Management</h1>

      <ProductForm selectedProduct={selectedProduct} clearSelection={clearSelectedProduct} />

      <h2>Total Inventory Value: ${totalInventoryValue}</h2>

      {lowStockProducts.length > 0 && (
        <div>
          <h3>Low Stock Products</h3>
          {lowStockProducts.map((product) => (
            <div key={product.id}>
              <p>{product.name} - {product.quantity} left</p>
            </div>
          ))}
        </div>
      )}

      <ProductList products={products} onEdit={handleEditProduct} />

      <footer>
        <p>Inventory App</p>
      </footer>
    </div>
  );
};

export default App;
