"use client";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const modules = useModulesStore((s) => s.modules);
  const updateModule = useModulesStore((s) => s.updateModule);
  const courseModules = modules.filter((m) => m.course === cid);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map((module) => (
          <li key={module._id} className="mb-3 border border-neutral-200">
            <div className="flex items-center justify-between bg-neutral-100 px-3 py-2">
              <span className="font-semibold">
                {module.editing ? (
                  <input className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
                    defaultValue={module.name}
                    onChange={(e) => updateModule({ ...module, name: e.target.value })}
                    onKeyDown={(e) => { if (e.key === "Enter") updateModule({ ...module, editing: false }); }} />
                ) : module.name}
              </span>
              <ModuleControlButtons moduleId={module._id} />
            </div>
            {module.lessons && (
              <ul className="m-0 list-none p-0">
                {module.lessons.map((lesson) => (
                  <li key={lesson._id} className="border-l-4 border-green-600 px-4 py-2">{lesson.name}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
