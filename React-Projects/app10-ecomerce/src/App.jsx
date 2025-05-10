
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [editData, setEditData] = useState(null);

  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">🛒 E-commerce Cart</h1>
        <ProductForm editData={editData} setEditData={setEditData} />
        <ProductList setEditData={setEditData} />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
