import { useState } from "react";
import { toast } from "sonner";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  { id: "cappuccino", label: "Capuccino com cacau 55%" },
  { id: "combo-toast", label: "Combo Torrada Especial" },
  { id: "combo-rice", label: "Combo Arroz Colorido" },
  { id: "combo-cookies", label: "Combo Cookies" },
  { id: "boom-dali", label: "BOOM Dali" },
  { id: "bisnaguinha", label: "Bisnaguinhas de cenoura" },
  { id: "iogurte", label: "Iogurte com granola" },
  { id: "kit-degustacao", label: "Kit Degustação" },
];

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderModal({ open, onOpenChange }: OrderModalProps) {
  const { user } = useAuth();
  const [selected, setSelected] = useState<string[]>([]);
  const [observacoes, setObservacoes] = useState("");
  const [loading, setLoading] = useState(false);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  async function handleConfirm() {
    if (selected.length === 0) {
      toast.error("Selecione ao menos um item.");
      return;
    }
    setLoading(true);
    try {
      const itens = selected.map(
        (id) => PRODUCTS.find((p) => p.id === id)?.label ?? id,
      );
      await addDoc(collection(db, "pedidos"), {
        userId: user!.uid,
        userEmail: user!.email,
        userName: user!.displayName ?? user!.email,
        itens,
        observacoes: observacoes.trim(),
        status: "novo",
        createdAt: serverTimestamp(),
      });
      toast.success("Pedido registrado!");

      const msg = encodeURIComponent(
        `Olá! Gostaria de fazer um pedido:\n\n` +
          itens.map((i) => `• ${i}`).join("\n") +
          (observacoes.trim() ? `\n\nObservações: ${observacoes.trim()}` : "") +
          `\n\nNome: ${user!.displayName ?? user!.email}`,
      );
      window.open(`https://wa.me/?text=${msg}`, "_blank");

      setSelected([]);
      setObservacoes("");
      onOpenChange(false);
    } catch {
      toast.error("Erro ao registrar pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg border-border bg-card text-foreground">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            Faça seu <span className="italic text-copper">pedido</span>
          </DialogTitle>
        </DialogHeader>

        <p className="text-xs text-muted-foreground">
          Selecione os itens desejados e confirme. Vamos abrir o WhatsApp com
          seu pedido já formatado.
        </p>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {PRODUCTS.map((p) => {
            const checked = selected.includes(p.id);
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => toggle(p.id)}
                className={[
                  "flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-xs transition-all",
                  checked
                    ? "border-copper bg-copper/10 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-copper/50",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                    checked ? "border-copper bg-copper" : "border-border bg-transparent",
                  ].join(" ")}
                >
                  {checked && (
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-primary-foreground">
                      <path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="font-medium leading-tight">{p.label}</span>
              </button>
            );
          })}
        </div>

        <textarea
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
          placeholder="Observações (opcional)…"
          rows={2}
          className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-copper focus:outline-none"
        />

        <div className="mt-2 flex gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1 border-border text-xs"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={loading}
            className="flex-1 bg-copper text-primary-foreground hover:brightness-110 uppercase tracking-[0.14em] text-xs"
          >
            {loading ? "Confirmando…" : "Confirmar pedido"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
