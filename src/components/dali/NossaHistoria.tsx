import { DaliLogo } from "@/components/DaliLogo";

export function NossaHistoria() {
  return (
    <section id="sobre" className="bg-card/40 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <span className="tag-copper">Sobre Nós</span>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
            Nossa História
          </h2>
          <span className="mt-5 block h-[2px] w-16 bg-copper" />
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

        <div className="relative flex items-center justify-center">
          <div className="relative grid h-[320px] w-[320px] place-items-center rounded-full border border-copper/40 sm:h-[420px] sm:w-[420px]">
            <div className="absolute inset-6 rounded-full border border-copper/20" />
            <DaliLogo size={140} className="relative drop-shadow-[0_4px_24px_rgba(216,115,51,0.4)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
