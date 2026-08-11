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
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
