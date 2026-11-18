export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'running' | 'training' | 'lifestyle';
  price: number;
  sizes: string[];
  imageUrl: string;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nova Run Shoe',
    brand: 'Stride',
    category: 'running',
    price: 120,
    sizes: ['40', '41', '42', '43'],
    imageUrl: 'https://picsum.photos/seed/nova/400/400',
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Flex Training Tee',
    brand: 'Pulse',
    category: 'training',
    price: 35,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://picsum.photos/seed/flex/400/400',
    inStock: true,
  },
  {
    id: 'p3',
    name: 'City Walk Sneaker',
    brand: 'Stride',
    category: 'lifestyle',
    price: 90,
    sizes: ['39', '40', '41', '42', '43'],
    imageUrl: 'https://picsum.photos/seed/city/400/400',
    inStock: false,
  },
  {
    id: 'p4',
    name: 'Power Hoodie',
    brand: 'Pulse',
    category: 'training',
    price: 75,
    sizes: ['S', 'M', 'L'],
    imageUrl: 'https://picsum.photos/seed/power/400/400',
    inStock: true,
  },
];
