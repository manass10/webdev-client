"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const pathname = usePathname() ?? "";
  const links = currentUser ? [{ href: "/account/profile", label: "Profile" }]
    : [{ href: "/account/signin", label: "Signin" }, { href: "/account/signup", label: "Signup" }];
  return (
    <div id="wd-account-navigation" className="flex flex-col gap-1">
      {links.map((link) => (
        <Link key={link.href} href={link.href}
          className={pathname === link.href ? "font-bold text-black" : "text-red-600"}>{link.label}</Link>
      ))}
    </div>
  );
}
