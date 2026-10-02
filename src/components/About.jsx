import { ArrowRight } from "lucide-react";
import shop from "../assets/shop.jpg";
import library from "../assets/library.jpg";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-3 pb-20 sm:px-5">
      <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-forest p-6 text-paper md:grid-cols-2 md:gap-14 md:p-12">
        <div className="relative pb-10 pr-10">
          <img src={shop} alt="किताबों से भरी दुकान की अलमारियाँ" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <img
            src={library}
            alt="किताबों की घुमावदार अलमारी"
            className="absolute bottom-0 right-0 aspect-square w-[42%] rounded-3xl border-[6px] border-forest object-cover"
          />
        </div>
        <div>
          <p className="flex items-center gap-2 font-medium text-paper/70">
            <span className="size-2 rounded-full bg-ochre" />
            हमारी कहानी
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.3] md:text-5xl md:leading-[1.3]">
            हर किताब एक <span className="italic text-ochre">पड़ाव</span> है।
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/75">
            KitabGhar एक छोटी-सी दुकान है जिसका सपना बड़ा है — अच्छी किताबें हर घर तक पहुँचें। कारवां चलता रहता है; आप भी साथ हो
            लीजिए।
          </p>
          <a
            href="#shop"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ochre px-6 py-3 font-medium text-ink transition-colors hover:bg-paper"
          >
            किताबें देखें
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
