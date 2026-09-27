export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ border: "1px solid gray", padding: "0.75rem" }}>
      <h4>Course Status</h4>
      <button id="wd-publish-btn" type="button">
        Publish
      </button>
      <br />
      <br />
      <h5>To Do</h5>
      <ul>
        <li>Grade Q10 quiz</li>
        <li>Post Week 4 module</li>
      </ul>
      <h5>Coming Up</h5>
      <ul>
        <li>Assignment 1 due Sunday</li>
      </ul>
    </div>
  );
}
