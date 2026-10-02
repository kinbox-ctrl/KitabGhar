import { ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";
import { SHOP, CATEGORIES } from "../data/books.js";

const links = [
  ["#categories", "श्रेणियाँ"],
  ["#shop", "सारी किताबें"],
  ["#authors", "लेखक"],
  ["#about", "हमारे बारे में"],
];

const heading = "text-sm font-medium text-paper/45";
const link = "transition-colors hover:text-accent";

export default function Footer({ onPickCategory }) {
  return (
    <footer id="contact" className="relative overflow-hidden rounded-t-[2rem] bg-ink text-paper">
      <div className="pointer-events-none absolute -right-40 -top-64 size-[30rem] rounded-full bg-accent/20 blur-[130px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 py-10 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div className="max-lg:col-span-2">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-[#b8370c] font-display text-lg text-white">
                कि
              </span>
              <span className="leading-none">
                <span className="block font-display text-2xl tracking-tight">
                  Kitab<span className="italic text-accent">Ghar</span>
                </span>
                <span className="mt-1 block text-sm text-paper/55">किताबों का कारवां</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-paper/60">चुनी हुई हिंदी और अंग्रेज़ी किताबें, सीधे आपके घर तक।</p>
          </div>

          <div>
            <p className={heading}>दुकान</p>
            <ul className="mt-3 space-y-1.5">
              {links.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className={link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={heading}>श्रेणियाँ</p>
            <ul className="mt-3 space-y-1.5">
              {CATEGORIES.map((c) => (
                <li key={c.key}>
                  <button onClick={() => onPickCategory(c.key)} className={link}>
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-lg:col-span-2">
            <p className={heading}>संपर्क</p>
            <ul className="mt-3 space-y-2">
              {SHOP.whatsapp && (
                <li>
                  <a href={`https://wa.me/${SHOP.whatsapp}`} className={`flex items-center gap-2.5 ${link}`}>
                    <MessageCircle size={17} className="shrink-0 text-accent" />+{SHOP.whatsapp}
                  </a>
                </li>
              )}
              {SHOP.email && (
                <li>
                  <a href={`mailto:${SHOP.email}`} className={`flex items-center gap-2.5 break-all ${link}`}>
                    <Mail size={17} className="shrink-0 text-accent" />
                    {SHOP.email}
                  </a>
                </li>
              )}
              {SHOP.city && (
                <li className="flex items-center gap-2.5">
                  <MapPin size={17} className="shrink-0 text-accent" />
                  {SHOP.city}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-4 text-sm text-paper/55">
          <p>© {new Date().getFullYear()} KitabGhar · पढ़ते रहिए</p>
          <a href="#top" className={`inline-flex items-center gap-1.5 ${link}`}>
            ऊपर जाएँ
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
