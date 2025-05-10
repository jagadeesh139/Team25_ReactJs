
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">🛒 Cart</h2>
      {cart.map((c) => (
        <div key={c.id} className="border p-2 rounded mb-2 flex justify-between items-center">
          <div>
            {c.name} (x{c.quantity}) - ${c.price * c.quantity}
          </div>
          <button onClick={() => dispatch(removeFromCart(c.id))} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
        </div>
      ))}
      <h3 className="font-bold mt-2">Total: ${total}</h3>
    </div>
  );
};

export default Cart;
