import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Mariana S.",
    text: "O capuccino com cacau 55% é simplesmente incrível. Cada gole é uma experiência única — cremoso, intenso e acolhedor. Me tornei cliente fiel!",
  },
  {
    name: "Fernanda L.",
    text: "O BOOM Dali mudou minha rotina matinal. Me sinto com muito mais energia e leveza durante o dia. Um produto que realmente faz diferença.",
  },
  {
    name: "Ana Clara M.",
    text: "Amei o kit degustação! As combinações são perfeitas e tudo muito bem apresentado. Um mimo para o paladar. Já recomendei para amigas.",
  },
  {
    name: "Juliana P.",
    text: "Atendimento impecável e produtos de altíssima qualidade. Dali é aquele lugar que você quer frequentar sempre e presentear quem ama.",
  },
  {
    name: "Camila R.",
    text: "O iogurte com granola e geleia é maravilhoso — leve, nutritivo e delicioso. Não consigo imaginar meu café da manhã sem ele.",
  },
  {
    name: "Letícia M.",
    text: "A bisnaguinha de cenoura com creme de avelã é o lanche perfeito. Prático, saboroso e saudável. Dali entende o que a gente precisa!",
  },
];

export function Testimonials() {
  return (
    <section id="clientes" className="bg-card/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="tag-copper">Nossos Clientes</span>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
            O que dizem sobre <span className="italic text-copper">a Dali</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-deep/30"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-copper text-copper" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                “{r.text}”
              </p>
              <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-copper">
                — {r.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
