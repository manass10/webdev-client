import Lesson from "./Lesson";

export default function Module({
  module,
}: {
  module: {
    id: string;
    name: string;
    lessons: { id: string; title: string }[];
  };
}) {
  return (
    <div
      id={`wd-module-${module.id}`}
      style={{ border: "1px solid gray", marginBottom: "0.75rem" }}
    >
      <h4 style={{ background: "#f0f0f0", padding: "0.5rem" }}>
        {module.name}
      </h4>
      <ul>
        {module.lessons.map((lesson) => (
          <Lesson key={lesson.id} lesson={lesson} />
        ))}
      </ul>
    </div>
  );
}
