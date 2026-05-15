import { Droplet, GlassWater, Salad, Sandwich } from "lucide-react";
import yogurtImg from "@/assets/iogurte-granola.png";

const FRESH = [
  { icon: Droplet, label: "Água saborizada" },
  { icon: GlassWater, label: "Iogurte com geleia e granola" },
  { icon: Salad, label: "Mix de frutas com oleaginosas" },
];

const DAILY = [
  "Bisnaguinha de cenoura com creme de avelã",
  "Bisnaguinha integral com creme de queijo e ervas",
  "Bisnaguinha com patê",
  "Baguete de leite com salpicão",
  "Baguete natural (peito de peru, queijo, alface e tomate)",
];

export function Snacks() {
  return (
    <section id="lanches" className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-3 lg:gap-12 lg:px-10">
        {/* Frescor & Energia */}
        <div>
          <span className="tag-copper">Frescor &amp; Energia</span>
          <ul className="mt-6 space-y-5">
            {FRESH.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-copper/40 text-copper">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <span className="text-sm text-foreground/90">{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
            Incluímos também um pré-treino natural, ideal para quem busca
            disposição e vitalidade.
          </p>
        </div>

        {/* Imagem central */}
        <div className="flex justify-center">
          <img
            src={yogurtImg}
            alt="Iogurte com granola e geleia"
            width={900}
            height={900}
            loading="lazy"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Para o dia a dia */}
        <div>
          <span className="tag-copper">Para o dia a dia</span>
          <ul className="mt-6 space-y-4">
            {DAILY.map((label) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/60 px-4 py-3"
              >
                <Sandwich className="mt-0.5 shrink-0 text-copper" size={18} strokeWidth={1.6} />
                <span className="text-sm text-foreground/90">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
