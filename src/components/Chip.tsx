interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => (
  <span className="rounded-full bg-chip px-2.5 py-1 text-tag text-brand-ink">
    {label}
  </span>
);

export default Chip;
