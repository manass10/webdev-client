import modules from "../../../database/modules.json";

export default function ModulesList({ cid }: { cid: string }) {
  const courseModules = modules.filter((m) => m.course === cid);

  return (
    <div id="wd-modules">
      <h3>Modules</h3>
      <ul>
        {courseModules.map((m) => (
          <li key={m._id} id={`wd-module-${m._id}`}>
            {m.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
