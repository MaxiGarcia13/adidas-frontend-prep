import { makeAutoObservable } from 'mobx';

export interface Line { id: string; name: string; price: number; qty: number }

class CheckoutStore {
  lines: Line[] = [
    {
      id: 'p1',
      name: 'Nova Run Shoe',
      price: 120,
      qty: 1,
    },
    {
      id: 'p2',
      name: 'Flex Training Tee',
      price: 35,
      qty: 2,
    },
  ];

  discountCode = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setDiscountCode(code: string) {
    this.discountCode = code.trim().toUpperCase();
  }
}

export const checkoutStore = new CheckoutStore();
