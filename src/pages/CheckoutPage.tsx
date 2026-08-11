function CheckoutPage() {
  return (
    <section>
      <h1>Checkout</h1>
      <form className="checkout-form">
        <fieldset className="checkout-section">
          <legend>Shipping Address</legend>
          <label className="form-field">
            Full Name
            <input name="fullName" type="text" autoComplete="name" />
          </label>
          <label className="form-field">
            Address
            <input name="address" type="text" autoComplete="street-address" />
          </label>
          <div className="form-row">
            <label className="form-field">
              City
              <input name="city" type="text" autoComplete="address-level2" />
            </label>
            <label className="form-field">
              ZIP Code
              <input name="zipCode" type="text" autoComplete="postal-code" />
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
            />
          </label>
          <div className="form-row">
            <label className="form-field">
              Expiration Date
              <input name="expirationDate" type="text" autoComplete="cc-exp" />
            </label>
            <label className="form-field">
              CVV
              <input
                name="cvv"
                type="text"
                inputMode="numeric"
                autoComplete="cc-csc"
              />
            </label>
          </div>
        </fieldset>

        <button className="checkout-button" type="submit">
          Place Order
        </button>
      </form>
    </section>
  )
}

export default CheckoutPage
