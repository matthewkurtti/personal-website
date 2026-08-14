import { useTranslation } from "react-i18next";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import TimelineEntry from "./TimelineEntry";
import { timelineItems } from "../data/timeline";

const Path: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="path"
      ariaLabelledby="path-heading"
      className="border-b border-border"
    >
      <SectionHeading
        id="path-heading"
        title={t("path.title")}
        aside={
          <span className="font-mono text-tag text-muted">
            {t("path.subtitle")}
          </span>
        }
      />
      <ol className="flex flex-col border-l-2 border-rule pl-6 sm:pl-7">
        {timelineItems.map((item) => {
          const dateRange =
            item.startYear === item.endYear
              ? String(item.startYear)
              : `${item.startYear} — ${
                  item.endYear === "present"
                    ? t("common.present")
                    : item.endYear
                }`;

          return (
            <TimelineEntry
              key={item.id}
              startYear={item.startYear}
              dateRange={dateRange}
              location={t(`path.${item.id}.location`)}
              role={t(`path.${item.id}.role`)}
              description={t(`path.${item.id}.description`)}
              marker={item.marker}
            />
          );
        })}
      </ol>
    </Section>
  );
};

export default Path;
