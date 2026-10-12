"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const itemClass = (href: string) =>
    pathname === href
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      <Link href="/account/signin" id="wd-account-signin-link" className={itemClass("/account/signin")}>
        Sign in
      </Link>
      <Link href="/account/signup" id="wd-account-signup-link" className={itemClass("/account/signup")}>
        Sign up
      </Link>
      <Link href="/account/profile" id="wd-account-profile-link" className={itemClass("/account/profile")}>
        Profile
      </Link>
    </div>
  );
}
