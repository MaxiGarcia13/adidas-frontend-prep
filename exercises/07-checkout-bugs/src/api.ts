export type CheckoutPayload = {
  email: string;
  size: string;
  qty: number;
};

export type CheckoutResult = {
  orderId: string;
  email: string;
  shipping?: { city: string };
};

export async function submitCheckout(payload: CheckoutPayload): Promise<CheckoutResult> {
  await delay(700);
  if (!payload.email.includes("@")) {
    throw new Error("Invalid email");
  }
  // Sometimes backend omits shipping — UI must not crash
  const includeShipping = payload.qty % 2 === 1;
  return {
    orderId: `ord_${Math.random().toString(36).slice(2, 8)}`,
    email: payload.email,
    shipping: includeShipping ? { city: "Zaragoza" } : undefined,
  };
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
