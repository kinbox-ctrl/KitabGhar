import { BOOKS } from "../data/books.js";
import SectionHead from "./SectionHead.jsx";

const firstLetter = (name) => [...new Intl.Segmenter("hi", { granularity: "grapheme" }).segment(name)][0].segment;

export default function Authors({ onPick }) {
  const authors = [];
  for (const book of BOOKS) {
    const found = authors.find((a) => a.name === book.author);
    if (found) found.count += 1;
    else authors.push({ name: book.author, count: 1, color: book.color });
  }

  return (
    <section id="authors" className="mx-auto max-w-7xl px-5 pb-20">
      <SectionHead kicker="लेखक" title="जिनकी कलम से" />
      <div className="mt-9 flex flex-wrap gap-3">
        {authors.map((a) => (
          <button
            key={a.name}
            onClick={() => onPick(a.name)}
            className="group flex items-center gap-3 rounded-full bg-card py-2 pl-2 pr-5 ring-1 ring-line transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 hover:ring-ink"
          >
            <span
              className="grid size-11 place-items-center rounded-full font-display text-lg text-white"
              style={{ backgroundColor: a.color }}
            >
              {firstLetter(a.name)}
            </span>
            <span className="text-left leading-tight">
              <span className="block font-medium">{a.name}</span>
              <span className="text-sm text-muted">{a.count} किताबें</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
