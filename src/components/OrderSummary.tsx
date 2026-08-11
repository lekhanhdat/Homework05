import type { CartItem } from '../features/cart/cartSlice'
import { formatCurrency } from '../utils/currency'

type OrderSummaryProps = {
  items: CartItem[]
  total: number
}

function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <aside className="order-summary" aria-labelledby="order-summary-title">
      <h2 id="order-summary-title">Order Summary</h2>
      {items.length > 0 ? (
        <ul className="summary-list">
          {items.map((item) => (
            <li className="summary-item" key={item.id}>
              <div>
                <span className="summary-item-name">{item.name}</span>
                <span className="summary-item-quantity">x{item.quantity}</span>
              </div>
              <strong>{formatCurrency(item.price * item.quantity)}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in cart.</p>
      )}
      <div className="summary-total">
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </aside>
  )
}

export default OrderSummary
