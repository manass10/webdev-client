import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <ul>
        <li>
          <Link href="/account/signin" id="wd-account-signin-link">
            Sign in
          </Link>
        </li>
        <li>
          <Link href="/account/signup" id="wd-account-signup-link">
            Sign up
          </Link>
        </li>
        <li>
          <Link href="/account/profile" id="wd-account-profile-link">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
