import { Check, Soup, Clock, Heart } from "lucide-react";
import boomImg from "@/assets/boom-package.jpg";
import drinkImg from "@/assets/boom-drink.jpg";

const BENEFITS = [
  "Psyllium + chia + linhaça",
  "Ajuda a controlar a fome",
  "Melhora a digestão",
  "Traz leveza ao dia",
];

const STEPS = [
  { icon: Soup, label: "Misturou" },
  { icon: Clock, label: "Esperou" },
  { icon: Heart, label: "Aproveitou" },
];

export function BoomDali() {
  return (
    <section id="boom" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl shadow-deep lg:grid-cols-[1.1fr_0.9fr_1.2fr]">
          {/* Block 1 — info */}
          <div className="bg-card p-8 lg:p-10">
            <span className="tag-copper">O queridinho da Dali</span>
            <h3 className="mt-3 font-display text-4xl text-foreground">
              BOOM <span className="italic">Dali</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Energia, saciedade e equilíbrio em um só mix.
            </p>
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-foreground/90">
                  <Check className="text-copper" size={18} strokeWidth={2.4} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Block 2 — package */}
          <div className="relative bg-card flex items-center justify-center p-6 lg:border-x lg:border-border">
            <img
              src={boomImg}
              alt="Embalagem BOOM Dali"
              width={800}
              height={1100}
              loading="lazy"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>

          {/* Block 3 — modo de uso */}
          <div className="relative bg-sand p-8 lg:p-10">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-copper">
              Modo de uso
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand-foreground/85">
              Misture com água, suco ou iogurte (100-150ml), aguarde alguns minutos… e aproveite.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xs">
              {STEPS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-copper/50 text-copper">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sand-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <img
              src={drinkImg}
              alt="Boom Dali pronto"
              width={700}
              height={1100}
              loading="lazy"
              className="absolute right-0 top-0 hidden h-full w-32 object-cover lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
