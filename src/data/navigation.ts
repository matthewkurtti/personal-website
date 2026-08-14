export interface NavLink {
  id: "work" | "path" | "music" | "contact";
  href: string;
}

export const navLinks: readonly NavLink[] = [
  { id: "work", href: "#work" },
  { id: "path", href: "#path" },
  { id: "music", href: "#music" },
  { id: "contact", href: "#contact" },
];
