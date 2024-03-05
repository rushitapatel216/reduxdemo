// cartSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from './Api';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    allItems: [],
    isLoading: false,
    hasError: true,
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.allItems = state.allItems.filter(
        item => item.id !== action.payload,
      );
    },
    setAllItems: (state, action) => {
      state.allItems = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.allItems = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export const {addToCart, removeFromCart, setAllItems} = CartSlice.actions;

export default CartSlice.reducer;
