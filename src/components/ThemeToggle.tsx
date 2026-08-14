import { useTranslation } from "react-i18next";
import type { Theme } from "../types";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

interface ThemeToggleProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggleTheme }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-pressed={theme === "dark"}
      aria-label={
        theme === "dark"
          ? t("common.toggle-theme-to-light")
          : t("common.toggle-theme-to-dark")
      }
      className="flex h-[30px] w-[34px] items-center justify-center rounded-full bg-control text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
