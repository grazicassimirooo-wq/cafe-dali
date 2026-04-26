import { Coffee } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image full bleed */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-right"
        />
        {/* Overlay: solid dark on left fading to transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.13 0.012 40) 0%, oklch(0.13 0.012 40 / 0.92) 30%, oklch(0.13 0.012 40 / 0.55) 55%, transparent 80%)",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-28">
        <div className="max-w-xl">
          <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-[5rem]">
            mais que <span className="text-copper">café</span>,
            <br />
            um <span className="text-copper">encontro.</span>
          </h1>
          <span className="mt-7 block divider-copper" />
          <p className="mt-7 max-w-sm text-base leading-relaxed text-foreground/80">
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
      </div>
    </section>
  );
}
