const REVIEWS_KEY = "dali_reviews";
const DAILY_MENU_KEY = "dali_daily_menu";
const MENU_ITEMS_KEY = "dali_menu_items";

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  visible: boolean;
};

export type MenuCategory = "fresh" | "daily" | "combo";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  label: string;
  active: boolean;
};

export type DailyItem = {
  id: string;
  name: string;
  description: string;
  available: boolean;
};

// Reviews
export function getReviews(): Review[] {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveReview(review: Omit<Review, "id" | "date" | "visible">) {
  const reviews = getReviews();
  reviews.unshift({
    ...review,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    visible: true,
  });
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
}

export function updateReview(id: string, updates: Partial<Review>) {
  const reviews = getReviews();
  const idx = reviews.findIndex((r) => r.id === id);
  if (idx !== -1) {
    reviews[idx] = { ...reviews[idx], ...updates };
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
  }
}

export function deleteReview(id: string) {
  const reviews = getReviews().filter((r) => r.id !== id);
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
}

// Daily Menu
const DEFAULT_DAILY: DailyItem[] = [
  { id: "d1", name: "Bisnaguinha de cenoura com creme de avelã", description: "", available: true },
  { id: "d2", name: "Bisnaguinha integral com creme de queijo e ervas", description: "", available: true },
  { id: "d3", name: "Bisnaguinha com patê", description: "", available: true },
  { id: "d4", name: "Baguete de leite com salpicão", description: "", available: false },
  { id: "d5", name: "Baguete natural (peito de peru, queijo, alface e tomate)", description: "", available: true },
];

export function getDailyMenu(): DailyItem[] {
  try {
    const stored = localStorage.getItem(DAILY_MENU_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_DAILY;
  } catch {
    return DEFAULT_DAILY;
  }
}

export function saveDailyMenu(items: DailyItem[]) {
  localStorage.setItem(DAILY_MENU_KEY, JSON.stringify(items));
}

// Menu Items
const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { id: "f1", category: "fresh", label: "Água saborizada", active: true },
  { id: "f2", category: "fresh", label: "Iogurte com geleia e granola", active: true },
  { id: "f3", category: "fresh", label: "Mix de frutas com oleaginosas", active: true },
  { id: "s1", category: "daily", label: "Bisnaguinha de cenoura com creme de avelã", active: true },
  { id: "s2", category: "daily", label: "Bisnaguinha integral com creme de queijo e ervas", active: true },
  { id: "s3", category: "daily", label: "Bisnaguinha com patê", active: true },
  { id: "s4", category: "daily", label: "Baguete de leite com salpicão", active: true },
  { id: "s5", category: "daily", label: "Baguete natural (peito de peru, queijo, alface e tomate)", active: true },
  { id: "c1", category: "combo", label: "Biscoito de arroz com geleia de frutas vermelhas", active: true },
  { id: "c2", category: "combo", label: "Torrada de cacau com creme de amendoim", active: true },
  { id: "c3", category: "combo", label: "Seleção de biscoitos artesanais", active: true },
];

export function getMenuItems(): MenuItem[] {
  try {
    const stored = localStorage.getItem(MENU_ITEMS_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_MENU_ITEMS;
  } catch {
    return DEFAULT_MENU_ITEMS;
  }
}

export function saveMenuItems(items: MenuItem[]) {
  localStorage.setItem(MENU_ITEMS_KEY, JSON.stringify(items));
}
