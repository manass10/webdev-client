import Link from "next/link";

export default function CourseCard({
  id,
  number,
  name,
  description,
}: {
  id: string;
  number: string;
  name: string;
  description: string;
}) {
  return (
    <div id={`wd-dashboard-course-${id}`} style={{ border: "1px solid gray", padding: "0.75rem", marginBottom: "0.75rem", maxWidth: "300px" }}>
      <Link href={`/courses/${id}/home`}>
        <h4>
          {number} {name}
        </h4>
      </Link>
      <p>{description}</p>
      <Link href={`/courses/${id}/home`}>Go</Link>
    </div>
  );
}
