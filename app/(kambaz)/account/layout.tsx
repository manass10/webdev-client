import { ReactNode } from "react";
import AccountNavigation from "./AccountNavigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex gap-4">
      <div className="hidden w-[140px] shrink-0 md:block">
        <AccountNavigation />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
