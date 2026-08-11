import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../app/store'
import { products } from '../data/products'
import { addToCart } from '../features/cart/cartSlice'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function ProductListPage() {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <section>
      <h1>Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            <h2>{product.name}</h2>
            <p className="product-price">
              {currencyFormatter.format(product.price)}
            </p>
            <p className="product-description">{product.description}</p>
            <button
              className="product-action"
              type="button"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductListPage
