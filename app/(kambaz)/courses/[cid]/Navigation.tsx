import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  return (
    <div id="wd-course-navigation">
      <ul>
        <li>
          <Link href={`/courses/${cid}/home`} id="wd-course-home-link">
            Home
          </Link>
        </li>
        <li>
          <Link href={`/courses/${cid}/modules`} id="wd-course-modules-link">
            Modules
          </Link>
        </li>
        <li>
          <Link href={`/courses/${cid}/piazza`} id="wd-course-piazza-link">
            Piazza
          </Link>
        </li>
        <li>
          <Link href={`/courses/${cid}/zoom`} id="wd-course-zoom-link">
            Zoom
          </Link>
        </li>
        <li>
          <Link
            href={`/courses/${cid}/assignments`}
            id="wd-course-assignments-link"
          >
            Assignments
          </Link>
        </li>
        <li>
          <Link href={`/courses/${cid}/quizzes`} id="wd-course-quizzes-link">
            Quizzes
          </Link>
        </li>
        <li>
          <Link href={`/courses/${cid}/grades`} id="wd-course-grades-link">
            Grades
          </Link>
        </li>
        <li>
          <Link href={`/courses/${cid}/people`} id="wd-course-people-link">
            People
          </Link>
        </li>
      </ul>
    </div>
  );
}
