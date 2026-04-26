type Props = { className?: string; size?: number; color?: string };

export function DaliLogo({ className, size = 36, color = "var(--copper)" }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dali"
    >
      <rect x="2" y="2" width="60" height="60" rx="6" stroke={color} strokeWidth="2.5" />
      <path
        d="M18 16 H32 C42 16 48 22 48 32 C48 42 42 48 32 48 H18 V16 Z"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M26 22 V42"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  );
}
