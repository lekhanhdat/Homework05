import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { AppDispatch } from '../app/store'
import CartItemRow from '../components/CartItemRow'
import { selectCartItems, selectCartTotal } from '../features/cart/cartSelectors'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../features/cart/cartSlice'
import { formatCurrency } from '../utils/currency'

function CartPage() {
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  if (cartItems.length === 0) {
    return (
      <section>
        <h1>Shopping Cart</h1>
          <div className="checkout-empty" role="alert">
            <h2>Your cart is empty!</h2>
            <p>Add products to cart before placing an order.</p>
            <Link className="empty-cart-link" to="/products">
              Go to Products
            </Link>
          </div>
      </section>
    )
  }

  return (
    <section>
      <h1>Shopping Cart</h1>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            onDecreaseQuantity={(itemId) => dispatch(decreaseQuantity(itemId))}
            onIncreaseQuantity={(itemId) => dispatch(increaseQuantity(itemId))}
            onRemove={(itemId) => dispatch(removeFromCart(itemId))}
          />
        ))}
      </ul>
      <div className="cart-summary">
        <span>Total</span>
        <strong>{formatCurrency(cartTotal)}</strong>
      </div>
    </section>
  )
}

export default CartPage
