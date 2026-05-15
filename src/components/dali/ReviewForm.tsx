import { useState } from "react";
import { Send, Star } from "lucide-react";
import { toast } from "sonner";

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating || !name.trim() || !text.trim()) {
      toast.error("Preencha todos os campos e dê sua nota.");
      return;
    }
    toast.success("Obrigado pela sua avaliação!");
    setRating(0);
    setName("");
    setText("");
  }

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <div className="text-center">
          <span className="tag-copper">Compartilhe sua experiência</span>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
            Deixe sua <span className="italic text-copper">avaliação</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Sua opinião ajuda outras pessoas a descobrirem a Dali.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 rounded-2xl border border-border bg-card/60 p-6 sm:p-8"
        >
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Sua nota:
            </label>
            <div className="mt-3 flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                  aria-label={`${n} estrelas`}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={28}
                    className={
                      (hover || rating) >= n
                        ? "fill-copper text-copper"
                        : "text-muted-foreground/50"
                    }
                  />
                </button>
              ))}
            </div>
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome (ex: Ana S.)"
            className="mt-6 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-copper focus:outline-none"
          />

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Conte sua experiência com a Dali…"
            rows={4}
            className="mt-4 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-copper focus:outline-none"
          />

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-copper px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.01]"
          >
            <Send size={16} />
            Enviar avaliação
          </button>
        </form>
      </div>
    </section>
  );
}
