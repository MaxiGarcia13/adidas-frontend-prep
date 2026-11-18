export interface Product {
  id: string;
  name: string;
  category: 'running' | 'training' | 'lifestyle';
  price: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nova Run Shoe',
    category: 'running',
    price: 120,
  },
  {
    id: 'p2',
    name: 'Flex Training Tee',
    category: 'training',
    price: 35,
  },
  {
    id: 'p3',
    name: 'City Walk Sneaker',
    category: 'lifestyle',
    price: 90,
  },
  {
    id: 'p4',
    name: 'Power Hoodie',
    category: 'training',
    price: 75,
  },
  {
    id: 'p5',
    name: 'Trail Pack Jacket',
    category: 'running',
    price: 140,
  },
  {
    id: 'p6',
    name: 'Everyday Cap',
    category: 'lifestyle',
    price: 25,
  },
];
