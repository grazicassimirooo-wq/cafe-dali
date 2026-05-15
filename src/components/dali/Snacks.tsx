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
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-3 lg:gap-0 lg:px-10">
        {/* Frescor & Energia */}
        <div className="lg:pr-10">
          <span className="tag-copper">Frescor &amp; Energia</span>
          <ul className="mt-6 space-y-4">
            {FRESH.map(({ icon: Icon, label }) => (
              <li key={label} className="group flex cursor-default items-center gap-4 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-copper/40 hover:bg-copper/5 hover:shadow-[0_0_20px_rgba(217,114,39,0.2)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-copper/40 text-copper transition-all duration-300 group-hover:border-copper group-hover:bg-copper/10 group-hover:shadow-[0_0_14px_rgba(217,114,39,0.55)] group-hover:scale-110">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <span className="text-sm text-foreground/90 transition-colors duration-300 group-hover:text-foreground underline-copper">{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
            Incluímos também um pré-treino natural, ideal para quem busca
            disposição e vitalidade.
          </p>
        </div>

        {/* Imagem central — iogurte GRANDE com glow dramático */}
        <div className="relative flex justify-center lg:-mx-6">
          {/* Radial glow atrás da imagem */}
          <div className="pointer-events-none absolute inset-0 rounded-full"
            style={{background: "radial-gradient(ellipse at center, rgba(217,114,39,0.18) 0%, rgba(217,114,39,0.06) 40%, transparent 70%)", filter: "blur(30px)"}} />
          <img
            src={yogurtImg}
            alt="Iogurte com granola e geleia"
            width={900}
            height={900}
            loading="lazy"
            className="float-gentle relative w-full max-w-xs object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)] lg:max-w-[340px] xl:max-w-[380px]"
          />
        </div>

        {/* Para o dia a dia */}
        <div className="lg:pl-10">
          <span className="tag-copper">Para o dia a dia</span>
          <ul className="mt-6 space-y-3">
            {DAILY.map((label) => (
              <li key={label} className="group flex cursor-default items-start gap-3 rounded-xl border border-border/60 bg-card/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-copper/50 hover:bg-copper/5 hover:shadow-[0_0_20px_rgba(217,114,39,0.25)]">
                <Sandwich className="mt-0.5 shrink-0 text-copper transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(217,114,39,0.9)] group-hover:scale-110" size={18} strokeWidth={1.6} />
                <span className="text-sm text-foreground/90 transition-colors duration-300 group-hover:text-foreground underline-copper">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
