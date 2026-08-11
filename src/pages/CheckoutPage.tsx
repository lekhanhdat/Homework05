import { type ChangeEvent, type FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../app/store'
import {
  type CheckoutField,
  submitCheckout,
  updateCheckoutField,
} from '../features/checkout/checkoutSlice'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function CheckoutPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { errors, form, submitStatus } = useSelector(
    (state: RootState) => state.checkout,
  )
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const handleFieldChange =
    (field: CheckoutField) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(updateCheckoutField({ field, value: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(submitCheckout())
  }

  return (
    <section>
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <fieldset className="checkout-section">
            <legend>Shipping Address</legend>
            <label className="form-field">
              Full Name
              <input
                name="fullName"
                type="text"
                autoComplete="name"
                value={form.fullName}
                onChange={handleFieldChange('fullName')}
                aria-invalid={Boolean(errors.fullName)}
              />
              {errors.fullName && (
                <span className="form-error">{errors.fullName}</span>
              )}
            </label>
            <label className="form-field">
              Address
              <input
                name="address"
                type="text"
                autoComplete="street-address"
                value={form.address}
                onChange={handleFieldChange('address')}
                aria-invalid={Boolean(errors.address)}
              />
              {errors.address && (
                <span className="form-error">{errors.address}</span>
              )}
            </label>
            <div className="form-row">
              <label className="form-field">
                City
                <input
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  value={form.city}
                  onChange={handleFieldChange('city')}
                  aria-invalid={Boolean(errors.city)}
                />
                {errors.city && (
                  <span className="form-error">{errors.city}</span>
                )}
              </label>
              <label className="form-field">
                ZIP Code
                <input
                  name="zipCode"
                  type="text"
                  autoComplete="postal-code"
                  value={form.zipCode}
                  onChange={handleFieldChange('zipCode')}
                  aria-invalid={Boolean(errors.zipCode)}
                />
                {errors.zipCode && (
                  <span className="form-error">{errors.zipCode}</span>
                )}
              </label>
            </div>
          </fieldset>

          <fieldset className="checkout-section">
            <legend>Payment Information</legend>
            <label className="form-field">
              Card Number
              <input
                name="cardNumber"
                type="text"
                inputMode="numeric"
                autoComplete="cc-number"
                value={form.cardNumber}
                onChange={handleFieldChange('cardNumber')}
                aria-invalid={Boolean(errors.cardNumber)}
              />
              {errors.cardNumber && (
                <span className="form-error">{errors.cardNumber}</span>
              )}
            </label>
            <div className="form-row">
              <label className="form-field">
                Expiration Date
                <input
                  name="expirationDate"
                  type="text"
                  autoComplete="cc-exp"
                  value={form.expirationDate}
                  onChange={handleFieldChange('expirationDate')}
                  aria-invalid={Boolean(errors.expirationDate)}
                />
                {errors.expirationDate && (
                  <span className="form-error">{errors.expirationDate}</span>
                )}
              </label>
              <label className="form-field">
                CVV
                <input
                  name="cvv"
                  type="text"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  value={form.cvv}
                  onChange={handleFieldChange('cvv')}
                  aria-invalid={Boolean(errors.cvv)}
                />
                {errors.cvv && <span className="form-error">{errors.cvv}</span>}
              </label>
            </div>
          </fieldset>

          <button className="checkout-button" type="submit">
            Place Order
          </button>
          {submitStatus === 'success' && (
            <p className="checkout-success" role="status">
              Purchase completed successfully.
            </p>
          )}
        </form>

        <aside className="order-summary" aria-labelledby="order-summary-title">
          <h2 id="order-summary-title">Order Summary</h2>
          {cartItems.length > 0 ? (
            <ul className="summary-list">
              {cartItems.map((item) => (
                <li className="summary-item" key={item.id}>
                  <div>
                    <span className="summary-item-name">{item.name}</span>
                    <span className="summary-item-quantity">
                      x{item.quantity}
                    </span>
                  </div>
                  <strong>
                    {currencyFormatter.format(item.price * item.quantity)}
                  </strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in cart.</p>
          )}
          <div className="summary-total">
            <span>Total</span>
            <strong>{currencyFormatter.format(cartTotal)}</strong>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default CheckoutPage
