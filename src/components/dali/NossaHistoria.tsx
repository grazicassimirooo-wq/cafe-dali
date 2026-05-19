import { useRef, useState, useEffect } from "react";
import nossaHistoriaVideo from "@/assets/nossa-historia.mp4";

export function NossaHistoria() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
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

        {/* Vídeo portrait 9:16 com borda decorativa */}
        <div className={`relative flex items-center justify-center transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          {/* Brilho de fundo */}
          <div className="absolute inset-0 rounded-2xl"
            style={{background: "radial-gradient(ellipse at center, rgba(217,114,39,0.08) 0%, transparent 70%)"}} />

          {/* Container 16:9 ajustado ao vídeo — sem barras pretas */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-copper/40"
            style={{aspectRatio: "16/9", boxShadow: "0 0 60px rgba(217,114,39,0.15), inset 0 0 40px rgba(217,114,39,0.05)"}}>
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
            {/* Borda interna decorativa */}
            <div className="pointer-events-none absolute inset-3 rounded-xl border border-copper/15" />
          </div>

          {/* Detalhe de canto decorativo */}
          <div className="absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 border-copper/50 rounded-tl-lg" />
          <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-copper/50 rounded-br-lg" />
        </div>
      </div>
    </section>
  );
}
