import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { useCart, money } from "../lib/store.js";
import Book3D from "./Book3D.jsx";

export default function BookCard({ book, onAdded }) {
  const add = useCart((s) => s.add);
  const off = book.mrp > book.price ? Math.round((1 - book.price / book.mrp) * 100) : 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col rounded-[1.75rem] bg-card p-2.5 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
    >
      <div
        className="relative grid aspect-[5/6] place-items-center rounded-[1.25rem]"
        style={{ backgroundColor: `color-mix(in srgb, ${book.color} 16%, #f6f4ee)` }}
      >
        {off > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-ink px-2.5 py-1 text-xs font-medium tabular-nums text-paper">
            −{off}%
          </span>
        )}
        <Book3D book={book} className="w-[48%]" thickness="1.25rem" />
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-4">
        <h3 className="font-display text-[1.35rem] leading-snug">{book.title}</h3>
        <p className="text-muted">{book.author}</p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted max-sm:hidden">{book.blurb}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <p className="tabular-nums">
            <span className="text-xl font-semibold">{money(book.price)}</span>
            {off > 0 && <s className="ml-1.5 text-sm text-muted">{money(book.mrp)}</s>}
          </p>
          <button
            onClick={() => {
              add(book.id);
              onAdded(book);
            }}
            className="inline-flex items-center gap-1 rounded-full bg-ink py-2 pl-3 pr-4 text-sm font-medium text-paper transition-colors hover:bg-accent max-sm:px-2.5"
            aria-label={`${book.titleEn || book.title} झोले में डालें`}
          >
            <Plus size={16} />
            <span className="max-sm:hidden">जोड़ें</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
