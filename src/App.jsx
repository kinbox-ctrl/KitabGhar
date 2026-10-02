import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Categories from "./components/Categories.jsx";
import Spotlight from "./components/Spotlight.jsx";
import Shop from "./components/Shop.jsx";
import Authors from "./components/Authors.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Reveal from "./components/Reveal.jsx";
import Perks from "./components/Perks.jsx";
import QuoteBand from "./components/QuoteBand.jsx";

export default function App() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState(null);
  const onAdded = (book) => setToast({ id: Date.now(), text: `“${book.title}” झोले में आ गई` });

  // Jump to the shelf showing one category or one author's books
  const showShelf = (nextCategory, nextQuery) => {
    setCategory(nextCategory);
    setQuery(nextQuery);
    document.getElementById("shop").scrollIntoView();
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Perks />
        <Marquee />
        <Reveal>
          <Categories onPick={(key) => showShelf(key, "")} />
        </Reveal>
        <Reveal>
          <Spotlight onAdded={onAdded} />
        </Reveal>
        <Shop category={category} setCategory={setCategory} query={query} setQuery={setQuery} onAdded={onAdded} />
        <Reveal>
          <QuoteBand />
        </Reveal>
        <Reveal>
          <Authors onPick={(name) => showShelf("all", name)} />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
      </main>
      <Footer onPickCategory={(key) => showShelf(key, "")} />
      <CartDrawer />

      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4" role="status" aria-live="polite">
        <AnimatePresence>
          {toast && (
            <motion.p
              key={toast.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg"
            >
              {toast.text}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
