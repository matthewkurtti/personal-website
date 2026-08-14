export interface Performance {
  id: "dominant" | "placeholder-2" | "placeholder-3";
  href: string | null;
  thumbnailFocus: "left" | "center" | "right";
}

/**
 * `href: null` entries render as non-interactive cards (no play badge, no link)
 * until real YouTube URLs are supplied — see the handoff notes in the redesign PR.
 */
export const performances: readonly Performance[] = [
  { id: "dominant", href: null, thumbnailFocus: "center" },
  { id: "placeholder-2", href: null, thumbnailFocus: "left" },
  { id: "placeholder-3", href: null, thumbnailFocus: "right" },
];
