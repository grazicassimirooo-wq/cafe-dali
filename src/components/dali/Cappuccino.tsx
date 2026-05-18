import cappuccinoVideo from "@/assets/cappuccino-cacau.mp4";

export function Cappuccino() {
  return (
    <section className="relative bg-background py-0">
      <div className="grid items-stretch lg:grid-cols-2">
        {/* Vídeo full bleed à esquerda */}
        <div className="relative h-[360px] lg:h-[520px]">
          <video
            src={cappuccinoVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Capuccino com cacau 55%"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Texto à direita */}
        <div className="flex items-center px-6 py-16 lg:px-16 lg:py-0">
          <div className="max-w-md">
            <span className="tag-copper">A experiência começa com</span>
            <h2 className="mt-5 font-display text-4xl italic leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
              Capuccino
              <br />
              com cacau 55%
            </h2>
            <span className="mt-7 block h-px w-full bg-border" />
            <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">
              Cremoso, intenso e equilibrado.
              <br />
              O convite perfeito para desacelerar
              <br />
              e aproveitar o momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
