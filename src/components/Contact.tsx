import { useTranslation } from "react-i18next";
import Section from "./Section";
import { contactLinks } from "../data/links";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="contact"
      ariaLabelledby="contact-heading"
      className="border-t border-border bg-deep text-on-dark"
      contentClassName="grid grid-cols-1 items-start gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-21"
    >
      <div className="flex flex-col gap-4">
        <h2
          id="contact-heading"
          className="font-display text-headline font-bold"
        >
          {t("contact.title")}
          <span className="text-gold">{t("contact.title-period")}</span>
        </h2>
        <p className="max-w-[38ch] text-lg/[1.6] text-on-dark-body">
          {t("contact.subcopy")}
        </p>
      </div>

      <ul className="flex flex-col gap-3 text-base font-semibold">
        {contactLinks.map((link) => {
          const external = link.id !== "email";
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-accent-soft transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
              >
                {t(`contact.${link.id}`)} →
                {external && (
                  <span className="sr-only"> {t("common.opens-new-tab")}</span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Contact;
