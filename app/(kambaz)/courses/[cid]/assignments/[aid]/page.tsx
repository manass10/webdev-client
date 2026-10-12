import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;

  const field =
    "mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm";
  const label = "block text-sm font-medium text-neutral-700";
  const row = "mb-4";

  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <div className={row}>
        <label htmlFor="wd-name" className={label}>
          Assignment Name
        </label>
        <input id="wd-name" defaultValue={`Assignment ${aid}`} className={field} />
      </div>

      <div className={row}>
        <label htmlFor="wd-description" className={label}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={6}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should include the following:"
          className={field}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={row}>
          <label htmlFor="wd-points" className={label}>
            Points
          </label>
          <input id="wd-points" type="number" defaultValue={100} className={field} />
        </div>
        <div className={row}>
          <label htmlFor="wd-group" className={label}>
            Assignment Group
          </label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={row}>
          <label htmlFor="wd-display-grade-as" className={label}>
            Display Grade as
          </label>
          <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
          </select>
        </div>
        <div className={row}>
          <label htmlFor="wd-submission-type" className={label}>
            Submission Type
          </label>
          <select id="wd-submission-type" defaultValue="ONLINE" className={field}>
            <option value="ONLINE">Online</option>
            <option value="NO_SUBMISSION">No Submission</option>
            <option value="ON_PAPER">On Paper</option>
          </select>
        </div>
      </div>

      <fieldset className={`${row} rounded border border-neutral-300 p-3`}>
        <legend className="px-1 text-sm font-medium text-neutral-700">
          Online Entry Options
        </legend>
        <label className="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" id="wd-text-entry" /> Text Entry
        </label>
        <label className="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" id="wd-website-url" defaultChecked /> Website URL
        </label>
        <label className="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" id="wd-media-recordings" /> Media Recordings
        </label>
        <label className="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" id="wd-student-annotation" /> Student Annotation
        </label>
        <label className="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" id="wd-file-upload" /> File Uploads
        </label>
      </fieldset>

      <div className={row}>
        <label htmlFor="wd-assign-to" className={label}>
          Assign to
        </label>
        <input id="wd-assign-to" defaultValue="Everyone" className={field} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className={row}>
          <label htmlFor="wd-due-date" className={label}>
            Due
          </label>
          <input id="wd-due-date" type="date" defaultValue="2026-09-27" className={field} />
        </div>
        <div className={row}>
          <label htmlFor="wd-available-from" className={label}>
            Available from
          </label>
          <input
            id="wd-available-from"
            type="date"
            defaultValue="2026-09-13"
            className={field}
          />
        </div>
        <div className={row}>
          <label htmlFor="wd-available-until" className={label}>
            Until
          </label>
          <input
            id="wd-available-until"
            type="date"
            defaultValue="2026-10-04"
            className={field}
          />
        </div>
      </div>

      <div className={row}>
        <label htmlFor="wd-ai-editor-notes" className={label}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={field} />
      </div>

      <hr className="my-6 border-neutral-200" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
