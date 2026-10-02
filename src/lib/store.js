import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BOOKS } from "../data/books.js";

export const money = (n) => "₹" + n.toLocaleString("en-IN");
export const bookById = (id) => BOOKS.find((b) => b.id === id);

export const useCart = create(
  persist(
    (set) => ({
      items: {}, // { [bookId]: quantity }
      open: false,
      setOpen: (open) => set({ open }),
      add: (id) => set((s) => ({ items: { ...s.items, [id]: (s.items[id] || 0) + 1 } })),
      change: (id, delta) =>
        set((s) => {
          const items = { ...s.items };
          const qty = (items[id] || 0) + delta;
          if (qty <= 0) delete items[id];
          else items[id] = qty;
          return { items };
        }),
      clear: () => set({ items: {} }),
    }),
    { name: "kitabghar-cart", partialize: (s) => ({ items: s.items }) }
  )
);

// Cart lines for books that still exist in the catalogue
export const cartLines = (items) =>
  Object.entries(items)
    .map(([id, qty]) => ({ book: bookById(id), qty }))
    .filter((l) => l.book);

export const cartCount = (items) => cartLines(items).reduce((n, l) => n + l.qty, 0);
export const cartTotal = (items) => cartLines(items).reduce((n, l) => n + l.book.price * l.qty, 0);
