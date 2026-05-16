import { useState } from "react";
import { Coffee, Sparkles, ChevronDown } from "lucide-react";
import { OrderBuilder } from "@/components/dali/OrderBuilder";

const BG = "oklch(0.13 0.012 40)";

export function Hero() {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
    <OrderBuilder open={orderOpen} onClose={() => setOrderOpen(false)} />
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ─── Fundo base espresso ─── */}
      <div className="absolute inset-0" style={{ background: BG }} />

      {/* ─── Vídeo em loop infinito via public/ ─── */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-video absolute inset-0 h-full w-full object-cover object-center"
          style={{ willChange: "transform" }}
        >
          <source src="/videos/hero-dali.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ─── Gradientes de blend em todas as direções ─── */}
      {/* Esquerda — pesado para legibilidade do texto */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full"
        style={{
          zIndex: 2,
          background: `linear-gradient(
            to right,
            ${BG}                           0%,
            oklch(0.13 0.012 40 / 0.96)    18%,
            oklch(0.13 0.012 40 / 0.82)    34%,
            oklch(0.13 0.012 40 / 0.55)    52%,
            oklch(0.13 0.012 40 / 0.22)    70%,
            transparent                    100%
          )`,
        }}
      />
      {/* Topo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48"
        style={{
          zIndex: 2,
          background: `linear-gradient(to bottom, ${BG} 0%, transparent 100%)`,
        }}
      />
      {/* Fundo */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          zIndex: 2,
          background: `linear-gradient(to top, ${BG} 0%, transparent 100%)`,
        }}
      />
      {/* Direita */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4"
        style={{
          zIndex: 2,
          background: `linear-gradient(to left, ${BG} 0%, transparent 100%)`,
        }}
      />

      {/* ─── Bloom copper sutil ─── */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[600px] w-[600px] rounded-full"
        style={{
          zIndex: 3,
          background:
            "radial-gradient(circle, oklch(0.68 0.165 45 / 0.11) 0%, transparent 68%)",
          filter: "blur(72px)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/3 h-[400px] w-[600px] rounded-full"
        style={{
          zIndex: 3,
          background:
            "radial-gradient(circle, oklch(0.68 0.165 45 / 0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ─── Conteúdo principal ─── */}
      <div
        className="relative flex min-h-[100svh] flex-col justify-center"
        style={{ zIndex: 10 }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pt-36">
          {/* ── Eyebrow ── */}
          <div className="hero-eyebrow mb-6 flex items-center gap-3 sm:mb-8">
            <span
              className="h-px w-8 shrink-0"
              style={{ background: "var(--copper)", opacity: 0.9 }}
            />
            <span className="tag-copper flex items-center gap-1.5 tracking-[0.22em]">
              <Sparkles size={10} className="text-copper" />
              Dali Café &amp; Experiências
            </span>
          </div>

          {/* ── H1 com shimmer copper ── */}
          <h1
            className="hero-title font-display text-[2.9rem] italic leading-[1.04] text-foreground
                       sm:text-[3.8rem]
                       md:text-[4.6rem]
                       lg:text-[5.2rem]
                       xl:text-[5.8rem]"
            style={{
              textShadow: "0 4px 32px oklch(0 0 0 / 0.7), 0 2px 10px oklch(0 0 0 / 0.5)",
            }}
          >
            <span className="block">
              Mais que{" "}
              <span className="copper-shimmer">café</span>,
            </span>
            <span className="block mt-1">
              um{" "}
              <span className="copper-shimmer">encontro.</span>
            </span>
          </h1>

          {/* ── Divisor animado ── */}
          <span
            className="hero-divider mt-6 block sm:mt-8"
            style={{
              height: 2,
              background: "linear-gradient(90deg, oklch(0.68 0.165 45), transparent)",
            }}
          />

          {/* ── Subtítulo ── */}
          <p
            className="hero-subtitle mt-6 max-w-xs text-[0.9rem] leading-[1.9] text-foreground/70
                       sm:mt-7 sm:max-w-sm sm:text-[0.95rem]"
            style={{ textShadow: "0 2px 16px oklch(0 0 0 / 0.7)" }}
          >
            Sabores que acolhem.
            <br />
            Texturas que envolvem.
            <br />
            Um momento só seu
            <br />
            ou para compartilhar.
          </p>

          {/* ── CTAs ── */}
          <div className="hero-ctas mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
            <button
              type="button"
              onClick={() => setOrderOpen(true)}
              className="inline-flex items-center gap-3 rounded-md bg-copper px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]
                         sm:px-7 sm:py-4 sm:text-xs"
            >
              <Coffee size={15} strokeWidth={2.2} />
              Quero experimentar
            </button>
            <a
              href="#sobre"
              className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-foreground/50 transition-colors duration-300 hover:text-copper sm:text-[11px]"
              style={{ textShadow: "0 2px 8px oklch(0 0 0 / 0.6)" }}
            >
              Nossa história →
            </a>
          </div>

          {/* ── Badge flutuante ── */}
          <div className="hero-badge mt-10 sm:mt-12">
            <div
              className="inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5"
              style={{
                background: "oklch(0.17 0.016 40 / 0.82)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid oklch(0.68 0.165 45 / 0.22)",
                boxShadow:
                  "0 8px 32px oklch(0 0 0 / 0.45), inset 0 1px 0 oklch(1 0 0 / 0.06)",
              }}
            >
              <span
                className="dot-pulse badge-pulse h-2 w-2 rounded-full shrink-0"
                style={{
                  background: "oklch(0.68 0.165 45)",
                }}
              />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                Experiência Única
              </span>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          className="hero-ctas absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40"
          style={{ animationDelay: "1.8s" }}
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-foreground/60">
            scroll
          </span>
          <ChevronDown
            size={14}
            className="text-copper"
            style={{ animation: "heroFadeUp 1.5s ease-in-out infinite alternate" }}
          />
        </div>
      </div>
    </section>
    </>
  );
}
