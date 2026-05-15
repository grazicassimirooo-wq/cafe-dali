import { Coffee, Sparkles } from "lucide-react";
import heroDaliVideo from "@/assets/hero-dali.mp4";

const BG = "oklch(0.13 0.012 40)";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* ── Base escura ── */}
      <div className="absolute inset-0" style={{ background: BG }} />

      {/* ── Vídeo em loop — posicionado como fundo na metade direita ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroDaliVideo} type="video/mp4" />
        </video>

        {/* Blend ESQUERDA — gradiente sólido, longo, forte */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[75%]"
          style={{
            background: `linear-gradient(to right, ${BG} 0%, ${BG} 20%, oklch(0.13 0.012 40 / 0.92) 45%, oklch(0.13 0.012 40 / 0.55) 65%, transparent 100%)`,
          }}
        />

        {/* Blend TOPO */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[38%]"
          style={{
            background: `linear-gradient(to bottom, ${BG} 0%, oklch(0.13 0.012 40 / 0.7) 55%, transparent 100%)`,
          }}
        />

        {/* Blend FUNDO */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
          style={{
            background: `linear-gradient(to top, ${BG} 0%, oklch(0.13 0.012 40 / 0.7) 55%, transparent 100%)`,
          }}
        />

        {/* Blend DIREITA */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[28%]"
          style={{
            background: `linear-gradient(to left, ${BG} 0%, transparent 100%)`,
          }}
        />

        {/* Véu escuro geral — reduz luminosidade do vídeo para harmonizar */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "oklch(0 0 0 / 0.28)" }}
        />
      </div>

      {/* ── Bloom copper atrás do texto ── */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.165 45 / 0.09) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Conteúdo ── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-36 pb-24 lg:px-10">
        <div className="max-w-[560px]">
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

          {/* H1 */}
          <h1 className="font-display text-5xl italic leading-[1.05] text-foreground sm:text-6xl lg:text-[5.2rem]">
            mais que{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.68 0.165 45) 0%, oklch(0.84 0.13 62) 100%)",
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
                  "linear-gradient(135deg, oklch(0.68 0.165 45) 0%, oklch(0.84 0.13 62) 100%)",
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
          <p className="mt-7 text-[0.94rem] leading-[1.9] text-foreground/70">
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
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/45 transition-colors hover:text-copper"
            >
              Nossa história →
            </a>
          </div>

          {/* Micro badge */}
          <div
            className="mt-12 inline-flex items-center gap-3 rounded-xl px-4 py-2.5"
            style={{
              background: "oklch(0.18 0.016 40 / 0.75)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid oklch(0.68 0.165 45 / 0.20)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "oklch(0.68 0.165 45)",
                boxShadow: "0 0 8px oklch(0.68 0.165 45 / 0.65)",
              }}
            />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
              Experiência Única
            </span>
          </div>
        </div>
      </div>

      {/* Fade inferior para a próxima seção */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background: `linear-gradient(to bottom, transparent, oklch(0.16 0.012 40))`,
        }}
      />
    </section>
  );
}
