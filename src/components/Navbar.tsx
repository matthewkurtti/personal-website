import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { navLinks } from "../data/navigation";
import type { Language, Theme } from "../types";
import LanguageToggle from "./LanguageToggle";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  selectedLanguage: Language;
  onChangeLanguage: (language: Language) => void;
}

const MOBILE_MENU_ID = "mobile-menu";

const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  selectedLanguage,
  onChangeLanguage,
}) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-border bg-page backdrop-blur-[10px] supports-[backdrop-filter]:bg-page/92"
    >
      <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-3 sm:px-8 sm:py-4 lg:px-12 xl:px-16">
        <a
          href="#top"
          aria-label={t("nav.home")}
          className="flex items-center gap-3 text-inherit"
        >
          <LogoMark />
          <span className="font-display text-base font-semibold tracking-[-0.01em] text-ink">
            Matt Kurtti
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav
            aria-label={t("nav.aria-main")}
            className="hidden items-center gap-1.5 font-display text-ui md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-body transition-colors hover:bg-control hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {t(`nav.${link.id}`)}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <LanguageToggle
              selectedLanguage={selectedLanguage}
              onChangeLanguage={onChangeLanguage}
            />
          </div>

          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={
              isMenuOpen ? t("common.close-menu") : t("common.open-menu")
            }
            className="flex items-center justify-center rounded-full p-1.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <MobileMenu
        id={MOBILE_MENU_ID}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        selectedLanguage={selectedLanguage}
        onChangeLanguage={onChangeLanguage}
      />
    </header>
  );
};

export default Navbar;
