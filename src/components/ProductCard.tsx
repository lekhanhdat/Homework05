import type { Product } from '../data/products'
import { formatCurrency } from '../utils/currency'

type ProductCardProps = {
  product: Product
  onAddToCart: (product: Product) => void
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <li className="product-item">
      <h2>{product.name}</h2>
      <p className="product-price">{formatCurrency(product.price)}</p>
      <p className="product-description">{product.description}</p>
      <button
        className="product-action"
        type="button"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </li>
  )
}

export default ProductCard
