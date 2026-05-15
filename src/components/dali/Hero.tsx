import { Coffee, Sparkles } from "lucide-react";
import heroDaliVideo from "@/assets/hero-dali.mp4";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Deep espresso base */}
      <div
        className="absolute inset-0 -z-20"
        style={{ background: "oklch(0.13 0.012 40)" }}
      />

      {/* Subtle film-grain noise */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Copper ambient bloom — left */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.165 45 / 0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Copper ambient bloom — right (behind video) */}
      <div
        className="pointer-events-none absolute -right-20 top-1/4 -z-10 h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.165 45 / 0.10) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-32 pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-4 lg:px-10 lg:pt-36 lg:pb-24">
        {/* ── Left — Copywriting ── */}
        <div className="max-w-xl">
          {/* Eyebrow tag */}
          <div className="mb-7 flex items-center gap-3">
            <span
              className="h-px w-8"
              style={{ background: "var(--copper)" }}
            />
            <span className="tag-copper flex items-center gap-1.5">
              <Sparkles size={11} className="text-copper" />
              Dali Café &amp; Experiências
            </span>
          </div>

          <h1 className="font-display text-5xl italic leading-[1.05] text-foreground sm:text-6xl lg:text-[5rem] xl:text-[5.5rem]">
            mais que{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.68 0.165 45), oklch(0.82 0.13 60))",
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
                  "linear-gradient(135deg, oklch(0.68 0.165 45), oklch(0.82 0.13 60))",
              }}
            >
              encontro.
            </span>
          </h1>

          {/* Divider */}
          <span
            className="mt-7 block"
            style={{
              width: 60,
              height: 2,
              background:
                "linear-gradient(90deg, oklch(0.68 0.165 45), transparent)",
            }}
          />

          <p className="mt-7 max-w-[320px] text-[0.93rem] leading-[1.85] text-foreground/70">
            Sabores que acolhem.
            <br />
            Texturas que envolvem.
            <br />
            Um momento só seu
            <br />
            ou para compartilhar.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-md bg-copper px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-all hover:scale-[1.02] hover:brightness-110"
            >
              <Coffee size={16} strokeWidth={2.2} />
              Quero experimentar
            </a>
            <a
              href="#sobre"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/50 transition-colors hover:text-copper"
            >
              Nossa história →
            </a>
          </div>

          {/* Social proof micro-badge */}
          <div className="mt-12 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["☕", "🌿", "✨"].map((e, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm"
                  style={{
                    background: "oklch(0.22 0.016 40)",
                    border: "2px solid oklch(0.16 0.012 40)",
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
            <p className="text-[11px] text-foreground/45 leading-tight">
              Cada visita, <span className="text-copper font-medium">uma experiência</span>
              <br />
              única e inesquecível.
            </p>
          </div>
        </div>

        {/* ── Right — Looping video blended ── */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Soft copper ring behind the video */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 52% 50%, oklch(0.68 0.165 45 / 0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative w-full max-w-[540px]">
            {/* Video with radial vignette mask — seamless blend */}
            <div
              className="relative"
              style={{
                maskImage:
                  "radial-gradient(ellipse 92% 88% at 52% 50%, black 30%, oklch(0 0 0 / 0.9) 50%, transparent 76%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 92% 88% at 52% 50%, black 30%, oklch(0 0 0 / 0.9) 50%, transparent 76%)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-3xl object-cover"
                style={{ aspectRatio: "4/5" }}
              >
                <source src={heroDaliVideo} type="video/mp4" />
              </video>

              {/* Top fade */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(to bottom, oklch(0.13 0.012 40) 0%, transparent 100%)",
                }}
              />
              {/* Bottom fade */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.13 0.012 40) 0%, transparent 100%)",
                }}
              />
              {/* Left fade */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1/4"
                style={{
                  background:
                    "linear-gradient(to right, oklch(0.13 0.012 40) 0%, transparent 100%)",
                }}
              />
              {/* Right fade */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/4"
                style={{
                  background:
                    "linear-gradient(to left, oklch(0.13 0.012 40) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating glass badge — bottom */}
            <div
              className="absolute bottom-14 left-6 flex items-center gap-2.5 rounded-xl px-4 py-2.5"
              style={{
                background: "oklch(0.18 0.016 40 / 0.82)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid oklch(0.68 0.165 45 / 0.22)",
                boxShadow: "0 8px 32px oklch(0 0 0 / 0.4)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "oklch(0.68 0.165 45)",
                  boxShadow: "0 0 8px oklch(0.68 0.165 45 / 0.7)",
                }}
              />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                Experiência Única
              </span>
            </div>

            {/* Floating glass badge — top-right */}
            <div
              className="absolute top-14 right-6 flex items-center gap-2 rounded-xl px-3.5 py-2"
              style={{
                background: "oklch(0.18 0.016 40 / 0.78)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid oklch(0.68 0.165 45 / 0.18)",
                boxShadow: "0 8px 32px oklch(0 0 0 / 0.35)",
              }}
            >
              <Coffee size={12} className="text-copper" />
              <span className="text-[10px] font-medium tracking-wide text-foreground/70">
                Premium
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.16 0.012 40))",
        }}
      />
    </section>
  );
}
