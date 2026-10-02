import { useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { BOOKS, CATEGORIES } from "../data/books.js";
import BookCard from "./BookCard.jsx";
import SectionHead from "./SectionHead.jsx";

const sorters = {
  featured: (a, b) => Boolean(b.featured) - Boolean(a.featured),
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  az: (a, b) => (a.titleEn || a.title).localeCompare(b.titleEn || b.title),
};

export default function Shop({ category, setCategory, query, setQuery, onAdded }) {
  const [sort, setSort] = useState("featured");

  const tabs = [{ key: "all", label: "सभी" }, ...CATEGORIES];
  const countIn = (key) => (key === "all" ? BOOKS.length : BOOKS.filter((b) => b.category === key).length);

  const books = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BOOKS.filter(
      (b) =>
        (category === "all" || b.category === category) &&
        (!q || [b.title, b.titleEn, b.author].some((f) => (f || "").toLowerCase().includes(q)))
    ).sort(sorters[sort]);
  }, [category, query, sort]);

  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 pb-20">
      <SectionHead kicker="अलमारी" title="सारी किताबें">
        <div className="flex items-center gap-3 max-sm:w-full">
          <label className="flex flex-1 items-center gap-2 rounded-full bg-card px-4 py-2.5 text-muted ring-1 ring-line focus-within:ring-ink">
            <Search size={16} className="shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="किताब या लेखक खोजें"
              id="book-search"
              aria-label="Search books"
              className="w-full bg-transparent text-base text-ink outline-none placeholder:text-muted sm:w-48"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="खोज साफ़ करें" className="shrink-0 hover:text-ink">
                <X size={16} />
              </button>
            )}
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort books"
            className="rounded-full bg-card px-4 py-2.5 text-base outline-none ring-1 ring-line hover:ring-ink"
          >
            <option value="featured">चुनी हुई</option>
            <option value="low">दाम ↑</option>
            <option value="high">दाम ↓</option>
            <option value="az">A–Z</option>
          </select>
        </div>
      </SectionHead>

      <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto p-0.5" role="group" aria-label="Categories">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setCategory(t.key)}
            aria-pressed={category === t.key}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-base font-medium transition-colors ${
              category === t.key ? "bg-ink text-paper" : "bg-card ring-1 ring-inset ring-line hover:ring-ink"
            }`}
          >
            {t.label} <span className="ml-1 tabular-nums opacity-60">{countIn(t.key)}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} onAdded={onAdded} />
          ))}
        </AnimatePresence>
      </div>

      {books.length === 0 && (
        <p className="py-20 text-center text-muted">इस खोज से कोई किताब नहीं मिली। कोई और नाम आज़माएँ।</p>
      )}
    </section>
  );
}
