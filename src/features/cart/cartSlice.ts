import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type AddToCartPayload = {
  id: number
  name: string
  price: number
}

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      )

      if (existingItem) {
        existingItem.quantity += 1
        return
      }

      state.items.push({
        ...action.payload,
        quantity: 1,
      })
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find((item) => item.id === action.payload)

      if (existingItem) {
        existingItem.quantity += 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find((item) => item.id === action.payload)

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} = cartSlice.actions

export default cartSlice.reducer
