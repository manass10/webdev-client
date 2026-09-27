import Link from "next/link";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <ul>
      
        <li>
          <Link href="/dashboard" id="wd-signin-btn">
            Sign in
          </Link>
        </li>
        <li>
          <Link href="/account" id="wd-account-link">
            Account
          </Link>
        </li>
        <li>
          <Link href="/dashboard" id="wd-dashboard-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/courses/1234/home" id="wd-courses-link">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/labs" id="wd-labs-link">
            Labs
          </Link>
        </li>
      </ul>
    </div>
  );
}
