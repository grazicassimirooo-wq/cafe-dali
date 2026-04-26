import comboRice from "@/assets/combo-rice.jpg";
import comboToast from "@/assets/combo-toast.jpg";
import comboCookies from "@/assets/combo-cookies.jpg";

const ITEMS = [
  { img: comboRice, label: "Biscoito de arroz com geleia de frutas vermelhas" },
  { img: comboToast, label: "Torrada de cacau com creme de amendoim" },
  { img: comboCookies, label: "Seleção de biscoitos artesanais" },
];

export function Combinations() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-2xl uppercase tracking-[0.22em] text-cream-foreground sm:text-[1.7rem]">
            Combinações que encantam
          </h2>
          <span className="mt-4 h-[2px] w-16 bg-copper" />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <article key={item.label} className="flex flex-col items-center text-center">
              <div className="w-full overflow-hidden rounded-md border border-copper/30 bg-white/40">
                <img
                  src={item.img}
                  alt={item.label}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <p className="mt-5 max-w-[18ch] font-display text-base text-cream-foreground">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
