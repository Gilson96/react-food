import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        
      } else {
        state.cart.push({
          name: action.payload.name,
          price: action.payload.price === undefined ? 0 : action.payload.price,
          totalPrice: action.payload.totalPrice,
          id: action.payload.id,
          quantity: 1,
        });
      }
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
  },
})

export const { addToCart, removeFromCart, incrementQuantity} = cartSlice.actions

export const selectBasketTotal = (state) => state.cart.cart.reduce((total,item) => total += Number.parseFloat(item.price)*item.quantity, 0)



export default cartSlice.reducer