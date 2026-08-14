import { useTranslation } from "react-i18next";

const SkipLink: React.FC = () => {
  const { t } = useTranslation();

  return (
    <a
      href="#top"
      className="sr-only bg-accent text-accent-ink focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:rounded-full focus:px-4 focus:py-2 focus:outline-none"
    >
      {t("common.skip-to-content")}
    </a>
  );
};

export default SkipLink;
