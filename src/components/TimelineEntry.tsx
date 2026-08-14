import type { TimelineItem } from "../data/timeline";

interface TimelineEntryProps {
  dateRange: string;
  startYear: number;
  location: string;
  role: string;
  description: string;
  marker: TimelineItem["marker"];
}

const MARKER_CLASSES: Record<TimelineItem["marker"], string> = {
  current: "bg-link",
  past: "bg-node",
  origin: "bg-gold",
};

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  dateRange,
  startYear,
  location,
  role,
  description,
  marker,
}) => (
  <li className="relative grid grid-cols-1 gap-2 pb-8 last:pb-0 md:grid-cols-[168px_1fr] md:gap-7">
    <span
      aria-hidden="true"
      className={`absolute top-[5px] left-[-1px] size-3 -translate-x-1/2 rounded-full ring-3 ring-page ${MARKER_CLASSES[marker]}`}
    />
    <div className="flex flex-col gap-1 md:gap-[3px]">
      <time
        dateTime={String(startYear)}
        className={`font-mono text-tag ${
          marker === "current" ? "font-medium text-link" : "text-body"
        }`}
      >
        {dateRange}
      </time>
      <span className="font-mono text-meta text-muted">{location}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="font-display text-item font-bold text-ink">{role}</h3>
      <p className="max-w-[72ch] text-base/[1.65] text-body">{description}</p>
    </div>
  </li>
);

export default TimelineEntry;
