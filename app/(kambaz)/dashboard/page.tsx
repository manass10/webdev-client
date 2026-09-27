import CourseCard from "./CourseCard";

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      number: "CS 5610",
      name: "Web Development",
      description: "Full-stack Next.js web application development.",
    },
    {
      id: "5678",
      number: "CS 5800",
      name: "Algorithms",
      description: "Design and analysis of algorithms.",
    },
    {
      id: "9012",
      number: "CS 5200",
      name: "Database Management Systems",
      description: "Relational and NoSQL database design.",
    },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            number={course.number}
            name={course.name}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}
