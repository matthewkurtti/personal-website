import { useTranslation } from "react-i18next";
import type { Language } from "../types";

interface LanguageToggleProps {
  selectedLanguage: Language;
  onChangeLanguage: (language: Language) => void;
}

const OPTION_BASE =
  "rounded-full px-2.5 py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  selectedLanguage,
  onChangeLanguage,
}) => {
  const { t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t("common.language")}
      className="flex items-center rounded-full bg-control p-[3px] font-mono text-meta"
    >
      <button
        type="button"
        aria-pressed={selectedLanguage === "en"}
        onClick={() => onChangeLanguage("en")}
        className={
          selectedLanguage === "en"
            ? `${OPTION_BASE} bg-brand text-white`
            : `${OPTION_BASE} text-muted`
        }
      >
        EN
      </button>
      <button
        type="button"
        lang="ja"
        aria-pressed={selectedLanguage === "ja"}
        onClick={() => onChangeLanguage("ja")}
        className={
          selectedLanguage === "ja"
            ? `${OPTION_BASE} bg-brand text-white`
            : `${OPTION_BASE} text-muted`
        }
      >
        日本語
      </button>
    </div>
  );
};

export default LanguageToggle;
