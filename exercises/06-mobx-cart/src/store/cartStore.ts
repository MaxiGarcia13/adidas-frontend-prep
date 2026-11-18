import { makeAutoObservable } from "mobx";

export type CartLine = { productId: string; name: string; price: number; qty: number };

class CartStore {
  lines: CartLine[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(productId: string, name: string, price: number) {
    const existing = this.lines.find((l) => l.productId === productId);
    if (existing) {
      existing.qty += 1;
      return;
    }
    this.lines.push({ productId, name, price, qty: 1 });
  }

  remove(productId: string) {
    this.lines = this.lines.filter((l) => l.productId !== productId);
  }

  setQty(productId: string, qty: number) {
    if (qty <= 0) {
      this.remove(productId);
      return;
    }
    const line = this.lines.find((l) => l.productId === productId);
    if (!line) return;
    line.qty = qty;
  }

  get count() {
    return this.lines.reduce((n, l) => n + l.qty, 0);
  }

  get total() {
    return this.lines.reduce((n, l) => n + l.qty * l.price, 0);
  }
}

export const cartStore = new CartStore();
