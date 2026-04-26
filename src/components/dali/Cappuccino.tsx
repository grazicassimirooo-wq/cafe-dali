import cappuccinoImg from "@/assets/cappuccino.jpg";

export function Cappuccino() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <img
            src={cappuccinoImg}
            alt="Capuccino com cacau 55%"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-deep"
          />
        </div>
        <div className="max-w-lg">
          <span className="tag-copper">A experiência começa com</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Capuccino
            <br />
            com cacau <span className="italic">55%</span>
          </h2>
          <span className="mt-6 block h-px w-24 bg-border" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Cremoso, intenso e equilibrado.
            <br />
            O convite perfeito para desacelerar
            <br />
            e aproveitar o momento.
          </p>
        </div>
      </div>
    </section>
  );
}
