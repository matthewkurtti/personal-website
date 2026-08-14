import type { ParseKeys } from "i18next";

export interface WorkItem {
  id: "findadoc" | "personal-website";
  href: string;
  /** `mark` renders the shared navy MK logo mark instead of an image file. */
  logo: { kind: "image"; src: string; altKey: ParseKeys } | { kind: "mark" };
  tech: readonly string[];
  ctaKey: "visit-site" | "view-source";
  hasI18nChip?: boolean;
}

export const workItems: readonly WorkItem[] = [
  {
    id: "findadoc",
    href: "https://www.findadoc.jp/",
    logo: {
      kind: "image",
      src: "/find_a_doc_japan_logo.jpg",
      altKey: "work.findadoc.logo-alt",
    },
    tech: ["Vue", "Nuxt", "TypeScript", "GraphQL", "Node"],
    hasI18nChip: true,
    ctaKey: "visit-site",
  },
  {
    id: "personal-website",
    href: "https://github.com/matthewkurtti/personal-website",
    logo: { kind: "mark" },
    tech: ["React", "TypeScript", "Vite", "Tailwind", "i18next"],
    ctaKey: "view-source",
  },
];
