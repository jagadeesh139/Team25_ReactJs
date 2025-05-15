
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  products: [],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 
    addProduct: (state, action) => {
      state.products.push({ id: uuidv4(), ...action.payload });
    },
    updateProduct: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.products.findIndex((p) => p.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updates };
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    addToCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        const cartItem = state.cart.find((c) => c.id === product.id);
        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          state.cart.push({ ...product, quantity: 1 });
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
