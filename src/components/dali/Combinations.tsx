import comboRice from "@/assets/combo-rice.png";
import comboToast from "@/assets/combo-toast.png";
import comboCookies from "@/assets/combo-cookies.png";

const ITEMS = [
  { img: comboRice, label: "Biscoito de arroz com geleia de frutas vermelhas" },
  { img: comboToast, label: "Torrada de cacau com creme de amendoim" },
  { img: comboCookies, label: "Seleção de biscoitos artesanais" },
];

export function Combinations() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase tracking-[0.18em] text-cream-foreground sm:text-4xl">
            Combinações que encantam
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <article key={item.label} className="flex flex-col items-center text-center">
              <div className="w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-contain"
                />
              </div>
              <p className="mt-5 max-w-[22ch] font-display text-base leading-snug text-cream-foreground">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
