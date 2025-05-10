import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, addToCart } from '../redux/cartSlice';

const ProductList = ({ setEditData }) => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {products.map((p) => (
        <div key={p.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{p.name}</h3>
          <p>Price: ${p.price} | Stock: {p.stock}</p>
          <div className="mt-2">
            <button onClick={() => setEditData(p)} className="bg-yellow-400 px-3 py-1 rounded mr-2">Edit</button>
            <button onClick={() => dispatch(deleteProduct(p.id))} className="bg-red-500 text-white px-3 py-1 rounded mr-2">Delete</button>
            <button onClick={() => dispatch(addToCart(p.id))} className="bg-green-500 text-white px-3 py-1 rounded">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;