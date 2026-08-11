import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import './App.css'

function ProductListPage() {
  return <h1>Products</h1>
}

function CartPage() {
  return <h1>Shopping Cart</h1>
}

function CheckoutPage() {
  return <h1>Checkout</h1>
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  )
}

export default App
