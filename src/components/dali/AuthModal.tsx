import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(loginEmail, loginPassword);
      toast.success("Bem-vinda de volta!");
      onOpenChange(false);
    } catch {
      toast.error("Email ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(registerEmail, registerPassword);
      toast.success("Conta criada com sucesso!");
      onOpenChange(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("email-already-in-use")) {
        toast.error("Este email já está em uso.");
      } else if (msg.includes("weak-password")) {
        toast.error("A senha precisa ter ao menos 6 caracteres.");
      } else {
        toast.error("Erro ao criar conta. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Login realizado com sucesso!");
      onOpenChange(false);
    } catch {
      toast.error("Não foi possível entrar com o Google.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-border bg-card text-foreground">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            Bem-vinda à <span className="italic text-copper">Dali</span>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="mt-2">
          <TabsList className="grid w-full grid-cols-2 bg-background">
            <TabsTrigger value="login" className="data-[state=active]:bg-copper data-[state=active]:text-primary-foreground text-xs uppercase tracking-[0.12em]">
              Login
            </TabsTrigger>
            <TabsTrigger value="cadastro" className="data-[state=active]:bg-copper data-[state=active]:text-primary-foreground text-xs uppercase tracking-[0.12em]">
              Cadastro
            </TabsTrigger>
          </TabsList>

          {/* ── LOGIN ── */}
          <TabsContent value="login" className="mt-4 space-y-3">
            <form onSubmit={handleLogin} className="space-y-3">
              <Input
                type="email"
                placeholder="Seu email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-copper"
              />
              <Input
                type="password"
                placeholder="Sua senha"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-copper"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-copper text-primary-foreground hover:brightness-110 uppercase tracking-[0.14em] text-xs"
              >
                {loading ? "Entrando…" : "Entrar"}
              </Button>
            </form>

            <div className="relative flex items-center gap-3 py-1">
              <span className="h-px flex-1 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">ou</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={handleGoogle}
              className="w-full border-border bg-background text-foreground hover:bg-card text-xs"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Entrar com Google
            </Button>
          </TabsContent>

          {/* ── CADASTRO ── */}
          <TabsContent value="cadastro" className="mt-4 space-y-3">
            <form onSubmit={handleRegister} className="space-y-3">
              <Input
                type="text"
                placeholder="Seu nome"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-copper"
              />
              <Input
                type="email"
                placeholder="Seu email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-copper"
              />
              <Input
                type="password"
                placeholder="Crie uma senha (mín. 6 caracteres)"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-copper"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-copper text-primary-foreground hover:brightness-110 uppercase tracking-[0.14em] text-xs"
              >
                {loading ? "Criando conta…" : "Criar conta"}
              </Button>
            </form>

            <div className="relative flex items-center gap-3 py-1">
              <span className="h-px flex-1 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">ou</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={handleGoogle}
              className="w-full border-border bg-background text-foreground hover:bg-card text-xs"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Cadastrar com Google
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
