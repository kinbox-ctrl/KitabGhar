import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Minus, Plus, X } from "lucide-react";
import { SHOP } from "../data/books.js";
import { useCart, cartLines, cartTotal, money } from "../lib/store.js";
import Cover from "./Cover.jsx";

const field =
  "w-full border-b border-line bg-transparent py-2 outline-none transition-colors placeholder:text-muted focus:border-ink";

export default function CartDrawer() {
  const { items, open, setOpen, change, clear } = useCart();
  const [done, setDone] = useState(null); // confirmation text after ordering
  const lines = cartLines(items);
  const total = cartTotal(items);

  const close = () => {
    setOpen(false);
    setDone(null);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function placeOrder(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const message = [
      "नमस्ते KitabGhar! मेरा ऑर्डर:",
      ...lines.map((l) => `• ${l.book.titleEn || l.book.title} × ${l.qty} — ${money(l.book.price * l.qty)}`),
      `कुल: ${money(total)}`,
      "",
      `नाम: ${data.name}`,
      `फ़ोन: ${data.phone}`,
      `पता: ${data.address}`,
    ].join("\n");

    if (SHOP.whatsapp) {
      window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
      setDone(`${data.name} जी, WhatsApp खुल गया है — वहाँ संदेश भेजते ही आपका ऑर्डर हम तक पहुँच जाएगा।`);
    } else {
      setDone(
        `${data.name} जी, आपका ${money(total)} का ऑर्डर तैयार है। (डेमो: ऑर्डर पाने के लिए src/data/books.js में WhatsApp नंबर जोड़ें।)`
      );
    }
    clear();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-30 bg-ink/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-40 flex w-full max-w-md flex-col bg-paper shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="झोला"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="text-xl font-semibold">झोला</h2>
              <button onClick={close} autoFocus aria-label="झोला बंद करें" className="text-muted hover:text-ink">
                <X size={22} strokeWidth={1.75} />
              </button>
            </div>

            {done ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-ink text-paper">
                  <Check size={26} />
                </span>
                <h3 className="text-2xl font-semibold">शुक्रिया!</h3>
                <p className="text-muted">{done}</p>
                <button onClick={close} className="mt-2 font-medium underline decoration-line decoration-2 underline-offset-8 hover:decoration-ink">
                  और किताबें देखें
                </button>
              </div>
            ) : lines.length === 0 ? (
              <p className="flex flex-1 items-center justify-center px-8 text-center text-muted">
                झोला अभी ख़ाली है। कोई किताब चुनिए।
              </p>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto px-6">
                  {lines.map(({ book, qty }) => (
                    <li key={book.id} className="flex items-center gap-4 border-b border-line py-4">
                      <Cover book={book} className="w-12 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{book.title}</p>
                        <p className="text-sm tabular-nums text-muted">{money(book.price * qty)}</p>
                      </div>
                      <div className="flex items-center gap-3 rounded-full border border-line px-2 py-1">
                        <button onClick={() => change(book.id, -1)} aria-label="एक कम करें" className="text-muted hover:text-ink">
                          <Minus size={15} />
                        </button>
                        <span className="w-4 text-center text-sm tabular-nums">{qty}</span>
                        <button onClick={() => change(book.id, 1)} aria-label="एक और जोड़ें" className="text-muted hover:text-ink">
                          <Plus size={15} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <form onSubmit={placeOrder} className="space-y-3 border-t border-line px-6 pb-6 pt-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-muted">कुल</span>
                    <span className="text-2xl font-semibold tabular-nums">{money(total)}</span>
                  </div>
                  <input name="name" required autoComplete="name" placeholder="नाम" aria-label="नाम" className={field} />
                  <input
                    name="phone"
                    required
                    type="tel"
                    pattern="[0-9+ ]{10,15}"
                    autoComplete="tel"
                    placeholder="फ़ोन"
                    aria-label="फ़ोन"
                    className={field}
                  />
                  <textarea
                    name="address"
                    required
                    rows={2}
                    autoComplete="street-address"
                    placeholder="पता"
                    aria-label="पता"
                    className={`${field} resize-none`}
                  />
                  <button className="mt-2 w-full rounded-full bg-ink py-3.5 font-medium text-paper transition-colors hover:bg-accent">
                    ऑर्डर भेजें
                  </button>
                </form>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
