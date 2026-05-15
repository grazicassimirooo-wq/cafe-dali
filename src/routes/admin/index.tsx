import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import { ADMIN_PASSWORD, setAdminAuth, isAdminAuthenticated } from "@/lib/store";
import daliLogo from "@/assets/dali-lockup.png";

export const Route = createFileRoute("/admin/")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAdminAuthenticated()) {
      navigate({ to: "/admin/dashboard" });
    }
  }, [navigate]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAdminAuth();
      navigate({ to: "/admin/dashboard" });
    } else {
      setError("Senha incorreta. Tente novamente.");
    }
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
                Senha de acesso
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="••••••••"
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-copper focus:outline-none"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-xs font-medium text-red-500">{error}</p>
            )}
            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-copper px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.01]"
            >
              Entrar
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
