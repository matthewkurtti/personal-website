interface SectionProps {
  id: string;
  className?: string;
  contentClassName?: string;
  ariaLabelledby?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  contentClassName = "py-14 sm:py-16 lg:py-19",
  ariaLabelledby,
  children,
}) => (
  <section
    id={id}
    aria-labelledby={ariaLabelledby}
    className={`scroll-mt-16 sm:scroll-mt-20 ${className}`}
  >
    <div
      className={`mx-auto max-w-shell px-5 sm:px-8 lg:px-12 xl:px-16 ${contentClassName}`}
    >
      {children}
    </div>
  </section>
);

export default Section;
