import { useTranslation } from "react-i18next";
import { navLinks } from "../data/navigation";
import type { Language } from "../types";
import LanguageToggle from "./LanguageToggle";

interface MobileMenuProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: Language;
  onChangeLanguage: (language: Language) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  id,
  isOpen,
  onClose,
  selectedLanguage,
  onChangeLanguage,
}) => {
  const { t } = useTranslation();

  return (
    <div
      id={id}
      aria-hidden={!isOpen}
      {...(!isOpen ? { inert: true } : {})}
      className={`overflow-hidden border-t border-border bg-page transition-all duration-300 ease-in-out md:hidden ${
        isOpen
          ? "max-h-72 py-4 opacity-100"
          : "pointer-events-none invisible max-h-0 py-0 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-shell flex-col items-start gap-1 px-5 sm:px-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={onClose}
            className="w-full rounded-full px-3.5 py-2.5 font-display text-ui text-body transition-colors hover:bg-control hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t(`nav.${link.id}`)}
          </a>
        ))}
        <div className="mt-2 px-3.5">
          <LanguageToggle
            selectedLanguage={selectedLanguage}
            onChangeLanguage={(language) => {
              onChangeLanguage(language);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
