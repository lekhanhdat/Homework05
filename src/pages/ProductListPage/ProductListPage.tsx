import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../app/store'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'
import { addToCart } from '../../features/cart/cartSlice'
import './ProductListPage.css'

function ProductListPage() {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <section>
      <h1>Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(selectedProduct) =>
              dispatch(addToCart(selectedProduct))
            }
          />
        ))}
      </ul>
    </section>
  )
}

export default ProductListPage
