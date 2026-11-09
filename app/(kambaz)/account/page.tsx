"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccountContext } from "./AccountContext";
export default function AccountPage() {
  const { currentUser } = useAccountContext();
  const router = useRouter();
  useEffect(() => {
    router.push(currentUser ? "/account/profile" : "/account/signin");
  }, [currentUser, router]);
  return null;
}
