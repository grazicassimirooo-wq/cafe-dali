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

        <div ref={sectionRef} className="grid gap-8 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Icon
                className={`text-copper transition-transform duration-500 ${visible ? "scale-100" : "scale-75"}`}
                size={42}
                strokeWidth={1.4}
              />
              <h3 className="mt-5 font-sans-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
