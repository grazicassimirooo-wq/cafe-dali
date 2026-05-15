import { ShoppingBag, MessageCircle, Heart, Instagram, Facebook } from "lucide-react";
import cafeImg from "@/assets/cafe-interior.jpg";
import { DaliLogo } from "@/components/DaliLogo";

export function Footer() {
  return (
    <footer id="contato" className="bg-background">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Coluna 1: imagem ambiente com overlay */}
          <div className="relative overflow-hidden rounded-2xl shadow-deep">
            <img
              src={cafeImg}
              alt="Ambiente da cafeteria Dali"
              width={1024}
              height={1100}
              loading="lazy"
              className="h-full min-h-[340px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
              <p className="font-display text-xl italic text-foreground">
                Um espaço feito
                <br />
                para você
              </p>
              <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-copper">
                Venha nos visitar
              </p>
            </div>
          </div>

          {/* Coluna 2: copy */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-3xl uppercase tracking-tight text-foreground sm:text-[2rem]">
              Mais que alimentos,
              <br />
              <span className="italic">momentos.</span>
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Aqui cada escolha tem propósito. Seja sozinha ou em boa companhia,
              seu momento Dali sempre será especial.
            </p>
            <p className="mt-6 font-script text-3xl text-copper">
              Dali. Tudo fácil pra você.
            </p>
          </div>

          {/* Coluna 3: CTA card */}
          <div className="rounded-2xl border border-copper/40 bg-card p-8">
            <span className="tag-copper">Pronta para viver</span>
            <h4 className="mt-2 font-display text-2xl text-foreground">
              essa experiência?
            </h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-foreground/90">
                <ShoppingBag className="text-copper" size={20} strokeWidth={1.6} />
                Monte seu momento Dali
              </li>
              <li className="flex items-center gap-3 text-foreground/90">
                <MessageCircle className="text-copper" size={20} strokeWidth={1.6} />
                Peça agora pelo WhatsApp
              </li>
            </ul>
            <a
              href="https://wa.me/"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-copper transition-transform hover:scale-[1.02]"
            >
              Faça seu pedido
              <MessageCircle size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex-row lg:px-10">
          <div className="flex items-center">
            <DaliLogo size={48} />
          </div>

          <div className="flex items-center gap-4">
            <span>Siga a Dali</span>
            <a href="#" aria-label="Instagram" className="text-foreground/80 transition-colors hover:text-copper">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="text-foreground/80 transition-colors hover:text-copper">
              <Facebook size={16} />
            </a>
          </div>

          <div className="flex items-center gap-2">
            Feito com
            <Heart size={14} className="fill-copper text-copper" />
            para você
          </div>
        </div>
      </div>
    </footer>
  );
}
