import { useTranslation } from "react-i18next";
import Chip from "./Chip";

interface WorkCardProps {
  href: string;
  logo: React.ReactNode;
  title: string;
  dateRange: string;
  description: string;
  tech: readonly string[];
  chipExtra?: string;
  ctaLabel: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  href,
  logo,
  title,
  dateRange,
  description,
  tech,
  chipExtra,
  ctaLabel,
}) => {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid grid-cols-1 items-center gap-5 rounded-card border border-border bg-raised p-5 text-inherit transition-colors hover:border-accent hover:bg-raised-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:grid-cols-[112px_1fr] sm:gap-7 sm:p-6 xl:grid-cols-[150px_1fr_148px] xl:gap-9 xl:p-7"
    >
      <div className="flex h-24 items-center justify-center rounded-xl border border-border bg-white sm:h-28">
        {logo}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="font-display text-card font-bold text-ink">{title}</h3>
          <span className="font-mono text-meta text-muted">{dateRange}</span>
        </div>
        <p className="max-w-[66ch] text-base/[1.6] text-body">{description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tech.map((label) => (
            <Chip key={label} label={label} />
          ))}
          {chipExtra && <Chip label={chipExtra} />}
        </div>
      </div>
      <span
        aria-hidden="true"
        className="text-ui font-semibold text-link sm:col-span-2 xl:col-span-1 xl:text-right"
      >
        {ctaLabel}
      </span>
      <span className="sr-only">{t("common.opens-new-tab")}</span>
    </a>
  );
};

export default WorkCard;
