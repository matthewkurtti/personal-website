import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deeper text-on-dark-faint">
      <div className="mx-auto flex max-w-shell flex-col items-center justify-between gap-2 px-5 py-5 text-center font-mono text-meta sm:flex-row sm:px-8 sm:text-left lg:px-12 xl:px-16">
        <span>{t("footer.copyright", { year })}</span>
        <span>{t("footer.location")}</span>
      </div>
    </footer>
  );
};

export default Footer;
