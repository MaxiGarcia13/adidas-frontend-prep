import { makeAutoObservable } from "mobx";

export type Line = { id: string; name: string; price: number; qty: number };

class CheckoutStore {
  lines: Line[] = [
    { id: "p1", name: "Nova Run Shoe", price: 120, qty: 1 },
    { id: "p2", name: "Flex Training Tee", price: 35, qty: 2 },
  ];
  discountCode = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setDiscountCode(code: string) {
    this.discountCode = code.trim().toUpperCase();
  }

  // Intentionally incomplete — candidate may add inc/dec actions.
  // BUG path: UI currently mutates qty directly.
}

export const checkoutStore = new CheckoutStore();
