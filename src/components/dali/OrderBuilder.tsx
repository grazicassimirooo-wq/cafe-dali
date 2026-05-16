import { useState, useEffect, useCallback } from "react";
import { X, ShoppingBag, MessageCircle, Plus, Minus } from "lucide-react";
import { getMenuItems, type MenuItem, type MenuCategory } from "@/lib/store";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CATEGORY_LABELS: Record<MenuCategory, string> = {
  fresh: "Frescor & Energia",
  daily: "Para o Dia a Dia",
  combo: "Combinações",
};

const WHATSAPP = "5511959845396";

export function OrderBuilder({ open, onClose }: Props) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  useEffect(() => {
    if (open) {
      setItems(getMenuItems().filter((i) => i.active));
      setQuantities({});
    }
  }, [open]);

  const change = useCallback((id: string, delta: number) => {
    setQuantities((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      return { ...prev, [id]: next };
    });
  }, []);

  const selected = items.filter((i) => (quantities[i.id] ?? 0) > 0);
  const totalItems = selected.reduce((s, i) => s + (quantities[i.id] ?? 0), 0);

  function handleOrder() {
    if (selected.length === 0) return;
    const lines = selected.map((i) => {
      const qty = quantities[i.id];
      const price = i.price ? ` (${i.price})` : "";
      return `• ${qty}x ${i.label}${price}`;
    });
    const msg = `Olá! Quero montar meu pedido Dali 🤎\n\n${lines.join("\n")}\n\nPode me atender?`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  }

  if (!open) return null;

  const categories: MenuCategory[] = ["fresh", "daily", "combo"];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-3xl bg-background shadow-[0_-20px_60px_rgba(0,0,0,0.5)] sm:inset-auto sm:right-0 sm:top-0 sm:h-full sm:w-[420px] sm:rounded-none sm:rounded-l-3xl"
        role="dialog"
        aria-modal
        aria-label="Monte seu pedido"
        style={{ maxHeight: "92dvh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={18} className="text-copper" />
            <h2 className="font-display text-lg text-foreground">Monte seu pedido</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Item list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {categories.map((cat) => {
            const catItems = items.filter((i) => i.category === cat);
            if (catItems.length === 0) return null;
            return (
              <div key={cat} className="mb-6">
                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-copper">
                  {CATEGORY_LABELS[cat]}
                </p>
                <ul className="space-y-2">
                  {catItems.map((item) => {
                    const qty = quantities[item.id] ?? 0;
                    return (
                      <li
                        key={item.id}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 ${
                          qty > 0
                            ? "border-copper/60 bg-copper/5 shadow-[0_0_16px_rgba(217,114,39,0.2)]"
                            : "border-border/60 bg-card/40"
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground leading-snug">{item.label}</p>
                          {item.price && (
                            <p className="mt-0.5 text-xs font-semibold text-copper">{item.price}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {qty > 0 && (
                            <>
                              <button
                                onClick={() => change(item.id, -1)}
                                className="grid h-7 w-7 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-copper hover:text-copper"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-4 text-center text-sm font-semibold text-foreground">
                                {qty}
                              </span>
                            </>
                          )}
                          <button
                            onClick={() => change(item.id, 1)}
                            className="grid h-7 w-7 place-items-center rounded-full bg-copper text-primary-foreground transition-all hover:brightness-110 active:scale-95"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="border-t border-border px-6 py-4">
          <button
            onClick={handleOrder}
            disabled={totalItems === 0}
            className="btn-shimmer flex w-full items-center justify-center gap-2 rounded-full bg-copper px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-copper transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <MessageCircle size={15} strokeWidth={2.2} />
            {totalItems > 0 ? `Pedir pelo WhatsApp (${totalItems} item${totalItems !== 1 ? "s" : ""})` : "Selecione itens"}
          </button>
          <p className="mt-2 text-center text-[0.65rem] text-muted-foreground">
            Você será direcionada ao WhatsApp com seu pedido pronto.
          </p>
        </div>
      </div>
    </>
  );
}
