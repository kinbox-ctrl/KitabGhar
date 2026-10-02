import { ShoppingBag } from "lucide-react";
import { BOOKS } from "../data/books.js";
import { useCart, money } from "../lib/store.js";
import Book3D from "./Book3D.jsx";

// Highlights one book: the one marked `spotlight: true` in books.js, else the first featured one.
export default function Spotlight({ onAdded }) {
  const add = useCart((s) => s.add);
  const book = BOOKS.find((b) => b.spotlight) || BOOKS.find((b) => b.featured) || BOOKS[0];
  const off = book.mrp > book.price ? Math.round((1 - book.price / book.mrp) * 100) : 0;

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="grid overflow-hidden rounded-[2rem] bg-card md:grid-cols-2">
        <div
          className="grid min-h-[300px] place-items-center p-10"
          style={{ backgroundColor: `color-mix(in srgb, ${book.color} 22%, #f6f4ee)` }}
        >
          <Book3D book={book} thickness="2.25rem" className="w-[40%] max-w-[210px]" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="flex items-center gap-2 text-sm font-medium text-muted">
            <span className="size-2 rounded-full bg-accent" />
            इस हफ़्ते की किताब
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.3] md:text-5xl md:leading-[1.3]">{book.title}</h2>
          <p className="mt-2 text-lg text-muted">{book.author}</p>
          <p className="mt-5 max-w-md text-lg leading-relaxed">{book.blurb}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <p className="tabular-nums">
              <span className="font-display text-4xl">{money(book.price)}</span>
              {off > 0 && <s className="ml-2.5 text-muted">{money(book.mrp)}</s>}
              {off > 0 && <span className="ml-2.5 rounded-full bg-accent/10 px-2.5 py-1 text-sm font-medium text-accent">−{off}%</span>}
            </p>
            <button
              onClick={() => {
                add(book.id);
                onAdded(book);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-colors hover:bg-accent"
            >
              <ShoppingBag size={18} />
              झोले में डालें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
