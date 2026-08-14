import { useTranslation } from "react-i18next";
import Section from "./Section";
import PerformanceCard from "./PerformanceCard";
import { performances } from "../data/performances";

const Music: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="music"
      ariaLabelledby="music-heading"
      className="border-b border-border bg-surface"
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[300px_1fr] lg:gap-14">
        <div className="flex flex-col gap-5">
          <img
            src="/trumpet-profile.jpg"
            alt={t("music.portrait-alt")}
            className="mx-auto aspect-square w-full max-w-[300px] rounded-card object-cover lg:mx-0 lg:max-w-none"
          />
          <h2
            id="music-heading"
            className="font-display text-section font-bold text-ink"
          >
            {t("music.title")}
          </h2>
          <p className="text-base/[1.65] text-body">{t("music.blurb")}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-item font-semibold text-ink">
            {t("music.performances-title")}
          </h3>
          <div className="flex flex-col gap-4">
            {performances.map((performance) => (
              <PerformanceCard
                key={performance.id}
                href={performance.href}
                thumbnailFocus={performance.thumbnailFocus}
                title={t(`music.${performance.id}.title`)}
                venue={t(`music.${performance.id}.venue`)}
                caption={t(`music.${performance.id}.caption`)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Music;
