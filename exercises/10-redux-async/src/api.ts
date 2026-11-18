export type Product = {
  id: string;
  name: string;
  price: number;
};

const DATA: Product[] = [
  { id: "p1", name: "Nova Run Shoe", price: 120 },
  { id: "p2", name: "Flex Training Tee", price: 35 },
  { id: "p3", name: "Power Hoodie", price: 75 },
  { id: "p4", name: "Everyday Cap", price: 25 },
];

export async function fetchProducts(shouldFail = false): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 500));
  if (shouldFail) throw new Error("Network error");
  return DATA;
}
