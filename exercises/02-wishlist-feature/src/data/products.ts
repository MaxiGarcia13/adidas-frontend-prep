export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nova Run Shoe',
    brand: 'Stride',
    price: 120,
    imageUrl: 'https://picsum.photos/seed/nova/400/400',
  },
  {
    id: 'p2',
    name: 'Flex Training Tee',
    brand: 'Pulse',
    price: 35,
    imageUrl: 'https://picsum.photos/seed/flex/400/400',
  },
  {
    id: 'p3',
    name: 'City Walk Sneaker',
    brand: 'Stride',
    price: 90,
    imageUrl: 'https://picsum.photos/seed/city/400/400',
  },
  {
    id: 'p4',
    name: 'Power Hoodie',
    brand: 'Pulse',
    price: 75,
    imageUrl: 'https://picsum.photos/seed/power/400/400',
  },
  {
    id: 'p5',
    name: 'Trail Pack Jacket',
    brand: 'Summit',
    price: 140,
    imageUrl: 'https://picsum.photos/seed/trail/400/400',
  },
];
