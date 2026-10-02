const words = ["किताबों का कारवां", "Kitabon Ka Karwan"];

export default function Marquee() {
  const run = [...words, ...words, ...words];

  return (
    <div className="overflow-hidden py-8 md:py-10" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {run.map((word, i) => (
              <span
                key={i}
                className={`flex items-center whitespace-nowrap text-[clamp(2rem,4.5vw,3.75rem)] font-display leading-[1.35] ${
                  i % 2 ? "text-line" : "text-ink"
                }`}
              >
                <span className="px-8">{word}</span>
                <span className="size-3 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
