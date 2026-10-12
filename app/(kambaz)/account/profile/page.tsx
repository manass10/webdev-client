import Link from "next/link";

export default function Profile() {
  const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input placeholder="username" defaultValue="jdoe" className={field} />
      <input placeholder="password" type="password" className={field} />
      <input placeholder="First Name" defaultValue="Jane" className={field} />
      <input placeholder="Last Name" defaultValue="Doe" className={field} />
      <input type="date" defaultValue="2000-01-21" className={field} />
      <input
        placeholder="email"
        type="email"
        defaultValue="jdoe@northeastern.edu"
        className={field}
      />
      <select defaultValue="STUDENT" className={field}>
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
      </select>
      <Link
        id="wd-signout-submit"
        href="/account/signin"
        className="mt-2 block w-full rounded bg-neutral-700 px-3 py-2 text-center text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}
