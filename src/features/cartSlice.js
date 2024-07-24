import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingCartItemIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      );

      const updatedItems = [...state.cart];

      if (existingCartItemIndex > -1) {
        const exisitngItem = state.cart[existingCartItemIndex];
        const updatedItem = {
          ...exisitngItem,
          quantity: exisitngItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.payload, quantity: 1 })
      }
      return { ...state.cart, cart: updatedItems }
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload)

      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload
      );
      
      if (item.quantity <= 1) {
         state.cart.splice(itemIndex, itemIndex)
      } else {
        item.quantity--
      }

    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload)

      item.quantity++
    },

    // decrementQuantity: (state, action) => {
    //   const item = state.cart.find(item => item.id === action.payload);
    //   if (item.quantity === 1) {
    //     item.quantity = 1
    //   } else {
    //     item.quantity--;
    //   }
    // },

  },
})

export const { addToCart, removeFromCart, incrementQuantity } = cartSlice.actions

export default cartSlice.reducer