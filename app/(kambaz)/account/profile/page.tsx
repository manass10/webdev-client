import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <label htmlFor="wd-profile-username">Username:</label>
      <br />
      <input type="text" id="wd-profile-username" defaultValue="jdoe" />
      <br />
      <label htmlFor="wd-profile-password">Password:</label>
      <br />
      <input type="password" id="wd-profile-password" />
      <br />
      <label htmlFor="wd-profile-first-name">First Name:</label>
      <br />
      <input type="text" id="wd-profile-first-name" defaultValue="Jane" />
      <br />
      <label htmlFor="wd-profile-last-name">Last Name:</label>
      <br />
      <input type="text" id="wd-profile-last-name" defaultValue="Doe" />
      <br />
      <label htmlFor="wd-profile-dob">Date of Birth:</label>
      <br />
      <input type="date" id="wd-profile-dob" defaultValue="2000-01-21" />
      <br />
      <label htmlFor="wd-profile-email">Email:</label>
      <br />
      <input
        type="email"
        id="wd-profile-email"
        defaultValue="jdoe@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-profile-role">Role:</label>
      <br />
      <select id="wd-profile-role" defaultValue="STUDENT">
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
      </select>
      <br />
      <Link href="/account/signin" id="wd-signout-btn">
        Sign out
      </Link>
    </div>
  );
}
