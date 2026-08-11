export type Product = {
  id: number
  name: string
  price: number
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    description: 'Comfortable Bluetooth headphones with clear sound and long battery life.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 129.99,
    description: 'A lightweight watch for tracking workouts, notifications, and daily activity.',
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 89.99,
    description: 'A compact mechanical keyboard with responsive keys for work and gaming.',
  },
  {
    id: 4,
    name: 'USB-C Hub',
    price: 39.99,
    description: 'A portable hub with HDMI, USB, and card reader ports for laptops.',
  },
  {
    id: 5,
    name: 'Laptop Stand',
    price: 99.99,
    description: 'An adjustable aluminum stand that improves desk ergonomics.',
  },
]
