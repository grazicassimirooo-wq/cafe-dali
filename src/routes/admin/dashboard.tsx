import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  Star,
  Trash2,
  Eye,
  EyeOff,
  Plus,
  Pencil,
  Check,
  X,
  LogOut,
  CalendarDays,
  BookOpen,
  MessageSquare,
  ChevronLeft,
} from "lucide-react";
import {
  isAdminAuthenticated,
  clearAdminAuth,
  getReviews,
  deleteReview,
  updateReview,
  getDailyMenu,
  saveDailyMenu,
  getMenuItems,
  saveMenuItems,
  type Review,
  type DailyItem,
  type MenuItem,
  type MenuCategory,
} from "@/lib/store";
import daliLogo from "@/assets/dali-lockup.png";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

type Tab = "reviews" | "daily" | "menu";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("reviews");

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate({ to: "/admin/" });
    }
  }, [navigate]);

  function handleLogout() {
    clearAdminAuth();
    navigate({ to: "/admin/" });
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "reviews", label: "Avaliações", icon: <MessageSquare size={15} /> },
    { id: "daily", label: "Cardápio do Dia", icon: <CalendarDays size={15} /> },
    { id: "menu", label: "Cardápio", icon: <BookOpen size={15} /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft size={18} />
            </Link>
            <img src={daliLogo} alt="Dali" className="h-8 object-contain" />
            <span className="text-xs font-medium uppercase tracking-widest text-copper">
              Admin
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut size={14} />
            Sair
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Tabs */}
        <div className="mb-8 flex gap-1 rounded-xl border border-border bg-card/50 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                activeTab === tab.id
                  ? "bg-copper text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === "reviews" && <ReviewsTab />}
        {activeTab === "daily" && <DailyMenuTab />}
        {activeTab === "menu" && <MenuTab />}
      </main>
    </div>
  );
}

// ─── Reviews Tab ──────────────────────────────────────────────────────────────

