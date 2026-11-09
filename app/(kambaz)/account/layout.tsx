import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-[120px] shrink-0"><AccountNavigation /></div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
