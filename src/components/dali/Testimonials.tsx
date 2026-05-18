import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getReviews, type Review } from "@/lib/store";

const DEFAULT_REVIEWS = [
  {
    name: "Mariana S.",
    text: "O capuccino com cacau 55% é simplesmente incrível. Cada gole é uma experiência única — cremoso, intenso e acolhedor. Me tornei cliente fiel!",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    text: "O BOOM Dali mudou minha rotina matinal. Me sinto com muito mais energia e leveza durante o dia. Um produto que realmente faz diferença.",
    rating: 5,
  },
  {
    name: "Ana Clara M.",
    text: "Amei o kit degustação! As combinações são perfeitas e tudo muito bem apresentado. Um mimo para o paladar. Já recomendei para amigas.",
    rating: 5,
  },
  {
    name: "Juliana P.",
    text: "Atendimento impecável e produtos de altíssima qualidade. Dali é aquele lugar que você quer frequentar sempre e presentear quem ama.",
    rating: 5,
  },
  {
    name: "Camila R.",
    text: "O iogurte com granola e geleia é maravilhoso — leve, nutritivo e delicioso. Não consigo imaginar meu café da manhã sem ele.",
    rating: 5,
  },
  {
    name: "Letícia M.",
    text: "A bisnaguinha de cenoura com creme de avelã é o lanche perfeito. Prático, saboroso e saudável. Dali entende o que a gente precisa!",
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [stored, setStored] = useState<Review[]>([]);

  useEffect(() => {
    setStored(getReviews().filter((r) => r.visible));
    const onStorage = () => setStored(getReviews().filter((r) => r.visible));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const reviews = useMemo(() => {
    const userReviews = stored.map((r) => ({ name: r.name, text: r.text, rating: r.rating }));
    return [...userReviews, ...DEFAULT_REVIEWS];
  }, [stored]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi, reviews.length]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="clientes" className="bg-card/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="tag-copper">Nossos Clientes</span>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
            O que dizem sobre <span className="italic text-copper">a Dali</span>
          </h2>
        </div>

        <div className="mt-12 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {reviews.map((r, idx) => (
                <div key={`${r.name}-${idx}`} className="flex-none w-full sm:w-1/2 lg:w-1/3 min-w-0">
                  <article className="card-glass flex flex-col rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(217,114,39,0.2)]">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < r.rating ? "fill-copper text-copper" : "text-copper/30"}
                        />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                      "{r.text}"
                    </p>
                    <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-copper">
                      — {r.name}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* prev/next buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:border-copper hover:text-copper transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:border-copper hover:text-copper transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          {/* dots */}
          <div className="mt-8 flex justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-6 bg-copper" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
