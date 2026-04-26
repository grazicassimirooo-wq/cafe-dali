import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/dali/Header";
import { Hero } from "@/components/dali/Hero";
import { MenuTasting } from "@/components/dali/MenuTasting";
import { Cappuccino } from "@/components/dali/Cappuccino";
import { Combinations } from "@/components/dali/Combinations";
import { Snacks } from "@/components/dali/Snacks";
import { BoomDali } from "@/components/dali/BoomDali";
import { Footer } from "@/components/dali/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dali Café & Experiências — Sabor. Atmosfera. Momentos." },
      {
        name: "description",
        content:
          "Mais que café, um encontro. Conheça o Menu Degustação Dali, o BOOM Dali e viva sabores que acolhem.",
      },
      { property: "og:title", content: "Dali Café & Experiências" },
      {
        property: "og:description",
        content:
          "Sabor, nutrição e praticidade em cada momento. Menu Degustação, lanches e BOOM Dali.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MenuTasting />
      <Cappuccino />
      <Combinations />
      <Snacks />
      <BoomDali />
      <Footer />
    </main>
  );
}
