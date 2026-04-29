import { MessageCircle } from "lucide-react";
import { DaliLogo } from "@/components/DaliLogo";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center" aria-label="Dali Café & Experiências">
          <DaliLogo size={56} />
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

        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.03]"
        >
          Faça seu pedido
          <MessageCircle size={15} strokeWidth={2.2} />
        </a>
      </div>
    </header>
  );
}
