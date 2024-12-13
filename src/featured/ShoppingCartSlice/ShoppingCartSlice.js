import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const shoppingCartSlice = createSlice ({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
         state.cartItems.push({...newItem, quantity: 1, totalPrice: newItem.price});
         state.totalQuantity += 1;
         state.totalPrice += newItem.price;
      }
    },
   removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
       if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.quantity * existingItem.price;
  }
},
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
     const item = state.cartItems.find(item => item.id === action.payload);
     if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart(state) { 
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  }
}) 

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;