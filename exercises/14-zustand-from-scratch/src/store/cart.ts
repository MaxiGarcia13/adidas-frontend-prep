import { create } from 'zustand';

interface CartLine {
  productId: string;
  name: string;
  price: number;
  qty: number;
}

interface CartState {
  lines: CartLine[];
}

interface CartActions {
  addToCart: (line: CartLine) => void;
  setQty: (productId: CartLine['productId'], qty: CartLine['qty']) => void;
  removeFromCart: (productId: CartLine['productId']) => void;
}

export const useCart = create<CartState & CartActions>((set) => ({
  lines: [],
  addToCart: ({ productId, name, price }) => {
    set((state) => {
      const lines = [...state.lines];

      const existingLineIndex = findLineIndex(state.lines, productId);

      if (existingLineIndex !== -1) {
        lines[existingLineIndex] = updateLineQty(state.lines[existingLineIndex], state.lines[existingLineIndex].qty + 1);
      } else {
        lines.push({ productId, name, price, qty: 1 });
      }

      return { lines };
    });
  },
  setQty: (productId, qty) => {
    set((state) => {
      const lines = [...state.lines];

      const existingLineIndex = findLineIndex(state.lines, productId);

      if (existingLineIndex !== -1) {
        if (qty <= 0) {
          lines.splice(existingLineIndex, 1);
        } else {
          lines[existingLineIndex] = updateLineQty(state.lines[existingLineIndex], qty);
        }
      }

      return { lines };
    });
  },
  removeFromCart: (productId) => {
    set((state) => {
      return {
        lines: state.lines.filter((line) => line.productId !== productId),
      };
    });
  },
}));

function updateLineQty(line: CartLine, qty: number) {
  return { ...line, qty };
}

function findLineIndex(lines: CartLine[], productId: string) {
  return lines.findIndex((line) => line.productId === productId);
}
