import Link from "next/link";
import assignments from "../../../database/assignments.json";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const courseAssignments = assignments.filter((a) => a.course === cid);

  return (
    <div id="wd-assignments">
      <h3>Assignments</h3>
      <ul id="wd-assignment-list">
        {courseAssignments.map((a) => (
          <li key={a._id} id={`wd-assignment-${a._id}`}>
            <Link href={`/courses/${cid}/assignments/${a._id}`}>{a.title}</Link>
            {" — "}
            {a.points} pts, due {a.due}
          </li>
        ))}
      </ul>
    </div>
  );
}
