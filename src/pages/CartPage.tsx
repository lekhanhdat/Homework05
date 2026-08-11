import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { AppDispatch, RootState } from '../app/store'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../features/cart/cartSlice'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function CartPage() {
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  if (cartItems.length === 0) {
    return (
      <section>
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <h2>Your cart is empty! Add products to your cart before reviewing your order.</h2>
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
          <li className="cart-item" key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p className="cart-item-price">
                {currencyFormatter.format(item.price)}
              </p>
            </div>
            <div className="quantity-controls">
              <span className="cart-item-quantity">Quantity: </span>
              <button
                className="quantity-button"
                type="button"
                onClick={() => dispatch(decreaseQuantity(item.id))}
                disabled={item.quantity === 1}
                aria-label={`Decrease ${item.name} quantity`}
              >
                -
              </button>
              <span className="cart-item-quantity">{item.quantity}</span>
              <button
                className="quantity-button"
                type="button"
                onClick={() => dispatch(increaseQuantity(item.id))}
                aria-label={`Increase ${item.name} quantity`}
              >
                +
              </button>
            </div>
            <p className="cart-item-subtotal">
              Subtotal: {currencyFormatter.format(item.price * item.quantity)}
            </p>
            <button
              className="remove-button"
              type="button"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <span>Total</span>
        <strong>{currencyFormatter.format(cartTotal)}</strong>
      </div>
    </section>
  )
}

export default CartPage
