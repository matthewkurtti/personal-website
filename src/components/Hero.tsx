import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative h-[80svh] min-h-[520px] overflow-hidden sm:h-[72svh] sm:min-h-[560px] lg:h-[min(76svh,600px)] xl:h-[min(76svh,660px)]"
    >
      <img
        src="/latin-band.jpg"
        alt={t("hero.image-alt")}
        width={1284}
        height={714}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[center_42%]"
      />
      <div className="absolute inset-0 bg-linear-175/srgb from-scrim/42 from-0% via-scrim/78 via-55% to-scrim-deep/95 to-100%" />

      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-shell flex-col items-start gap-8 px-5 pb-10 sm:px-8 sm:pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-14 lg:px-12 lg:pb-14 xl:px-16">
        <div className="flex max-w-[660px] flex-col gap-3 sm:gap-4 lg:gap-[18px]">
          <span className="font-mono text-eyebrow text-accent-soft uppercase">
            {t("hero.eyebrow")}
          </span>
          <h1 className="font-display text-display font-bold text-pretty text-white">
            {t("hero.name")}
          </h1>
          <p className="max-w-[48ch] text-lede text-on-dark-body">
            {t("hero.bio")}
          </p>
          <div className="flex flex-wrap gap-3 pt-2 sm:pt-3">
            <a
              href="#work"
              className="w-full rounded-full bg-accent px-7 py-3.5 text-center font-display text-base font-semibold text-accent-ink transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft sm:w-auto"
            >
              {t("hero.cta-work")}
            </a>
            <a
              href="/matt-kurtti-cv.pdf"
              download
              className="w-full rounded-full border border-white/40 px-7 py-3.5 text-center font-display text-base text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft sm:w-auto"
            >
              {t("hero.cta-cv")}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 font-mono text-meta text-on-dark-muted lg:text-right">
          <span>{t("hero.meta-languages")}</span>
          <span>{t("hero.meta-trumpet")}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
