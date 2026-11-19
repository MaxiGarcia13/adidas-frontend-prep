import { makeAutoObservable } from 'mobx';

export interface CartLine {
  productId: string;
  name: string;
  price: number;
  qty: number;
}

class CartStore {
  lines: CartLine[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product: Omit<CartLine, 'qty'>) {
    const index = this.findLineIndex(product.productId);
    if (index !== -1) {
      this.lines[index].qty++;
    } else {
      this.lines.push({ ...product, qty: 1 });
    }
  }

  setQty(productId: string, qty: number) {
    const index = this.findLineIndex(productId);
    if (index !== -1 && qty > 0) {
      this.lines[index].qty = qty;
    } else {
      this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: string) {
    this.lines = this.lines.filter((line) => line.productId !== productId);
  }

  private findLineIndex(productId: string) {
    return this.lines.findIndex((line) => line.productId === productId);
  }
}

export const cartStore = new CartStore();
