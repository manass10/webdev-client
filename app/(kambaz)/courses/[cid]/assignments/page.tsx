import Link from "next/link";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const assignments = [
    {
      id: "A1",
      title: "A1 - HTML User Interfaces",
      points: 125,
      due: "Sep 27, 2026",
      available: "Sep 13, 2026",
    },
    {
      id: "A2",
      title: "A2 - CSS Styling",
      points: 125,
      due: "Oct 11, 2026",
      available: "Sep 27, 2026",
    },
    {
      id: "A3",
      title: "A3 - JavaScript",
      points: 125,
      due: "Oct 25, 2026",
      available: "Oct 11, 2026",
    },
  ];

  return (
    <div id="wd-assignments">
      <input type="text" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-btn" type="button">
        + Assignment
      </button>

      <div id="wd-assignments-list">
        <h3>ASSIGNMENTS</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {assignments.map((a) => (
            <li
              id={`wd-assignment-${a.id}`}
              key={a.id}
              style={{
                border: "1px solid gray",
                padding: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <Link href={`/courses/${cid}/assignments/${a.id}`}>
                {a.title}
              </Link>
              <p>
                Multiple Modules | <strong>Not available until</strong>{" "}
                {a.available} | <strong>Due</strong> {a.due} | {a.points} pts
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
