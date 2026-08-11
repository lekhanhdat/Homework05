import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

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
            <p className="cart-item-quantity">Quantity: {item.quantity}</p>
            <p className="cart-item-subtotal">
              Subtotal: {currencyFormatter.format(item.price * item.quantity)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CartPage
