import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Lock, Mail, Loader2 } from "lucide-react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import daliLogo from "@/assets/dali-lockup.png";

export const Route = createFileRoute("/admin/")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate({ to: "/admin/dashboard" });
      } else {
        setChecking(false);
      }
    });
    return unsub;
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) return;
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate({ to: "/admin/dashboard" });
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
        setError("E-mail ou senha incorretos.");
      } else if (code === "auth/too-many-requests") {
        setError("Muitas tentativas. Aguarde alguns minutos e tente novamente.");
      } else if (code === "auth/invalid-email") {
        setError("E-mail inválido.");
      } else {
        setError("Erro ao entrar. Verifique sua conexão.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 size={24} className="animate-spin text-copper" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <img src={daliLogo} alt="Dali Café" className="h-12 object-contain" />
        </div>

        <div className="rounded-2xl border border-border bg-card/80 p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-2 text-copper">
            <Lock size={18} strokeWidth={1.6} />
            <h1 className="text-xs font-semibold uppercase tracking-[0.2em]">
              Área Administrativa
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                E-mail
              </label>
              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="admin@cafedali.com"
                  className="w-full rounded-md border border-border bg-background py-3 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-copper focus:outline-none"
                  autoComplete="email"
                  autoFocus
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="••••••••"
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-copper focus:outline-none"
                autoComplete="current-password"
                disabled={loading}
              />
            </div>

            {error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-copper px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Entrando…
                </>
              ) : (
                "Entrar"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground/60">
            Acesso restrito à equipe Dali.
          </p>
        </div>
      </div>
    </div>
  );
}
