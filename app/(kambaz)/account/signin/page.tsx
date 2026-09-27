import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <label htmlFor="wd-signin-username">Username:</label>
      <br />
      <input
        type="text"
        id="wd-signin-username"
        placeholder="Sign in with your Canvas email"
      />
      <br />
      <label htmlFor="wd-signin-password">Password:</label>
      <br />
      <input type="password" id="wd-signin-password" />
      <br />
     
      <Link href="/dashboard" id="wd-signin-submit">
        Sign in
      </Link>
    </div>
  );
}