function ReviewsTab() {
  const [reviews, setReviews] = useState<Review[]>([]);

  function reload() {
    setReviews(getReviews());
  }

  useEffect(() => {
    reload();
  }, []);

  function handleDelete(id: string) {
    deleteReview(id);
    reload();
  }

  function handleToggleVisible(id: string, current: boolean) {
    updateReview(id, { visible: !current });
    reload();
  }

  const avg =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : "—";

  return (
    <div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl text-foreground">Avaliações</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {reviews.length} avaliação{reviews.length !== 1 ? "ões" : ""} recebida
            {reviews.length !== 1 ? "s" : ""}
          </p>
        </div>
        {reviews.length > 0 && (
          <div className="flex items-center gap-1.5 rounded-lg border border-copper/30 bg-copper/5 px-4 py-2">
            <Star size={16} className="fill-copper text-copper" />
            <span className="text-lg font-semibold text-foreground">{avg}</span>
            <span className="text-xs text-muted-foreground">/ 5</span>
          </div>
        )}
      </div>

      {reviews.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border py-16 text-center">
          <MessageSquare size={32} className="mx-auto text-muted-foreground/40" />
          <p className="mt-3 text-sm text-muted-foreground">
            Nenhuma avaliação ainda.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {reviews.map((r) => (
            <div
              key={r.id}
              className={`rounded-xl border bg-card/60 p-5 transition-opacity ${
                !r.visible ? "opacity-50" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground text-sm">
                      {r.name}
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          size={13}
                          className={
                            r.rating >= n
                              ? "fill-copper text-copper"
                              : "text-muted-foreground/30"
                          }
                        />
                      ))}
                    </div>
                    {!r.visible && (
                      <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                        Oculta
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.text}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/50">
                    {new Date(r.date).toLocaleString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button
                    onClick={() => handleToggleVisible(r.id, r.visible)}
                    className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    title={r.visible ? "Ocultar" : "Mostrar"}
                  >
                    {r.visible ? <Eye size={15} /> : <EyeOff size={15} />}
                  </button>
                  <button
                    onClick={() => handleDelete(r.id)}
                    className="rounded-md p-2 text-muted-foreground hover:bg-red-50 hover:text-red-500 transition-colors"
                    title="Excluir"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Daily Menu Tab ───────────────────────────────────────────────────────────

function DailyMenuTab() {
  const [items, setItems] = useState<DailyItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setItems(getDailyMenu());
  }, []);

  const persist = useCallback((updated: DailyItem[]) => {
    saveDailyMenu(updated);
    setItems(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }, []);

  function toggleAvailable(id: string) {
    const updated = items.map((i) =>
      i.id === id ? { ...i, available: !i.available } : i
    );
    persist(updated);
  }

  function startEdit(item: DailyItem) {
    setEditingId(item.id);
    setEditName(item.name);
    setEditDesc(item.description);
  }

  function commitEdit() {
    if (!editName.trim() || !editingId) return;
    const updated = items.map((i) =>
      i.id === editingId ? { ...i, name: editName.trim(), description: editDesc.trim() } : i
    );
    persist(updated);
    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
  }

  function deleteItem(id: string) {
    persist(items.filter((i) => i.id !== id));
  }

  function addItem() {
    if (!newName.trim()) return;
    const item: DailyItem = {
      id: crypto.randomUUID(),
      name: newName.trim(),
      description: newDesc.trim(),
      available: true,
    };
    persist([...items, item]);
    setNewName("");
    setNewDesc("");
    setShowAdd(false);
  }

  return (
    <div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl text-foreground">Cardápio do Dia</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Gerencie o que está disponível hoje.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {saved && (
            <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
              <Check size={13} /> Salvo
            </span>
          )}
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="flex items-center gap-1.5 rounded-md bg-copper px-3 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground"
          >
            <Plus size={14} />
            Adicionar
          </button>
        </div>
      </div>

      {showAdd && (
        <div className="mb-4 rounded-xl border border-copper/40 bg-copper/5 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-copper">
            Novo item
          </p>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nome do item"
            className="mb-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-copper focus:outline-none"
            autoFocus
          />
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Descrição (opcional)"
            className="mb-3 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-copper focus:outline-none"
          />
          <div className="flex gap-2">
            <button
              onClick={addItem}
              className="flex items-center gap-1 rounded-md bg-copper px-3 py-1.5 text-xs font-semibold text-primary-foreground"
            >
              <Check size={13} /> Confirmar
            </button>
            <button
              onClick={() => { setShowAdd(false); setNewName(""); setNewDesc(""); }}
              className="flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground"
            >
              <X size={13} /> Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl border bg-card/60 p-4 transition-opacity ${
              !item.available ? "opacity-60" : ""
            }`}
          >
            {editingId === item.id ? (
              <div>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="mb-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-copper focus:outline-none"
                  autoFocus
                />
                <input
                  type="text"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  placeholder="Descrição (opcional)"
                  className="mb-3 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-copper focus:outline-none"
                />
                <div className="flex gap-2">
                  <button
                    onClick={commitEdit}
                    className="flex items-center gap-1 rounded-md bg-copper px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                  >
                    <Check size={13} /> Salvar
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    <X size={13} /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleAvailable(item.id)}
                  className={`h-5 w-5 shrink-0 rounded-full border-2 transition-colors ${
                    item.available
                      ? "border-copper bg-copper"
                      : "border-muted-foreground/40 bg-transparent"
                  }`}
                  title={item.available ? "Disponível" : "Indisponível"}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="flex gap-1 shrink-0">
                  <button
                    onClick={() => startEdit(item)}
                    className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="rounded-md p-1.5 text-muted-foreground hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted-foreground/60">
        Clique no círculo para marcar um item como disponível ou indisponível.
      </p>
    </div>
  );
}

// ─── Menu Tab ─────────────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<MenuCategory, string> = {
  fresh: "Frescor & Energia",
  daily: "Para o Dia a Dia",
  combo: "Combinações",
};

function MenuTab() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newCategory, setNewCategory] = useState<MenuCategory>("daily");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setItems(getMenuItems());
  }, []);

  const persist = useCallback((updated: MenuItem[]) => {
    saveMenuItems(updated);
    setItems(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }, []);

  function toggleActive(id: string) {
    persist(items.map((i) => (i.id === id ? { ...i, active: !i.active } : i)));
  }

  function startEdit(item: MenuItem) {
    setEditingId(item.id);
    setEditLabel(item.label);
  }

  function commitEdit() {
    if (!editLabel.trim() || !editingId) return;
    persist(items.map((i) => (i.id === editingId ? { ...i, label: editLabel.trim() } : i)));
    setEditingId(null);
  }

  function deleteItem(id: string) {
    persist(items.filter((i) => i.id !== id));
  }

  function addItem() {
    if (!newLabel.trim()) return;
    const item: MenuItem = {
      id: crypto.randomUUID(),
      category: newCategory,
      label: newLabel.trim(),
      active: true,
    };
    persist([...items, item]);
    setNewLabel("");
    setShowAdd(false);
  }

  const categories: MenuCategory[] = ["fresh", "daily", "combo"];

  return (
    <div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl text-foreground">Cardápio</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Edite os itens exibidos no site.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {saved && (
            <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
              <Check size={13} /> Salvo
            </span>
          )}
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="flex items-center gap-1.5 rounded-md bg-copper px-3 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground"
          >
            <Plus size={14} />
            Adicionar
          </button>
        </div>
      </div>

      {showAdd && (
        <div className="mb-6 rounded-xl border border-copper/40 bg-copper/5 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-copper">
            Novo item
          </p>
          <div className="mb-2 flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setNewCategory(cat)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  newCategory === cat
                    ? "bg-copper text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-copper"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Nome do item"
            className="mb-3 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-copper focus:outline-none"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={addItem}
              className="flex items-center gap-1 rounded-md bg-copper px-3 py-1.5 text-xs font-semibold text-primary-foreground"
            >
              <Check size={13} /> Confirmar
            </button>
            <button
              onClick={() => { setShowAdd(false); setNewLabel(""); }}
              className="flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground"
            >
              <X size={13} /> Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {categories.map((cat) => {
          const catItems = items.filter((i) => i.category === cat);
          return (
            <div key={cat}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                {CATEGORY_LABELS[cat]}
              </h3>
              {catItems.length === 0 ? (
                <p className="text-sm text-muted-foreground/60 italic">
                  Nenhum item nesta categoria.
                </p>
              ) : (
                <div className="space-y-2">
                  {catItems.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-xl border bg-card/60 p-4 transition-opacity ${
                        !item.active ? "opacity-50" : ""
                      }`}
                    >
                      {editingId === item.id ? (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={editLabel}
                            onChange={(e) => setEditLabel(e.target.value)}
                            className="flex-1 rounded-md border border-border bg-background px-3 py-1.5 text-sm focus:border-copper focus:outline-none"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === "Enter") commitEdit();
                              if (e.key === "Escape") setEditingId(null);
                            }}
                          />
                          <button
                            onClick={commitEdit}
                            className="rounded-md bg-copper px-2.5 py-1.5 text-primary-foreground"
                          >
                            <Check size={14} />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="rounded-md border border-border px-2.5 py-1.5 text-muted-foreground"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleActive(item.id)}
                            className={`h-5 w-5 shrink-0 rounded-full border-2 transition-colors ${
                              item.active
                                ? "border-copper bg-copper"
                                : "border-muted-foreground/40 bg-transparent"
                            }`}
                          />
                          <span className="flex-1 text-sm text-foreground leading-snug">
                            {item.label}
                          </span>
                          <div className="flex gap-1 shrink-0">
                            <button
                              onClick={() => startEdit(item)}
                              className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                            >
                              <Pencil size={14} />
                            </button>
                            <button
                              onClick={() => deleteItem(item.id)}
                              className="rounded-md p-1.5 text-muted-foreground hover:bg-red-50 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
