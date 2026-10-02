export default function SectionHead({ kicker, title, children }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="flex items-center gap-2 font-medium text-muted">
          <span className="size-2 rounded-full bg-accent" />
          {kicker}
        </p>
        <h2 className="mt-2 font-display text-3xl leading-[1.3] md:text-[2.75rem]">{title}</h2>
      </div>
      {children}
    </div>
  );
}
