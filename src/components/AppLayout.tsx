import { Link, Outlet } from 'react-router-dom'

function AppLayout() {
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
