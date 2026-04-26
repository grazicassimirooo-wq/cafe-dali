import { DaliLogo } from "@/components/DaliLogo";
import { MessageCircle } from "lucide-react";

const NAV = [
  { label: "Menu Degustação", href: "#menu" },
  { label: "Lanches", href: "#lanches" },
  { label: "Boom Dali", href: "#boom" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <DaliLogo size={38} />
          <span className="font-display text-2xl text-foreground">Dali</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:text-copper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-copper px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.03]"
        >
          Faça seu pedido
          <MessageCircle size={16} strokeWidth={2.2} />
        </a>
      </div>
    </header>
  );
}
