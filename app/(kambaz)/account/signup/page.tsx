import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        placeholder="verify password"
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <Link
        id="wd-signup-submit"
        href="/dashboard"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign up
      </Link>
      <Link id="wd-signin-link" href="/account/signin" className="text-sm text-blue-600">
        Sign in
      </Link>
    </div>
  );
}
