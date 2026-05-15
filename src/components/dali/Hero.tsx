import { Coffee, Sparkles } from "lucide-react";
import heroDaliVideo from "@/assets/hero-dali.mp4";

const BG = "oklch(0.13 0.012 40)";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* ── Vídeo em loop infinito — fundo full-bleed ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src={heroDaliVideo} type="video/mp4" />
      </video>

      {/* ── Overlay escuro à esquerda (legibilidade do texto) ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: `linear-gradient(90deg, ${BG} 0%, oklch(0.13 0.012 40 / 0.92) 28%, oklch(0.13 0.012 40 / 0.55) 55%, oklch(0.13 0.012 40 / 0.20) 78%, transparent 100%)`,
        }}
      />

      {/* ── Vinheta superior/inferior para fundir com o restante da página ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          zIndex: 2,
          background: `linear-gradient(to bottom, ${BG} 0%, transparent 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          zIndex: 2,
          background: `linear-gradient(to top, ${BG} 0%, transparent 100%)`,
        }}
      />

      {/* ── Bloom copper sutil ── */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(circle, oklch(0.68 0.165 45 / 0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Conteúdo NA FRENTE do vídeo ── */}
      <div
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-36 pb-24 lg:px-10"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-[600px]">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span
              className="h-px w-8 shrink-0"
              style={{ background: "var(--copper)" }}
            />
            <span className="tag-copper flex items-center gap-1.5">
              <Sparkles size={11} className="text-copper" />
              Dali Café &amp; Experiências
            </span>
          </div>

          {/* H1 — "Mais" com M maiúsculo */}
          <h1
            className="font-display text-5xl italic leading-[1.05] text-foreground sm:text-6xl lg:text-[5.2rem]"
            style={{
              textShadow:
                "0 4px 30px oklch(0 0 0 / 0.65), 0 2px 12px oklch(0 0 0 / 0.5)",
            }}
          >
            Mais que{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.74 0.17 50) 0%, oklch(0.88 0.13 65) 100%)",
                filter:
                  "drop-shadow(0 4px 24px oklch(0.68 0.165 45 / 0.35))",
              }}
            >
              café
            </span>
            ,<br />
            um{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.74 0.17 50) 0%, oklch(0.88 0.13 65) 100%)",
                filter:
                  "drop-shadow(0 4px 24px oklch(0.68 0.165 45 / 0.35))",
              }}
            >
              encontro.
            </span>
          </h1>

          {/* Divisor */}
          <span
            className="mt-7 block"
            style={{
              width: 64,
              height: 2,
              background:
                "linear-gradient(90deg, oklch(0.68 0.165 45), transparent)",
            }}
          />

          {/* Subtítulo */}
          <p
            className="mt-7 text-[0.95rem] leading-[1.9] text-foreground/80"
            style={{ textShadow: "0 2px 12px oklch(0 0 0 / 0.7)" }}
          >
            Sabores que acolhem.
            <br />
            Texturas que envolvem.
            <br />
            Um momento só seu
            <br />
            ou para compartilhar.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-md bg-copper px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-all hover:scale-[1.02] hover:brightness-110"
            >
              <Coffee size={16} strokeWidth={2.2} />
              Quero experimentar
            </a>
            <a
              href="#sobre"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:text-copper"
              style={{ textShadow: "0 2px 8px oklch(0 0 0 / 0.6)" }}
            >
              Nossa história →
            </a>
          </div>

          {/* Micro badge */}
          <div
            className="mt-12 inline-flex items-center gap-3 rounded-xl px-4 py-2.5"
            style={{
              background: "oklch(0.18 0.016 40 / 0.78)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid oklch(0.68 0.165 45 / 0.25)",
              boxShadow: "0 8px 32px oklch(0 0 0 / 0.4)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "oklch(0.68 0.165 45)",
                boxShadow: "0 0 8px oklch(0.68 0.165 45 / 0.65)",
              }}
            />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground/85">
              Experiência Única
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
