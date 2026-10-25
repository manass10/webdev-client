"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const modules = `/courses/${cid}/modules`;
  const assignments = `/courses/${cid}/assignments`;
  const people = `/courses/${cid}/people`;

  const itemClass = (href: string, exact = true) => {
    const active = exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");
    return active ? "list-group-item active border-0" : "list-group-item border-0 text-red-600";
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      <Link href={home} id="wd-course-home-link" className={itemClass(home)}>
        Home
      </Link>
      <Link href={modules} id="wd-course-modules-link" className={itemClass(modules)}>
        Modules
      </Link>
      <Link href={assignments} id="wd-course-assignments-link" className={itemClass(assignments, false)}>
        Assignments
      </Link>
      <Link href={people} id="wd-course-people-link" className={itemClass(people, false)}>
        People
      </Link>
    </div>
  );
}
