import shelves from "../assets/shelves.jpg";

export default function QuoteBand() {
  return (
    <section className="mx-auto max-w-7xl px-3 pb-20 sm:px-5">
      <div
        className="relative overflow-hidden rounded-[2rem] bg-cover bg-center px-6 py-16 text-center text-paper md:py-20"
        style={{ backgroundImage: `url(${shelves})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 to-ink/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <p className="font-display text-6xl leading-none text-accent" aria-hidden="true">
            “
          </p>
          <p className="text-balance font-display text-3xl leading-[1.4] md:text-[2.75rem] md:leading-[1.35]">
            किताबें वो दोस्त हैं जो कभी साथ नहीं छोड़तीं।
          </p>
          <p className="mt-5 text-paper/70">KitabGhar · किताबों का कारवां</p>
        </div>
      </div>
    </section>
  );
}
