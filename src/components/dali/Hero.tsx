import { Coffee } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% 30%, oklch(0.32 0.08 45 / 0.55), transparent 60%), var(--background)",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="max-w-xl">
          <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            mais que <span className="text-copper italic">café</span>,
            <br />
            um <span className="text-copper italic">encontro.</span>
          </h1>
          <span className="mt-6 block divider-copper" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-copper px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-copper transition-all hover:bg-copper hover:text-primary-foreground"
          >
            <Coffee size={18} strokeWidth={2} />
            Quero experimentar
          </a>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
            style={{ background: "radial-gradient(closest-side, oklch(0.68 0.165 45 / 0.45), transparent)" }}
          />
          <img
            src={heroImg}
            alt="Xícara Dali com café, biscoito de arroz e torrada de cacau"
            width={1280}
            height={960}
            className="w-full rounded-2xl object-cover shadow-deep"
          />
        </div>
      </div>
    </section>
  );
}
