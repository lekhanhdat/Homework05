import type { CartItem } from '../features/cart/cartSlice'
import { formatCurrency } from '../utils/currency'

type CartItemRowProps = {
  item: CartItem
  onDecreaseQuantity: (itemId: number) => void
  onIncreaseQuantity: (itemId: number) => void
  onRemove: (itemId: number) => void
}

function CartItemRow({
  item,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemove,
}: CartItemRowProps) {
  return (
    <li className="cart-item">
      <div>
        <h2>{item.name}</h2>
        <p className="cart-item-price">{formatCurrency(item.price)}</p>
      </div>
      <div className="quantity-controls">
        <span className="cart-item-quantity">Quantity: </span>
        <button
          className="quantity-button"
          type="button"
          onClick={() => onDecreaseQuantity(item.id)}
          disabled={item.quantity === 1}
          aria-label={`Decrease ${item.name} quantity`}
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button
          className="quantity-button"
          type="button"
          onClick={() => onIncreaseQuantity(item.id)}
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
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </li>
  )
}

export default CartItemRow
