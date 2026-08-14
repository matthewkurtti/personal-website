export interface TimelineItem {
  id: "nekkolabs" | "findadoc" | "amazon" | "jet" | "capstone" | "nasa";
  startYear: number;
  endYear: number | "present";
  marker: "current" | "past" | "origin";
}

export const timelineItems: readonly TimelineItem[] = [
  { id: "nekkolabs", startYear: 2026, endYear: "present", marker: "current" },
  { id: "findadoc", startYear: 2025, endYear: 2026, marker: "past" },
  { id: "amazon", startYear: 2021, endYear: 2024, marker: "past" },
  { id: "jet", startYear: 2019, endYear: 2021, marker: "past" },
  { id: "capstone", startYear: 2018, endYear: 2019, marker: "past" },
  { id: "nasa", startYear: 2017, endYear: 2017, marker: "origin" },
];
