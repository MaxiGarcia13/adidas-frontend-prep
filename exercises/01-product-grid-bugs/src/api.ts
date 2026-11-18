import type { Product } from './data/products';
import { PRODUCTS } from './data/products';

export type ProductDto = Omit<Product, 'price'> & { price: number | string };

/** Simulated network API — intentionally a bit messy. */
export async function fetchProducts(): Promise<ProductDto[]> {
  await delay(400 + Math.random() * 400);

  // Occasionally return prices as strings (backend inconsistency).
  return PRODUCTS.map((p, i) => ({
    ...p,
    price: i % 2 === 0
      ? p.price
      : String(p.price),
  }));
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
