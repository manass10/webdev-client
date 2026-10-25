"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname() ?? "";

  const linkStyle = (href: string) =>
    pathname === href
      ? { fontWeight: "bold" as const, textDecoration: "underline" as const }
      : undefined;

  return (
    <div id="wd-toc">
      <p>Manas Suresh Salian — &quot; Learning by Doing&quot;</p>

      <ul>
        <li>
          <Link href="/labs" id="wd-home-link" style={linkStyle("/labs")}>
          Home
          </Link>
        </li>

        <li>
          <Link href="/labs/lab1" id="wd-lab1-link" style={linkStyle("/labs/lab1")}>
          Lab 1
          </Link>
        </li>

        <li>
          <Link href="/labs/lab2" id="wd-lab2-link" style={linkStyle("/labs/lab2")}>
          Lab 2
          </Link>
        </li>

        <li>
          <Link href="/labs/lab3" id="wd-lab3-link" style={linkStyle("/labs/lab3")}>
          Lab 3
          </Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link" style={linkStyle("/labs/lab4")}>
          Lab 4
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link" style={linkStyle("/labs/lab5")}>
          Lab 5
          </Link>
        </li>
        <li>
          <Link href="/account/signin">Kambaz</Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  )
}