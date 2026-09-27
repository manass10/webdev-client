export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { aid } = await params;

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input
        id="wd-name"
        type="text"
        defaultValue={`Assignment ${aid}`}
      />
      <br />
      <br />
      <textarea id="wd-description" rows={6} cols={50} defaultValue={
        `The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should include the following:`
      } />
      <br />
      <br />

      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="NO_SUBMISSION">No Submission</option>
                <option value="ON_PAPER">On Paper</option>
              </select>
              <br />
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" defaultChecked />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">
                Student Annotation
              </label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input
                id="wd-assign-to"
                type="text"
                defaultValue="Everyone"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2026-09-27" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2026-09-13"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2026-10-04"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <button id="wd-cancel-btn" type="button">
        Cancel
      </button>
      <button id="wd-save-btn" type="submit">
        Save
      </button>
    </div>
  );
}
