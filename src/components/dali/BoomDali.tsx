import { Check, FlaskConical, Clock, Heart } from "lucide-react";
import boomImg from "@/assets/boom-dali.png";
import modoImg from "@/assets/modo-preparo.png";

const BENEFITS = [
  "Psyllium + chia + linhaça",
  "Ajuda a controlar a fome",
  "Melhora a digestão",
  "Traz leveza ao dia",
];

const STEPS = [
  { icon: FlaskConical, label: "Misturou" },
  { icon: Clock, label: "Esperou" },
  { icon: Heart, label: "Aproveitou" },
];

export function BoomDali() {
  return (
    <section id="boom" className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr_1.4fr] lg:gap-12 lg:px-10">
        {/* Bloco esquerda — copy */}
        <div>
          <span className="tag-copper">O queridinho da Dali</span>
          <h3 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
            BOOM <span className="italic">Dali</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Energia, saciedade e equilíbrio em um só mix.
          </p>
          <ul className="mt-6 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="group flex cursor-default items-center gap-3 text-sm text-foreground/90 transition-all duration-200 hover:text-copper hover:translate-x-1">
                <Check className="shrink-0 text-copper transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(217,114,39,0.8)] group-hover:scale-110" size={18} strokeWidth={2.4} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Bloco centro — produto */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-full"
              style={{background: "radial-gradient(circle, rgba(217,114,39,0.2) 0%, transparent 70%)", filter: "blur(40px)", transform: "scale(1.3)"}} />
            <img
              src={boomImg}
              alt="Embalagem BOOM Dali"
              width={700}
              height={900}
              loading="lazy"
              className="float-gentle relative max-h-[560px] w-auto object-contain drop-shadow-[0_24px_60px_rgba(217,114,39,0.25)]"
            />
          </div>
        </div>

        {/* Bloco direita — modo de uso */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-cream text-cream-foreground sm:grid-cols-[1fr_0.8fr]">
          <div className="p-6 lg:p-8">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-copper">
              Modo de uso
            </span>
            <p className="mt-3 text-sm leading-relaxed text-cream-foreground/85">
              Misture com água, suco ou iogurte (100-150ml), aguarde alguns
              minutos… e aproveite.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {STEPS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-copper/60 text-copper">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={modoImg}
            alt="Modo de preparo BOOM Dali"
            width={600}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
