export default function Lesson({
  lesson,
}: {
  lesson: { id: string; title: string; contentItems?: string[] };
}) {
  return (
    <li id={`wd-lesson-${lesson.id}`} style={{ padding: "0.25rem 0" }}>
      {lesson.title}
      {lesson.contentItems && lesson.contentItems.length > 0 && (
        <ul id={`wd-lesson-${lesson.id}-content-items`}>
          {lesson.contentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
