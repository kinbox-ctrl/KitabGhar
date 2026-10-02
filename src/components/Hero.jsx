import { ArrowRight } from "lucide-react";
import { BOOKS, CATEGORIES } from "../data/books.js";
import { heroImage } from "../lib/images.js";
import { money } from "../lib/store.js";
import Cover from "./Cover.jsx";

export default function Hero() {
  const fan = BOOKS.filter((b) => b.featured).slice(0, 5);
  const mid = (fan.length - 1) / 2;
  const maxOff = Math.max(...BOOKS.map((b) => Math.round((1 - b.price / b.mrp) * 100)));
  const stats = [
    [BOOKS.length, "किताबें"],
    [CATEGORIES.length, "श्रेणियाँ"],
    [`${maxOff}%`, "तक की छूट"],
    [money(Math.min(...BOOKS.map((b) => b.price))), "से शुरू"],
  ];

  return (
    <section id="top" className="mx-auto max-w-7xl px-3 sm:px-5">
      <div className="hero-grid relative grid overflow-hidden rounded-[2rem] bg-ink text-paper md:grid-cols-2">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[30rem] rounded-full bg-accent/20 blur-[110px]" aria-hidden="true" />

        <div className="relative z-10 p-7 sm:p-10 md:py-12 md:pl-14 md:pr-4">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-paper/80 backdrop-blur">
            <span className="size-2 rounded-full bg-accent" />
            Kitabon Ka Karwan
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,5.4vw,4.5rem)] leading-[1.2]">
            किताबों का <span className="italic text-accent">कारवां</span>
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-paper/65">
            प्रेमचंद से नारायण तक — चुनी हुई हिंदी और अंग्रेज़ी किताबें, सीधे आपके घर तक।
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/30 transition-colors hover:bg-paper hover:text-ink"
            >
              किताबें देखें
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="rounded-full border border-white/25 px-6 py-3 font-medium transition-colors hover:border-white hover:bg-white/5">
              हमारी कहानी
            </a>
          </div>

          <dl className="mt-9 grid max-w-md grid-cols-4 gap-4 border-t border-white/15 pt-5">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl tabular-nums">{value}</dt>
                <dd className="text-sm text-paper/55">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[300px] md:min-h-0" aria-hidden="true">
          {heroImage ? (
            <img src={heroImage} alt="" className="absolute inset-0 size-full object-cover" />
          ) : (
            <>
              <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-[42%] rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-[38%] rounded-full bg-accent/50 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[52%] -translate-x-1/2 -translate-y-[36%] rounded-full bg-gradient-to-b from-accent to-[#b8370c]" />
              {fan.map((book, i) => {
                const d = i - mid;
                return (
                  <div
                    key={book.id}
                    className="absolute left-1/2 top-1/2 w-[23%] origin-bottom"
                    style={{
                      transform: `translate(calc(-50% + ${d * 52}%), calc(-50% + ${Math.abs(d) * 7}%)) rotate(${d * 9}deg)`,
                      zIndex: 10 - Math.abs(d),
                    }}
                  >
                    <Cover
                      book={book}
                      className="animate-drift shadow-[0_24px_40px_-12px_rgb(0_0_0/0.7)]"
                      style={{ animationDelay: `${-i * 1.3}s` }}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
