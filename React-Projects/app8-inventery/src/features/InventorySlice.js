import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: nanoid(),
      name: 'Laptop',
      category: 'Electronics',
      quantity: 50,
      price: 1000,
      supplier: 'Tech Supplier',
      reorderLevel: 10,
    },
    {
      id: nanoid(),
      name: 'Coffee Maker',
      category: 'Appliances',
      quantity: 5,
      price: 50,
      supplier: 'Home Goods Co.',
      reorderLevel: 10,
    },
    {
      id: nanoid(),
      name: 'Chair',
      category: 'Furniture',
      quantity: 200,
      price: 80,
      supplier: 'FurniMart',
      reorderLevel: 20,
    },
  ],
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(name, category, quantity, price, supplier, reorderLevel) {
        return {
          payload: {
            id: nanoid(),
            name,
            category,
            quantity,
            price,
            supplier,
            reorderLevel,
          },
        };
      },
    },
    updateQuantity(state, action) {
      const { productName, quantity } = action.payload;
      const product = state.products.find((p) => p.name === productName);
      if (product) {
        product.quantity += quantity;
      }
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.name !== action.payload
      );
    },
  },
});

export const { addProduct, updateQuantity, removeProduct } = inventorySlice.actions;

export const selectLowStockProducts = (state) => {
  return state.inventory.products.filter(
    (product) => product.quantity <= product.reorderLevel
  );
};

export const selectTotalInventoryValue = (state) => {
  return state.inventory.products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

export const selectProductsByCategory = (state, category) => {
  return state.inventory.products.filter(
    (product) => product.category === category
  );
};

export default inventorySlice.reducer;