import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <label htmlFor="wd-signup-username">Username:</label>
      <br />
      <input type="text" id="wd-signup-username" />
      <br />
      <label htmlFor="wd-signup-password">Password:</label>
      <br />
      <input type="password" id="wd-signup-password" />
      <br />
      <label htmlFor="wd-signup-verify-password">Verify Password:</label>
      <br />
      <input type="password" id="wd-signup-verify-password" />
      <br />
      <Link href="/dashboard" id="wd-signup-btn">
        Sign up
      </Link>
    </div>
  );
}
