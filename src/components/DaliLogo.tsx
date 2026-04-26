type Props = {
  className?: string;
  /** Altura total do logo em px */
  size?: number;
  /** Mostra o slogan inferior "SABOR. ATMOSFERA. MOMENTOS." */
  showSlogan?: boolean;
  /** Mostra o subtítulo "CAFÉ & EXPERIÊNCIAS" */
  showTagline?: boolean;
  /** Mostra a divisória vertical entre o "D" e o texto */
  showDivider?: boolean;
  /** Adiciona o brilho radial chiaroscuro no canto superior direito */
  withGlow?: boolean;
};

/**
 * Logo Dali — Café & Experiências
 * Estilo Art Déco com símbolo "D" em cobre envelhecido,
 * tipografia Cinzel/Playfair com efeito 3D e iluminação chiaroscuro.
 */
export function DaliLogo({
  className,
  size = 140,
  showSlogan = true,
  showTagline = true,
  showDivider = true,
  withGlow = true,
}: Props) {
  // Escalas relativas ao tamanho base
  const symbolSize = size * 0.85;
  const wordmarkSize = size * 0.58;
  const taglineSize = Math.max(10, size * 0.085);
  const sloganSize = Math.max(9, size * 0.075);
  const gap = size * 0.18;
  const dividerHeight = size * 0.78;

  const gradientId = "dali-copper-gradient";
  const filterId = "dali-3d-shadow";

  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: `${gap}px`,
        padding: `${size * 0.05}px ${size * 0.1}px`,
        isolation: "isolate",
      }}
    >
      {withGlow && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(255, 200, 150, 0.18), transparent 55%)",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      )}

      {/* PARTE A — Símbolo "D" Art Déco */}
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Dali monogram"
        style={{
          filter: "drop-shadow(3px 5px 8px rgba(0,0,0,0.9))",
          flexShrink: 0,
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C9A0" />
            <stop offset="35%" stopColor="#D4A373" />
            <stop offset="60%" stopColor="#B87333" />
            <stop offset="100%" stopColor="#7A4B2A" />
          </linearGradient>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" />
            <feOffset dx="1" dy="1.5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.7" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Moldura quadrada Art Déco */}
        <rect
          x="6"
          y="6"
          width="108"
          height="108"
          rx="2"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          opacity="0.55"
        />
        <rect
          x="11"
          y="11"
          width="98"
          height="98"
          rx="1"
          stroke={`url(#${gradientId})`}
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Letra D — contorno externo */}
        <path
          d="M30 22 H62 C82 22 94 36 94 60 C94 84 82 98 62 98 H30 Z"
          stroke={`url(#${gradientId})`}
          strokeWidth="3.5"
          strokeLinejoin="miter"
          fill="none"
          filter={`url(#${filterId})`}
        />
        {/* Letra D — contorno interno paralelo */}
        <path
          d="M40 32 H60 C76 32 84 42 84 60 C84 78 76 88 60 88 H40 Z"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinejoin="miter"
          fill="none"
          opacity="0.85"
        />

        {/* Detalhes Art Déco — pequenas linhas decorativas */}
        <line x1="20" y1="60" x2="28" y2="60" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
        <circle cx="17" cy="60" r="1.5" fill={`url(#${gradientId})`} />
      </svg>

      {/* PARTE B — Divisória vertical */}
      {showDivider && (
        <span
          aria-hidden
          style={{
            display: "block",
            width: 0,
            height: `${dividerHeight}px`,
            borderLeft: "1.5px solid #B87333",
            opacity: 0.7,
            flexShrink: 0,
          }}
        />
      )}

      {/* PARTE C — Texto */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: `${size * 0.04}px`,
        }}
      >
        {/* "Dali" — wordmark com efeito 3D */}
        <span
          style={{
            fontFamily: '"Cinzel", "Playfair Display", Georgia, serif',
            fontWeight: 700,
            fontSize: `${wordmarkSize}px`,
            lineHeight: 1,
            color: "#F4EFEA",
            letterSpacing: "0.04em",
            textShadow:
              "1px 1px 0 rgba(0,0,0,0.4), 2px 4px 10px rgba(0,0,0,0.85), 0 0 20px rgba(255,200,150,0.08)",
          }}
        >
          Dali
        </span>

        {/* Tagline — "CAFÉ & EXPERIÊNCIAS" */}
        {showTagline && (
          <span
            style={{
              fontFamily: '"Montserrat", system-ui, sans-serif',
              fontWeight: 500,
              fontSize: `${taglineSize}px`,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              background:
                "linear-gradient(135deg, #D4A373 0%, #B87333 50%, #7A4B2A 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Café &amp; Experiências
          </span>
        )}

        {/* Linha horizontal com grão de café centralizado */}
        {showSlogan && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: `${size * 0.12}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "50%",
                height: 0,
                borderBottom: "1px solid #B87333",
                opacity: 0.5,
              }}
            />
            <svg
              width={size * 0.11}
              height={size * 0.11}
              viewBox="0 0 24 24"
              fill="none"
              style={{
                position: "relative",
                background: "#141110",
                padding: "0 4px",
              }}
              aria-hidden
            >
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="9"
                stroke="#B87333"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(25 12 12)"
              />
              <path
                d="M8 6 Q12 12 16 18"
                stroke="#B87333"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(25 12 12)"
              />
            </svg>
          </div>
        )}

        {/* Slogan — "SABOR. ATMOSFERA. MOMENTOS." */}
        {showSlogan && (
          <span
            style={{
              fontFamily: '"Montserrat", system-ui, sans-serif',
              fontWeight: 400,
              fontSize: `${sloganSize}px`,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#F4EFEA",
              opacity: 0.9,
            }}
          >
            Sabor. Atmosfera. Momentos.
          </span>
        )}
      </div>
    </div>
  );
}
