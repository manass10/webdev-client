import assignments from "../../../../database/assignments.json";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { aid } = await params;
  const assignment = assignments.find((a) => a._id === aid);
  const name = assignment ? assignment.title : "Unknown Assignment";

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue={name} />
      <br />
      <br />
      <label htmlFor="wd-points">Points</label>
      <br />
      <input id="wd-points" type="number" defaultValue={assignment?.points ?? 100} />
    </div>
  );
}
