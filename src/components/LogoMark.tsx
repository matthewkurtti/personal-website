interface LogoMarkProps {
  size?: "sm" | "lg";
}

const SIZE_CLASSES: Record<NonNullable<LogoMarkProps["size"]>, string> = {
  sm: "size-8 rounded-lg text-[14px]",
  lg: "size-18 rounded-card text-[31px]",
};

/**
 * The navy "MK" mark. Always decorative — the accessible name comes from
 * context (the nav link's aria-label, or the work card's heading).
 */
const LogoMark: React.FC<LogoMarkProps> = ({ size = "sm" }) => (
  <span
    aria-hidden="true"
    className={`flex items-center justify-center bg-brand font-display font-bold tracking-[-0.02em] text-white ${SIZE_CLASSES[size]}`}
  >
    MK
  </span>
);

export default LogoMark;
