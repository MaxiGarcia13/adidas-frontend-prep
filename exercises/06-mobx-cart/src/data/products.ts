export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nova Run Shoe',
    price: 120,
    imageUrl: 'https://picsum.photos/seed/nova/200/200',
  },
  {
    id: 'p2',
    name: 'Flex Training Tee',
    price: 35,
    imageUrl: 'https://picsum.photos/seed/flex/200/200',
  },
  {
    id: 'p3',
    name: 'Power Hoodie',
    price: 75,
    imageUrl: 'https://picsum.photos/seed/power/200/200',
  },
];
