"use client";
import { usePathname } from "next/navigation";

export default function ClientPathname() {
  const pathname = usePathname() ?? "";
  return (
    <div>
      <p>Current pathname (Client Component): {pathname}</p>
      {/* On your own: Pathname length: 10 on /labs/lab3 */}
      <p>Pathname length: {pathname.length}</p>
    </div>
  );
}
