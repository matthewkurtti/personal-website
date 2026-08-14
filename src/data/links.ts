export interface ContactLink {
  id: "email" | "github" | "linkedin";
  href: string;
}

export const contactLinks: readonly ContactLink[] = [
  { id: "email", href: "mailto:matthew.b.kurtti@gmail.com" },
  { id: "github", href: "https://github.com/matthewkurtti" },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/matthew-kurtti-737ab2123/",
  },
];
