export type Product = {
  id: string;
  name: string;
  tags: string[];
  price: number;
  inStock: boolean;
};

export const PRODUCTS: Product[] = Array.from({ length: 3000 }, (_, i) => ({
  id: `p${i}`,
  name: `Gear ${i}`,
  tags: i % 2 === 0 ? ["run", "road"] : ["train", "gym", "layer"],
  price: 15 + (i % 80),
  inStock: i % 5 !== 0,
}));
