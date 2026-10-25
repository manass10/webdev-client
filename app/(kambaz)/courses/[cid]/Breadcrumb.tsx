"use client";
import { usePathname } from "next/navigation";

function sectionFromPath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  // parts look like ["courses", "<cid>", "home" | "modules" | "assignments" | "people", ...]
  const section = parts[2] ?? "home";
  if (section === "home") return "Home";
  if (section === "modules") return "Modules";
  if (section === "assignments") return "Assignments";
  if (section === "people") return "People";
  return section.charAt(0).toUpperCase() + section.slice(1);
}

export default function Breadcrumb({ courseName }: { courseName: string }) {
  const pathname = usePathname() ?? "";
  const section = sectionFromPath(pathname);
  return (
    <h2 id="wd-course-breadcrumb">
      {courseName} &gt; {section}
    </h2>
  );
}
