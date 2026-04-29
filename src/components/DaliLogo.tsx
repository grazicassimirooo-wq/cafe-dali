import logoFull from "@/assets/dali-logo-full.png";

type Props = {
  className?: string;
  /** Altura total do logo em px */
  size?: number;
};

/**
 * Logo Dali — imagem oficial completa.
 */
export function DaliLogo({ className, size = 40 }: Props) {
  return (
    <img
      src={logoFull}
      alt="Dali Café & Experiências"
      className={className}
      style={{ height: size, width: "auto", display: "inline-block" }}
    />
  );
}
