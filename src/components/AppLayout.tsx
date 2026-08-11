import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { selectCartItemCount } from '../features/cart/cartSelectors'
import './AppLayout.scss'

function AppLayout() {
  const cartItemCount = useSelector(selectCartItemCount)

  return (
    <div className="app-shell">
      <header className="app-header">
        <Link className="app-brand" to="/products">
          Shopping Cart
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/cart">
            Cart
            {cartItemCount > 0 && (
              <span className="cart-count" aria-label={`${cartItemCount} cart items`}>
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link className="nav-link" to="/checkout">
            Checkout
          </Link>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
