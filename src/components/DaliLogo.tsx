type Props = {
  className?: string;
  /** Altura total do logo em px */
  size?: number;
};

/**
 * Logo Dali — versão minimalista da referência.
 * Símbolo "D" em círculo cobre + wordmark "Dali" em serif itálico.
 */
export function DaliLogo({ className, size = 40 }: Props) {
  const circle = size;
  const wordSize = size * 0.95;

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${size * 0.28}px`,
      }}
    >
      {/* Círculo cobre com "D" */}
      <span
        aria-hidden
        style={{
          width: circle,
          height: circle,
          borderRadius: "50%",
          background: "#d97227",
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: `${size * 0.62}px`,
            color: "#141110",
            lineHeight: 1,
            transform: "translateY(-2%)",
          }}
        >
          D
        </span>
      </span>

      {/* Wordmark "Dali" */}
      <span
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 600,
          fontStyle: "italic",
          fontSize: `${wordSize}px`,
          color: "#F4EFEA",
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        Dali
      </span>
    </div>
  );
}
