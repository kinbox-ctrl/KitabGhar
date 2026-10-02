import { ArrowUpRight } from "lucide-react";
import { BOOKS, CATEGORIES } from "../data/books.js";
import Cover from "./Cover.jsx";
import SectionHead from "./SectionHead.jsx";

const tones = ["bg-accent text-white", "bg-forest text-white", "bg-ochre text-ink", "bg-navy text-white"];

export default function Categories({ onPick }) {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-5 pb-20">
      <SectionHead kicker="श्रेणियाँ" title="अपना रास्ता चुनिए" />
      <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
        {CATEGORIES.map((cat, i) => {
          const books = BOOKS.filter((b) => b.category === cat.key);
          return (
            <button
              key={cat.key}
              onClick={() => onPick(cat.key)}
              className={`group relative flex h-48 flex-col items-start overflow-hidden rounded-[1.75rem] p-5 text-left transition-transform duration-300 hover:-translate-y-1.5 md:h-60 md:p-6 ${tones[i % tones.length]}`}
            >
              <span className="opacity-80">{books.length} किताबें</span>
              <span className="mt-1 block font-display text-2xl leading-snug md:text-[2rem]">{cat.label}</span>
              <span className="block opacity-80">{cat.sub}</span>
              <span className="absolute bottom-5 left-5 grid size-10 place-items-center rounded-full bg-white/20 transition-colors group-hover:bg-white group-hover:text-ink md:bottom-7 md:left-7">
                <ArrowUpRight size={19} />
              </span>
              {books[0] && (
                <Cover
                  book={books[0]}
                  className="!absolute -bottom-8 -right-3 w-[44%] rotate-12 shadow-xl shadow-black/30 transition-transform duration-300 group-hover:-translate-y-3 group-hover:rotate-6"
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
