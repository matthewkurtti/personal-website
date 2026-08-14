interface SectionHeadingProps {
  id?: string;
  title: string;
  aside?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  title,
  aside,
}) => (
  <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 lg:mb-9">
    <h2 id={id} className="font-display text-section font-bold text-ink">
      {title}
    </h2>
    {aside}
  </div>
);

export default SectionHeading;
