import { useState } from "react";
import { Send, Star, LogIn } from "lucide-react";
import { toast } from "sonner";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/dali/AuthModal";

export function ReviewForm() {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) {
      setAuthOpen(true);
      return;
    }
    if (!rating || !name.trim() || !text.trim()) {
      toast.error("Preencha todos os campos e dê sua nota.");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "avaliacoes"), {
        nome: name.trim(),
        mensagem: text.trim(),
        nota: rating,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
      toast.success("Obrigado pela sua avaliação!");
      setRating(0);
      setName("");
      setText("");
    } catch {
      toast.error("Erro ao enviar avaliação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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

          {!user ? (
            <div className="mt-10 rounded-2xl border border-border bg-card/60 p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Para deixar uma avaliação, você precisa estar logada.
              </p>
              <button
                onClick={() => setAuthOpen(true)}
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-copper px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.01]"
              >
                <LogIn size={15} />
                Faça login para avaliar
              </button>
            </div>
          ) : (
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
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-copper px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                <Send size={16} />
                {loading ? "Enviando…" : "Enviar avaliação"}
              </button>
            </form>
          )}
        </div>
      </section>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
}
