const KEY = 'prep-wishlist-ids';

export async function loadWishlistIds(): Promise<string[]> {
  await delay(150);
  try {
    const raw = localStorage.getItem(KEY);
    return raw
      ? (JSON.parse(raw) as string[])
      : [];
  } catch {
    return [];
  }
}

export async function saveWishlistIds(ids: string[]): Promise<void> {
  await delay(150);
  // TODO: candidate should call this (or equivalent) when wishlist changes
  localStorage.setItem(KEY, JSON.stringify(ids));
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
