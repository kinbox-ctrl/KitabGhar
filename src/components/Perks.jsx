import { Languages, PackageCheck, Sparkles, Truck } from "lucide-react";

const perks = [
  [Sparkles, "चुनी हुई किताबें", "हर किताब ख़ुद चुनी हुई"],
  [Languages, "हिंदी और English", "क्लासिक, कविता, बाल साहित्य"],
  [PackageCheck, "आसान ऑर्डर", "झोला भरिए, पता बताइए"],
  [Truck, "सीधे घर तक", "किताबें आपके दरवाज़े पर"],
];

export default function Perks() {
  return (
    <section className="mx-auto max-w-7xl px-3 pt-4 sm:px-5">
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] bg-line ring-1 ring-line lg:grid-cols-4">
        {perks.map(([Icon, title, text]) => (
          <li key={title} className="flex items-center gap-4 bg-card p-4 sm:p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
              <Icon size={20} />
            </span>
            <div className="leading-snug">
              <p className="font-medium">{title}</p>
              <p className="text-sm text-muted max-sm:hidden">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
