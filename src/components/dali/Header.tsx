import { useState } from "react";
import { MessageCircle, LogOut, User } from "lucide-react";
import { toast } from "sonner";
import { DaliLogo } from "@/components/DaliLogo";
import { AuthModal } from "@/components/dali/AuthModal";
import { OrderModal } from "@/components/dali/OrderModal";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NAV = [
  { label: "Menu Degustação", href: "#menu" },
  { label: "Lanches", href: "#lanches" },
  { label: "Boom Dali", href: "#boom" },
  { label: "Clientes", href: "#clientes" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const { user, logout } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  function handleOrderClick(e: React.MouseEvent) {
    e.preventDefault();
    if (!user) {
      setAuthOpen(true);
    } else {
      setOrderOpen(true);
    }
  }

  async function handleLogout() {
    await logout();
    toast.success("Até logo!");
  }

  const initials = user?.displayName
    ? user.displayName.slice(0, 2).toUpperCase()
    : user?.email?.slice(0, 2).toUpperCase() ?? "EU";

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center" aria-label="Dali Café & Experiências">
            <DaliLogo size={88} className="drop-shadow-[0_4px_18px_rgba(216,115,51,0.35)]" />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-foreground/85 transition-colors hover:text-copper"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-full border border-copper/30 bg-card/60 px-3 py-1.5 transition-colors hover:border-copper/60">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={user.photoURL ?? undefined} alt={user.displayName ?? ""} />
                      <AvatarFallback className="bg-copper text-[10px] text-primary-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden max-w-[120px] truncate text-[10px] font-medium uppercase tracking-[0.14em] text-foreground/80 sm:block">
                      {user.displayName ?? user.email?.split("@")[0]}
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="border-border bg-card text-foreground">
                  <div className="px-3 py-2">
                    <p className="text-xs font-semibold text-foreground">{user.displayName ?? "Olá!"}</p>
                    <p className="text-[10px] text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator className="bg-border" />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer text-xs text-foreground/80 hover:text-foreground focus:bg-card"
                  >
                    <LogOut size={13} className="mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="hidden items-center gap-2 rounded-md border border-copper/40 px-4 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-all hover:border-copper hover:text-copper lg:inline-flex"
              >
                <User size={13} />
                Entrar
              </button>
            )}

            <button
              onClick={handleOrderClick}
              className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.03]"
            >
              Faça seu pedido
              <MessageCircle size={15} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
      <OrderModal open={orderOpen} onOpenChange={setOrderOpen} />
    </>
  );
}
