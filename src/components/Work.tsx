import { useTranslation } from "react-i18next";
import LogoMark from "./LogoMark";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { workItems } from "../data/work";

const Work: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="work"
      ariaLabelledby="work-heading"
      className="border-b border-border bg-surface"
    >
      <SectionHeading
        id="work-heading"
        title={t("work.title")}
        aside={
          <a
            href="https://github.com/matthewkurtti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ui font-semibold text-link transition-colors hover:text-link-hover"
          >
            {t("work.github-link")}
            <span className="sr-only"> {t("common.opens-new-tab")}</span>
          </a>
        }
      />
      <ul className="flex flex-col gap-5">
        {workItems.map((item) => (
          <li key={item.id}>
            <WorkCard
              href={item.href}
              logo={
                item.logo.kind === "mark" ? (
                  <LogoMark size="lg" />
                ) : (
                  <img
                    src={item.logo.src}
                    alt={t(item.logo.altKey)}
                    className="size-18 rounded-lg object-contain"
                  />
                )
              }
              title={t(`work.${item.id}.title`)}
              dateRange={t(`work.${item.id}.date-range`)}
              description={t(`work.${item.id}.description`)}
              tech={item.tech}
              chipExtra={
                item.hasI18nChip ? t("work.findadoc.chip-i18n") : undefined
              }
              ctaLabel={t(`work.${item.ctaKey}`)}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Work;
