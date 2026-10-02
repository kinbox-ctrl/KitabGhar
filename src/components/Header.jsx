import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, Sparkles, X } from "lucide-react";
import { BOOKS } from "../data/books.js";
import { useCart, cartCount } from "../lib/store.js";

const links = [
  ["#categories", "श्रेणियाँ"],
  ["#shop", "किताबें"],
  ["#authors", "लेखक"],
  ["#about", "हमारे बारे में"],
  ["#contact", "संपर्क"],
];

export default function Header() {
  const count = useCart((s) => cartCount(s.items));
  const setOpen = useCart((s) => s.setOpen);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const maxOff = Math.max(...BOOKS.map((b) => Math.round((1 - b.price / b.mrp) * 100)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goSearch = () => {
    setMenu(false);
    document.getElementById("shop").scrollIntoView();
    document.getElementById("book-search").focus({ preventScroll: true });
  };

  return (
    <>
      {/* Announcement strip */}
      <div className="bg-ink text-paper">
        <a href="#shop" className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-5 py-2 text-center text-sm">
          <Sparkles size={16} className="shrink-0 text-ochre" />
          <span>
            किताबों का कारवां चल पड़ा है — <span className="font-medium text-ochre">{maxOff}% तक की छूट</span>
          </span>
          <span className="hidden underline decoration-white/40 underline-offset-4 sm:inline">अभी देखें</span>
        </a>
      </div>

      <header className="sticky top-0 z-20 mx-auto max-w-7xl px-3 py-2.5 sm:px-5">
        <div
          className={`rounded-[1.75rem] bg-card/90 ring-1 ring-line backdrop-blur-md transition-shadow duration-300 ${
            scrolled ? "shadow-xl shadow-black/10" : "shadow-sm shadow-black/5"
          }`}
        >
          <div className="flex h-16 items-center gap-4 pl-3 pr-3 sm:pl-4">
            <a href="#top" className="flex items-center gap-3">
              <span className="relative grid size-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-[#b8370c] font-display text-lg text-white shadow-md shadow-accent/40">
                कि
                <span className="absolute -right-1 -top-1 size-3.5 rounded-full border-2 border-card bg-ochre" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-2xl tracking-tight">
                  Kitab<span className="italic text-accent">Ghar</span>
                </span>
                <span className="mt-0.5 block text-xs text-muted">किताबों का कारवां</span>
              </span>
            </a>

            <nav className="mx-auto hidden items-center gap-1 rounded-full bg-paper p-1 ring-1 ring-line lg:flex" aria-label="Main">
              {links.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full px-4 py-1.5 font-medium transition-colors hover:bg-ink hover:text-paper"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <button
                onClick={goSearch}
                aria-label="किताब खोजें"
                className="grid size-10 place-items-center rounded-full ring-1 ring-line transition-colors hover:bg-ink hover:text-paper hover:ring-ink"
              >
                <Search size={19} />
              </button>
              <button
                onClick={() => setOpen(true)}
                className="flex h-10 items-center gap-2 rounded-full bg-ink pl-4 pr-1.5 font-medium text-paper transition-colors hover:bg-accent"
                aria-label={`झोला खोलें, ${count} किताबें`}
              >
                <ShoppingBag size={18} strokeWidth={2} />
                <span className="max-sm:hidden">झोला</span>
                <span className="grid h-7 min-w-7 place-items-center rounded-full bg-accent px-2 text-sm tabular-nums text-white ring-2 ring-ink">
                  {count}
                </span>
              </button>
              <button
                onClick={() => setMenu(!menu)}
                aria-label="मेन्यू"
                aria-expanded={menu}
                className="grid size-10 place-items-center rounded-full ring-1 ring-line lg:hidden"
              >
                {menu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {menu && (
            <nav className="grid gap-1 border-t border-line p-3 lg:hidden" aria-label="Main">
              {links.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenu(false)}
                  className="rounded-2xl px-4 py-3 text-lg font-medium hover:bg-paper"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
