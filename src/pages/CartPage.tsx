import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { AppDispatch } from '../app/store'
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
          <li className="cart-item" key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p className="cart-item-price">
                {formatCurrency(item.price)}
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
              Subtotal: {formatCurrency(item.price * item.quantity)}
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
        <strong>{formatCurrency(cartTotal)}</strong>
      </div>
    </section>
  )
}

export default CartPage
