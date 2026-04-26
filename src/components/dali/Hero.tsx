import { Coffee } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-32 pb-20 lg:grid-cols-[1fr_1.15fr] lg:px-10 lg:pt-36 lg:pb-24">
        {/* Texto esquerda */}
        <div className="relative z-10 max-w-xl">
          <h1 className="font-display text-5xl italic leading-[1.05] text-foreground sm:text-6xl lg:text-[5.2rem]">
            mais que <span className="text-copper">café</span>,
            <br />
            um <span className="text-copper">encontro.</span>
          </h1>
          <span className="mt-7 block divider-copper" />
          <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-foreground/80">
            Sabores que acolhem.
            <br />
            Texturas que envolvem.
            <br />
            Um momento só seu
            <br />
            ou para compartilhar.
          </p>
          <a
            href="#menu"
            className="mt-10 inline-flex items-center gap-3 rounded-md bg-copper px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.02]"
          >
            <Coffee size={18} strokeWidth={2} />
            Quero experimentar
          </a>
        </div>

        {/* Imagem direita */}
        <div className="relative">
          <img
            src={heroImg}
            alt="Capuccino com latte art ao lado de biscoito de arroz com geleia e torrada de cacau com creme de amendoim"
            width={1600}
            height={1200}
            className="w-full rounded-2xl object-cover shadow-deep"
          />
        </div>
      </div>
    </section>
  );
}
