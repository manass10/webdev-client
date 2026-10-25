"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

const links = [
  { id: "wd-account-link", label: "Account", href: "/account", icon: FaRegCircleUser, iconColor: "text-white" },
  { id: "wd-dashboard-link", label: "Dashboard", href: "/dashboard", icon: AiOutlineDashboard },
  { id: "wd-course-link", label: "Courses", href: "/dashboard", match: "/courses", icon: LiaBookSolid },
  { id: "wd-calendar-link", label: "Calendar", href: "/calendar", icon: IoCalendarOutline },
  { id: "wd-inbox-link", label: "Inbox", href: "/inbox", icon: FaInbox },
  { id: "wd-labs-link", label: "Labs", href: "/labs", icon: LiaCogSolid },
];

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/NEU.png" width={75} height={75} alt="Northeastern University" className="mx-auto" />
      </a>
      {links.map((link) => {
        const matchPath = link.match ?? link.href;
        const isActive =
          matchPath === "/dashboard"
            ? pathname === "/dashboard"
            : pathname === matchPath || pathname.startsWith(matchPath + "/");
        const Icon = link.icon;
        const tileClass = isActive
          ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
          : "block bg-black py-3 text-center text-sm text-white no-underline";
        const iconClass = isActive
          ? "inline-block text-3xl text-red-600"
          : `inline-block text-3xl ${link.iconColor ?? "text-red-600"}`;
        return (
          <Link key={link.id} href={link.href} id={link.id} className={tileClass}>
            <Icon className={iconClass} />
            <br />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
