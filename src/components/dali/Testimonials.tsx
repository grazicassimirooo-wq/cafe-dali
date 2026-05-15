import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Review {
  id: string;
  nome: string;
  mensagem: string;
  nota: number;
}

const STATIC_REVIEWS: Review[] = [
  {
    id: "s1",
    nome: "Mariana S.",
    mensagem:
      "O capuccino com cacau 55% é simplesmente incrível. Cada gole é uma experiência única — cremoso, intenso e acolhedor. Me tornei cliente fiel!",
    nota: 5,
  },
  {
    id: "s2",
    nome: "Fernanda L.",
    mensagem:
      "O BOOM Dali mudou minha rotina matinal. Me sinto com muito mais energia e leveza durante o dia. Um produto que realmente faz diferença.",
    nota: 5,
  },
  {
    id: "s3",
    nome: "Ana Clara M.",
    mensagem:
      "Amei o kit degustação! As combinações são perfeitas e tudo muito bem apresentado. Um mimo para o paladar. Já recomendei para amigas.",
    nota: 5,
  },
  {
    id: "s4",
    nome: "Juliana P.",
    mensagem:
      "Atendimento impecável e produtos de altíssima qualidade. Dali é aquele lugar que você quer frequentar sempre e presentear quem ama.",
    nota: 5,
  },
  {
    id: "s5",
    nome: "Camila R.",
    mensagem:
      "O iogurte com granola e geleia é maravilhoso — leve, nutritivo e delicioso. Não consigo imaginar meu café da manhã sem ele.",
    nota: 5,
  },
  {
    id: "s6",
    nome: "Letícia M.",
    mensagem:
      "A bisnaguinha de cenoura com creme de avelã é o lanche perfeito. Prático, saboroso e saudável. Dali entende o que a gente precisa!",
    nota: 5,
  },
];

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(STATIC_REVIEWS);

  useEffect(() => {
    const q = query(
      collection(db, "avaliacoes"),
      orderBy("createdAt", "desc"),
      limit(6),
    );
    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        if (snap.empty) {
          setReviews(STATIC_REVIEWS);
          return;
        }
        const live = snap.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            nome: d.nome as string,
            mensagem: d.mensagem as string,
            nota: (d.nota as number) ?? 5,
          };
        });
        setReviews(live);
      },
      () => {
        // on error keep static fallback
        setReviews(STATIC_REVIEWS);
      },
    );
    return unsubscribe;
  }, []);

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
          {reviews.map((r) => (
            <article
              key={r.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-deep/30"
            >
              <div className="flex gap-1">
                {Array.from({ length: r.nota }).map((_, i) => (
                  <Star key={i} size={16} className="fill-copper text-copper" />
                ))}
                {Array.from({ length: 5 - r.nota }).map((_, i) => (
                  <Star key={`e${i}`} size={16} className="text-muted-foreground/30" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                "{r.mensagem}"
              </p>
              <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-copper">
                — {r.nome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
