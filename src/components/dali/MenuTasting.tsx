import { Coffee, Heart, Leaf } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const PILLARS = [
  { icon: Coffee, title: "Sabor", text: "Ingredientes selecionados para despertar sentidos." },
  { icon: Heart, title: "Nutrição", text: "Escolhas saudáveis que nutrem o corpo e a alma." },
  { icon: Leaf, title: "Praticidade", text: "Opções práticas para o seu dia a dia, sem abrir mão do sabor." },
];

export function MenuTasting() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="relative py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_auto_1.1fr] lg:px-10">
        <div className="max-w-md">
          <span className="tag-copper">Menu Degustação Dali</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
            Um novo jeito de viver o café da manhã e o lanche da tarde.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            Criamos o Menu Degustação Dali para transformar pausas simples em experiências memoráveis.
            Cada item foi pensado para equilibrar nutrição, leveza e prazer.
          </p>
          <p className="mt-8 font-script text-3xl text-copper">Tudo fácil pra você.</p>
        </div>

        <div className="hidden w-px bg-border lg:block" aria-hidden />

        <div ref={sectionRef} className="grid gap-4 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }, index) => {
            const isSelected = selected === title;
            return (
              <button
                key={title}
                type="button"
                onClick={() => setSelected(isSelected ? null : title)}
                className={`group flex flex-col items-center rounded-2xl border p-5 text-center transition-all duration-700 active:scale-95
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  ${isSelected
                    ? "scale-110 border-copper bg-copper/5 shadow-[0_0_32px_rgba(217,114,39,0.6)]"
                    : "border-transparent hover:scale-105 hover:border-copper/40 hover:bg-copper/5 hover:shadow-[0_0_20px_rgba(217,114,39,0.3)]"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`flex items-center justify-center rounded-full p-3 transition-all duration-300
                  ${isSelected ? "bg-copper/20 shadow-[0_0_18px_rgba(217,114,39,0.7)]" : "group-hover:bg-copper/10"}`}
                >
                  <Icon
                    className={`transition-all duration-500
                      ${visible ? "scale-100" : "scale-75"}
                      ${isSelected
                        ? "text-copper drop-shadow-[0_0_10px_rgba(217,114,39,1)]"
                        : "text-copper group-hover:drop-shadow-[0_0_8px_rgba(217,114,39,0.7)]"
                      }`}
                    size={42}
                    strokeWidth={1.4}
                  />
                </div>
                <h3 className="mt-4 font-sans-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
