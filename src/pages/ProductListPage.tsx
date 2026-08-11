import { products } from '../data/products'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function ProductListPage() {
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
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductListPage
