import { useRef, useState, useEffect } from "react";
import comboRice from "@/assets/combo-rice.png";
import comboToast from "@/assets/combo-toast.png";
import comboCookies from "@/assets/combo-cookies.png";
import { getMenuItems, type MenuItem } from "@/lib/store";

const DEFAULT_IMAGES: Record<string, string> = {
  c1: comboRice,
  c2: comboToast,
  c3: comboCookies,
};
const FALLBACK_IMAGES = [comboRice, comboToast, comboCookies];

export function Combinations() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    setItems(getMenuItems().filter((i) => i.category === "combo" && i.active));
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase tracking-[0.18em] text-cream-foreground sm:text-4xl">
            Combinações que <span className="italic">encantam</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16" style={{background: "linear-gradient(90deg, transparent, var(--copper), transparent)"}} />
        </div>

        <div ref={ref} className="mt-14 grid gap-8 sm:grid-cols-3">
          {items.map((item, index) => {
            const img = DEFAULT_IMAGES[item.id] ?? FALLBACK_IMAGES[index % 3];
            return (
              <article
                key={item.id}
                className={`group flex flex-col items-center text-center cursor-default
                  transition-all duration-700
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-cream-foreground/10 transition-all duration-500
                  group-hover:ring-2 group-hover:ring-copper/50
                  group-hover:shadow-[0_0_40px_rgba(217,114,39,0.35),0_20px_60px_rgba(0,0,0,0.3)]
                  group-hover:-translate-y-2">
                  <img
                    src={img}
                    alt={item.label}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{background: "radial-gradient(ellipse at center bottom, rgba(217,114,39,0.18) 0%, transparent 70%)"}} />
                </div>
                <p className="relative mt-5 inline-block px-2 font-display text-base leading-snug text-cream-foreground underline-copper transition-all duration-300 group-hover:text-copper group-hover:[filter:drop-shadow(0_0_8px_rgba(217,114,39,0.7))] group-hover:tracking-wide">
                  {item.label}
                </p>
                {item.price && (
                  <span className="mt-1 text-xs font-semibold text-copper">{item.price}</span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
