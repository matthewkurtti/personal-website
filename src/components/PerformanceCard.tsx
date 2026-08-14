import { useTranslation } from "react-i18next";
import type { Performance } from "../data/performances";
import PlayIcon from "./icons/PlayIcon";

interface PerformanceCardProps {
  href: string | null;
  thumbnailFocus: Performance["thumbnailFocus"];
  title: string;
  venue: string;
  caption: string;
}

const FOCUS_CLASSES: Record<Performance["thumbnailFocus"], string> = {
  left: "object-[20%_50%]",
  center: "object-[60%_45%]",
  right: "object-[85%_55%]",
};

const CARD_CLASSES =
  "rounded-2xl border-border bg-raised grid grid-cols-1 items-center gap-4 border p-4 sm:grid-cols-[190px_1fr] sm:gap-5";

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  href,
  thumbnailFocus,
  title,
  venue,
  caption,
}) => {
  const { t } = useTranslation();

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden rounded-media sm:aspect-auto sm:h-[108px]">
        <img
          src="/latin-band.jpg"
          alt=""
          className={`absolute inset-0 size-full object-cover ${FOCUS_CLASSES[thumbnailFocus]}`}
        />
        <span aria-hidden="true" className="absolute inset-0 bg-scrim/35" />
        {href && (
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 flex size-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-scrim"
          >
            <PlayIcon />
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
        <p className="text-ui text-body">{venue}</p>
        <span className="font-mono text-meta text-muted">{caption}</span>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${CARD_CLASSES} text-inherit transition-colors hover:border-accent hover:bg-raised-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      >
        {content}
        <span className="sr-only">{t("common.opens-new-tab")}</span>
      </a>
    );
  }

  return <div className={CARD_CLASSES}>{content}</div>;
};

export default PerformanceCard;
