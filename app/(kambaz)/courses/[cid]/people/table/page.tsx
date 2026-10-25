import users from "../../../../database/users.json";
import enrollments from "../../../../database/enrollments.json";

export default async function PeopleTable({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const enrolledUserIds = enrollments
    .filter((e) => e.course === cid)
    .map((e) => e.user);
  const enrolledUsers = users.filter((u) => enrolledUserIds.includes(u._id));

  return (
    <div id="wd-people-table">
      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((u) => (
            <tr key={u._id}>
              <td>
                {u.firstName} {u.lastName}
              </td>
              <td>{u.username}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
