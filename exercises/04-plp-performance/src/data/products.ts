export interface Product {
  id: string;
  name: string;
  category: 'running' | 'training' | 'lifestyle';
  price: number;
  imageUrl: string;
}

const categories = ['running', 'training', 'lifestyle'] as const;

/** Intentionally large catalog for perf practice. */
export const PRODUCTS: Product[] = Array.from({ length: 2500 }, (_, i) => {
  const category = categories[i % categories.length];
  return {
    id: `p${i}`,
    name: `Item ${i} ${category}`,
    category,
    price: 20 + (i % 50) * 3,
    imageUrl: `https://picsum.photos/seed/perf${i % 40}/300/300`,
  };
});
