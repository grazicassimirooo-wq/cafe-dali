import { useRef, useState, useEffect } from "react";
import nossaHistoriaVideo from "@/assets/nossa-historia.mp4";

export function NossaHistoria() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="bg-card/40 py-20 lg:py-28">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Texto */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="tag-copper">Sobre Nós</span>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
            Nossa <span className="italic text-gradient-copper">História</span>
          </h2>
          <span className="mt-5 block h-[2px] w-16 bg-gradient-to-r from-copper to-transparent" />
          <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>
              A Dali nasceu de um amor profundo pelo café e pela experiência de
              compartilhar momentos especiais. Mais do que uma marca, somos um
              convite para desacelerar e saborear o melhor da vida.
            </p>
            <p>
              Cada produto foi criado com cuidado e intenção — combinando
              nutrição, sabor e praticidade para que você possa criar memórias
              afetivas no café da manhã e no lanche da tarde.
            </p>
            <p>
              Acreditamos que alimentação é afeto. Que um bom café pode
              transformar o início do dia. Que a pausa certa pode mudar tudo.
            </p>
          </div>
          <p className="mt-8 font-script text-3xl italic text-copper">
            Dali. Um encontro que transforma.
          </p>
        </div>

        {/* Vídeo com anéis animados */}
        <div className={`relative flex items-center justify-center transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          {/* Anel externo pulsante */}
          <div className="absolute h-[420px] w-[420px] rounded-full border border-copper/20 sm:h-[480px] sm:w-[480px]"
            style={{animation: "pulse-ring 3s ease-out infinite"}} />
          <div className="absolute h-[420px] w-[420px] rounded-full border border-copper/10 sm:h-[480px] sm:w-[480px]"
            style={{animation: "pulse-ring 3s ease-out infinite", animationDelay: "1s"}} />

          {/* Anel rotativo */}
          <div className="absolute h-[360px] w-[360px] rounded-full sm:h-[420px] sm:w-[420px]"
            style={{
              border: "1px dashed oklch(0.68 0.165 45 / 0.25)",
              animation: "spin-slow 20s linear infinite"
            }} />

          {/* Círculo principal com vídeo */}
          <div className="relative grid h-[280px] w-[280px] place-items-center overflow-hidden rounded-full border border-copper/40 sm:h-[340px] sm:w-[340px]"
            style={{boxShadow: "0 0 60px rgba(217,114,39,0.12), inset 0 0 40px rgba(217,114,39,0.05)"}}>
            <video
              src={nossaHistoriaVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Nossa história Dali"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-6 rounded-full border border-copper/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
