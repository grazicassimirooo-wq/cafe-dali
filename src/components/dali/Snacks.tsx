import { Droplet, GlassWater, Salad } from "lucide-react";
import yogurtImg from "@/assets/yogurt-fruits.jpg";
import s1 from "@/assets/snack-1.jpg";
import s2 from "@/assets/snack-2.jpg";
import s3 from "@/assets/snack-3.jpg";
import s4 from "@/assets/snack-4.jpg";
import s5 from "@/assets/snack-5.jpg";

const FRESH = [
  { icon: Droplet, label: "Água saborizada" },
  { icon: GlassWater, label: "Iogurte com geleia e granola" },
  { icon: Salad, label: "Mix de frutas com oleaginosas" },
];

const DAILY = [
  { img: s1, label: "Bisnaguinha de cenoura com creme de avelã" },
  { img: s2, label: "Bisnaguinha integral com creme de queijo e ervas" },
  { img: s3, label: "Bisnaguinha com patê" },
  { img: s4, label: "Baguete de leite com salpicão" },
  { img: s5, label: "Baguete natural (peito de peru, queijo branco, alface e tomate)" },
];

export function Snacks() {
  return (
    <section id="lanches" className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Frescor & Energia */}
        <div>
          <span className="tag-copper">Frescor &amp; Energia</span>
          <div className="mt-6 grid grid-cols-[1fr_auto] gap-6">
            <ul className="space-y-5">
              {FRESH.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-copper/40 text-copper">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="text-sm text-foreground/90">{label}</span>
                </li>
              ))}
            </ul>
            <img
              src={yogurtImg}
              alt="Iogurte com granola e frutas"
              width={1024}
              height={1024}
              loading="lazy"
              className="hidden h-56 w-44 rounded-xl object-cover shadow-deep sm:block"
            />
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Incluímos também um pré-treino natural, ideal para quem busca disposição e vitalidade.
          </p>
        </div>

        {/* Para o dia a dia */}
        <div>
          <span className="tag-copper">Para o dia a dia</span>
          <ul className="mt-6 space-y-4">
            {DAILY.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt=""
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <span className="text-sm text-foreground/90">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
