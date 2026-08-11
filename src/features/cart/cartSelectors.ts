import type { RootState } from '../../app/store'

export const selectCartItems = (state: RootState) => state.cart.items

export const selectCartItemCount = (state: RootState) =>
  selectCartItems(state).reduce((total, item) => total + item.quantity, 0)

export const selectCartTotal = (state: RootState) =>
  selectCartItems(state).reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
