import { DaliLogo } from "@/components/DaliLogo";

export function TopBar() {
  return (
    <div className="relative z-50 border-b border-border/50 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-6 py-3 lg:px-10">
        <DaliLogo size={36} />
        <span className="font-display text-xs uppercase tracking-[0.32em] text-copper sm:text-sm">
          Mais que café, um encontro
        </span>
      </div>
    </div>
  );
}
